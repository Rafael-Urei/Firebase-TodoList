import classNames from "classnames";
import { ITasksData, useAppTasksContext } from "../contexts/task-context";
import { useAppTaskMenuContext } from "../contexts/TaskMenuContext/task-menu-context";
import { selectTaskAndOpenTaskMenu } from "../utils/select-task";
import { format } from "date-fns";
import DoneButton from "./done-task-button-component";

export default function Item({ ...task }: ITasksData) {
  const { isOpen: isTaskMenuOpen, toggleTaskMenu } = useAppTaskMenuContext();
  const { selectTask } = useAppTasksContext();

  return (
    <div className="w-full flex gap-2">
      <li
        className={classNames(
          "flex flex-col gap-3 bg-zinc-50 min-h-24 h-auto shadow-md rounded-md p-4 cursor-pointer duration-500 hover:bg-slate-100 w-full",
          { "line-through": task.done }
        )}
        onClick={() =>
          selectTaskAndOpenTaskMenu(
            isTaskMenuOpen,
            toggleTaskMenu,
            task,
            selectTask
          )
        }
      >
        <h1 className="capitalize font-semibold text-zinc-600">{task.title}</h1>
        {task.description && (
          <div className="min-h-10 p-4 rounded-md w-full text-zinc-400 text-xs">
            {task.description}
          </div>
        )}
        <div className="flex rounded items-center p-2 gap-2 opacity-50">
          <div
            className={classNames(
              task.type == "Study" && "bg-pink-600 h-3 w-3 rounded",
              task.type == "Work" && "bg-sky-600 h-3 w-3 rounded",
              task.type == "Personal" && "bg-emerald-600 h-3 w-3 rounded",
              task.type == "Trip" && "bg-amber-600 h-3 w-3 rounded"
            )}
          ></div>
          <div className="flex rounded-md text-xs font-semibold text-slate-500">
            <h2>{task.type}</h2>
          </div>
          <div className="h-4 w-[2px] bg-slate-500 rounded"></div>
          <p className="text-xs font-semibold text-slate-500">
            {format(new Date(task.date), "MM-dd-yyyy")}
          </p>
        </div>
      </li>
      {task && <DoneButton task={task} />}
    </div>
  );
}
