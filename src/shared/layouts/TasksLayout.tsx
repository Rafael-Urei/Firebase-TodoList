import { Calendar, Check } from "lucide-react";
import {
  FormData,
  useAppTaskContext,
} from "../contexts/TasksContext/TasksContext";
import { format } from "date-fns";
import { useAppTaskMenuContext } from "../contexts/TaskMenuContext/TaskMenuContext";
import { motion } from "framer-motion";

interface ITasksLayout {
  day: string;
}

export const animation = {
  initial: { opacity: 1, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0 },
};

export const TasksList = ({ day }: ITasksLayout) => {
  const { tasks, setSelectedTask } = useAppTaskContext();
  const { toggleTaskMenu } = useAppTaskMenuContext();

  const handleEditDeleteTask = (task: FormData) => {
    toggleTaskMenu(true);
    setSelectedTask(task);
  };
  return (
    <ul>
      {tasks.map((task) => {
        const date = new Date(task.date);
        if (task.date === day) {
          return (
            <motion.li
              variants={animation}
              initial="initial"
              animate="animate"
              exit="exit"
              key={task.id}
              className={
                task.done
                  ? "flex flex-col border-b-2 border-slate-100 h-20 justify-center opacity-50 cursor-pointer"
                  : "flex flex-col border-b-2 border-slate-100 h-20 justify-center cursor-pointer dark:text-zinc-200 dark:border-zinc-600"
              }
              onClick={() => handleEditDeleteTask(task)}
            >
              <header className="flex gap-4">
                <input type="checkbox" checked={task.done} disabled />
                <h1 className="font-semibold">{task.title}</h1>
              </header>
              <div className="flex m-2 items-center gap-2">
                <div className="flex gap-2 items-center">
                  <div
                    className={
                      task.type === "Work"
                        ? "h-3 w-3 rounded bg-pink-200"
                        : task.type === "Study"
                        ? "h-3 w-3 rounded bg-yellow-200"
                        : "h-3 w-3 rounded bg-blue-200"
                    }
                  ></div>
                  <h2 className="text-xs font-semibold opacity-50">
                    {task.type}
                  </h2>
                </div>
                <div className="h-full w-1 bg-slate-200"></div>
                <div className="flex text-xs font-semibold opacity-50">
                  {task.done ? (
                    <span className="flex items-center gap-2">
                      <p>Done</p>
                      <Check className="h-3 w-3" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Not done yet
                    </span>
                  )}
                </div>
                <div className="h-full w-1 bg-slate-200"></div>
                <div className="flex gap-2 items-center">
                  <div className="h-3 w-3">
                    <Calendar className="h-3 w-3 opacity-50" />
                  </div>
                  <h2 className="text-xs font-semibold opacity-50">
                    {format(date, "yyyy-MM-dd")}
                  </h2>
                </div>
              </div>
            </motion.li>
          );
        } else {
          return;
        }
      })}
    </ul>
  );
};
