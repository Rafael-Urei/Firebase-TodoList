import classNames from "classnames";
import { ITasksData, useAppTasksContext } from "../contexts/task-context";
import { useAppTaskMenuContext } from "../contexts/TaskMenuContext/task-menu-context";
import { selectTaskAndOpenTaskMenu } from "../utils/select-task";

export default function Item({ ...task }: ITasksData) {
  const { isOpen: isTaskMenuOpen, toggleTaskMenu } = useAppTaskMenuContext();
  const { selectTask } = useAppTasksContext();
  return (
    <li
      className={classNames(
        "flex flex-col gap-3 bg-zinc-50 min-h-24 h-auto shadow-md rounded-md p-4 cursor-pointer duration-500 hover:bg-slate-100"
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
          className={classNames("h-3 w-3 rounded-full bg-zinc-800", {
            "bg-indigo-700": task.type === "Study",
            "bg-pink-700": task.type === "Work",
            "bg-emerald-700": task.type === "Personal",
            "bg-sky-700": task.type === "Trip",
          })}
        ></div>
        <div className="flex rounded-md text-xs">
          <h2>{task.type}</h2>
        </div>
      </div>
    </li>
  );
}
