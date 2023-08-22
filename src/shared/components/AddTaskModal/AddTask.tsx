import { motion } from "framer-motion";
import { z } from "zod";
import { useAppAddModalContext } from "../../contexts/AddTaskModalContext/AddModal";
import { Calendar, X } from "lucide-react";
import { CalendarComponent } from "../Calendar/Calendar";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppCalendarContext } from "../../contexts/CalendarContext/CalendarContext";

type FormData = {
  title: string;
  description: string;
  date: string;
  list: string;
};

const TaskFormSchema = z.object({
  title: z.string().nonempty("Cannot be blank!"),
  description: z.string().nonempty("Cannot be blank!"),
  list: z.string().nonempty("Cannot be blank!"),
  date: z.string().nonempty("Cannot be blank!"),
});

const animation = {
  initial: { opacity: 0, y: "-200%" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

export const AddTask = () => {
  const { isOpen, toggleCalendar } = useAppCalendarContext();
  console.log(isOpen);
  const { toggleAddTaskModal } = useAppAddModalContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TaskFormSchemaData>({ resolver: zodResolver(TaskFormSchema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
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
              className="bg-transparent border p-2 rounded"
              placeholder="Description"
            ></textarea>
            {errors.description && (
              <span className="text-pink-500 italic text-xs px-3">
                {errors.description.message}
              </span>
            )}
            <div className="flex gap-2 items-center">
              <label>List:</label>
              <select
                {...register("list")}
                onChange={(e) => console.log(e.target.value)}
              >
                <option>Work</option>
                <option>Study</option>
                <option>Trip</option>
              </select>
            </div>
            {errors.list && (
              <span className="text-pink-500 italic text-xs px-3">
                {errors.list.message}
              </span>
            )}
            <div className="flex gap-2 items-center relative">
              <label>Due date:</label>
              <input
                {...register("date")}
                className="border rounded-md bg-slate-100 w-28 p-2 flex items-center justify-center text-center"
                maxLength={10}
              ></input>
              {errors.date && (
                <span className="text-pink-500 italic text-xs px-3">
                  {errors.date.message}
                </span>
              )}
              <button type="button">
                <Calendar onClick={toggleCalendar} />
              </button>
              {isOpen && <CalendarComponent />}
            </div>
            <button type="submit" className="bg-yellow-500 rounded p-2">
              Add Task
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};
