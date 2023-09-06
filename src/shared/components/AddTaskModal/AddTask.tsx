import { motion } from "framer-motion";
import { z } from "zod";
import { useAppAddModalContext } from "../../contexts/AddTaskModalContext/AddModal";
import { Calendar, Plus, X } from "lucide-react";
import { CalendarComponent } from "../Calendar/Calendar";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppCalendarContext } from "../../contexts/CalendarContext/CalendarContext";
import { format } from "date-fns";
import { useAppTaskContext } from "../../contexts/TasksContext/TasksContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/Firebase";
import { useAppAuthContext } from "../../contexts/AuthContext/Auth";

type FormData = {
  title: string;
  description: string;
  date: string | Date;
  type: string;
};

export const TaskFormSchema = z.object({
  title: z.string().nonempty("Cannot be blank!"),
  description: z.string(),
  type: z.string().nonempty("Cannot be blank!"),
  date: z.string().nonempty(),
});

const animation = {
  initial: { opacity: 0, y: "-200%" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

export const AddTask = () => {
  const { isOpen, toggleCalendar, inputValue } = useAppCalendarContext();
  const { setTasks, tasks } = useAppTaskContext();
  const { toggleAddTaskModal } = useAppAddModalContext();
  const { currentUser } = useAppAuthContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TaskFormSchemaData>({ resolver: zodResolver(TaskFormSchema) });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    data.date = inputValue.toISOString();
    const tasksRef = collection(db, "users", `${currentUser?.uid}`, "tasks");
    await addDoc(tasksRef, {
      ...data,
      done: false,
    }).then((response) =>
      setTasks([...tasks, { ...data, done: false, id: response.id }])
    );
    toggleAddTaskModal();
  };

  type TaskFormSchemaData = z.infer<typeof TaskFormSchema>;
  return (
    <>
      <div className="fixed z-10 h-screen w-screen bg-slate-800 bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
        <motion.div
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="p-4 z-20 fixed shadow-md w-96 h-auto flex flex-col gap-2 bg-zinc-100 text-slate-700 items-center m-6 rounded text-sm font-medium"
        >
          <button
            className="absolute right-5 flex opacity-40"
            type="button"
            onClick={toggleAddTaskModal}
          >
            <X></X>
          </button>
          <header className="flex w-full p-4 items-center justify-center">
            <h1 className="text-lg font-semibold">Task</h1>
          </header>
          <form
            className="flex flex-col gap-4 h-full w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("title")}
              className="p-2 text-slate-800 rounded-sm border bg-transparent text-sm"
              placeholder="ex. Study React"
            ></input>
            {errors.title && (
              <span className="text-pink-500 italic text-xs px-3">
                {errors.title.message}
              </span>
            )}
            <textarea
              {...register("description")}
              className="bg-transparent border p-2 rounded placeholder:italic placeholder:text-xs"
              placeholder="Opitional: Description"
            ></textarea>
            {errors.description && (
              <span className="text-pink-500 italic text-xs px-3">
                {errors.description.message}
              </span>
            )}
            <div className="flex gap-2 items-center">
              <label>List:</label>
              <select {...register("type")}>
                <option>Work</option>
                <option>Study</option>
                <option>Trip</option>
                <option>Personal</option>
              </select>
            </div>
            {errors.type && (
              <span className="text-pink-500 italic text-xs px-3">
                {errors.type.message}
              </span>
            )}

            <div className="flex gap-2 items-center relative">
              <label>Due date:</label>
              <input
                value={format(inputValue, "MM/dd/yyyy")}
                {...register("date")}
                className="text-slate-500 border rounded-md bg-transparent w-28 p-2 flex items-center justify-center text-center"
                maxLength={10}
              ></input>
              {errors.date && (
                <span className="text-pink-500 italic text-xs px-3">
                  {errors.date.message}
                </span>
              )}
              <button type="button">
                <Calendar
                  className="h-4 w-4 text-slate-500"
                  onClick={toggleCalendar}
                />
              </button>
            </div>

            {isOpen && <CalendarComponent />}
            <button
              type="submit"
              className="flex items-center self-center bg-emerald-300 rounded-full h-10 w-10 p-2"
            >
              <Plus className="text-slate-50" />
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};
