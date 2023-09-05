import { SubmitHandler, useForm } from "react-hook-form";
import { useAppTaskMenuContext } from "../../contexts/TaskMenuContext/TaskMenuContext";
import { useAppTaskContext } from "../../contexts/TasksContext/TasksContext";
import { z } from "zod";
import { format, startOfToday } from "date-fns";
import { useAppCalendarContext } from "../../contexts/CalendarContext/CalendarContext";
import { CalendarComponent } from "..";
import { db } from "../../config/Firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useAppAuthContext } from "../../contexts/AuthContext/Auth";
import { X } from "lucide-react";
import { useEffect } from "react";

interface IFormData {
  title: string;
  description: string;
  date: string;
  type: string;
  id: string;
  done: boolean;
}

const TaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  type: z.string(),
  id: z.string(),
  done: z.boolean(),
});

const typeList = ["Work", "Study", "Trip", "Personal"];

export const TaskMenu = () => {
  type TaskSchemaData = z.infer<typeof TaskSchema>;
  const { currentUser } = useAppAuthContext();
  const { isOpen, toggleTaskMenu } = useAppTaskMenuContext();
  const { inputValue, toggleCalendar, setInputValue } = useAppCalendarContext();
  const { selectedTask, setTasks, tasks } = useAppTaskContext();
  console.log(selectedTask);
  const { register, handleSubmit, formState, reset } = useForm<TaskSchemaData>({
    defaultValues: {
      title: "",
      description: "",
      date: "",
      type: "",
    },
  });

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    data.date = inputValue.toISOString();
    data = { ...data, id: selectedTask.id, done: selectedTask.done };
    const docRef = doc(
      db,
      "users",
      `${currentUser?.uid}`,
      "tasks",
      selectedTask.id
    );
    await updateDoc(docRef, {
      ...data,
    })
      .then(() =>
        setTasks(
          tasks.map((task) => {
            if (task.id === selectedTask.id) {
              return { ...data };
            } else {
              return task;
            }
          })
        )
      )
      .catch((e) => console.log(e))
      .finally(() => toggleTaskMenu(false));
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        title: "",
        description: "",
        date: "",
        type: "",
      });
    }
  }, [formState, reset]);

  const handleDeleteTask = async () => {
    await deleteDoc(
      doc(db, "users", `${currentUser?.uid}`, "tasks", selectedTask.id)
    )
      .then(() => setTasks(tasks.filter((task) => task.id !== selectedTask.id)))
      .catch((e) => console.log(e))
      .finally(() => {
        toggleTaskMenu(false), setInputValue(startOfToday());
      });
  };

  return (
    <>
      {isOpen && (
        <div className="relative h-screen w-2/3 border scale-95 rounded-md p-5 dark:bg-zinc-700 dark:border-none">
          <button
            type="button"
            className="absolute right-4"
            onClick={() => toggleTaskMenu(false)}
          >
            <X className="text-violet-600" />
          </button>
          <h1 className="font-bold text-slate-500 mb-10 text-xl">
            {selectedTask.title}
          </h1>
          <form
            className="flex flex-col w-full gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="bg-transparent border rounded h-9 px-2 dark:border-none dark:bg-zinc-800 dark:text-zinc-300"
              {...register("title")}
            ></input>
            <textarea
              className="bg-transparent border rounded p-2 dark:border-none dark:bg-zinc-800 dark:text-zinc-300"
              {...register("description")}
            ></textarea>
            <div className="flex gap-2 items-center">
              <label>Type:</label>
              <select
                className="bg-transparent border p-2 rounded dark:border-none dark:bg-zinc-800 dark:text-zinc-300"
                {...register("type")}
              >
                <option>{selectedTask.type}</option>
                {typeList.map((type, index) => {
                  if (type !== selectedTask.type) {
                    return <option key={index}>{type}</option>;
                  }
                })}
              </select>
            </div>
            <div className="flex w-full gap-2 items-center ">
              <label>Due date:</label>
              <input
                className="w-28 bg-transparent border text-center rounded h-9 dark:border-none dark:bg-zinc-800 text-zinc-300"
                onClick={toggleCalendar}
                {...register("date")}
                value={format(inputValue, "MM/dd/yyyy")}
              />
            </div>
            <div className="flex items-center justify-center">
              <CalendarComponent />
            </div>
            <div className="w-full flex gap-2 items-center justify-center font-semibold">
              <button
                type="button"
                className="flex-1 bg-transparent border h-12 rounded-md dark:text-zinc-300"
                onClick={handleDeleteTask}
              >
                Delete
              </button>
              <button
                className="flex-1 bg-violet-600 text-slate-100 h-12 rounded-md"
                type="submit"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
