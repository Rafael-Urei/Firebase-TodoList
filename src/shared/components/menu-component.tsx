import { X, Search } from "lucide-react";
import { useAppMenuContext } from "../contexts/MenuContext/menu-context";
import { ReactNode, useState } from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import classNames from "classnames";
import { useAppTasksContext } from "../contexts/task-context";
import { selectTaskAndOpenTaskMenu } from "../utils/select-task";
import { useAppTaskMenuContext } from "../contexts/TaskMenuContext/task-menu-context";

interface IProps {
  children: React.ReactNode;
}

type LinkRouteProps = {
  to: string;
  onClick: () => void | undefined;
  label: string;
  icon: ReactNode;
};

const ListWithRoutes = ({ to, label, onClick, icon }: LinkRouteProps) => {
  const { toggleTaskMenu, isOpen } = useAppTaskMenuContext();
  const resolvedPath = useResolvedPath(to);
  const navigate = useNavigate();
  const match = useMatch({ path: resolvedPath.pathname, end: false });
  const handleNavigate = () => {
    navigate(to);
    onClick?.();
    if (isOpen) return toggleTaskMenu();
  };

  return (
    <li
      className={
        !!match
          ? "bg-indigo-600 text-zinc-50 text-sm font-bold flex items-center p-2 rounded gap-2 cursor-pointer"
          : "bg-trasnparent text-sm flex items-center p-2 rounded gap-2 cursor-pointer hover:bg-slate-200"
      }
      onClick={handleNavigate}
    >
      <div
        className={
          !!match
            ? "h-4 w-4 text-slate-50 flex items-center justify-center"
            : "h-4 w-4 text-indigo-600 flex items-center justify-center"
        }
      >
        {icon}
      </div>
      <h2>{label}</h2>
    </li>
  );
};

export const Menu = ({ children }: IProps) => {
  const { isOpen, toggleMenu, menuOptions } = useAppMenuContext();
  const { isOpen: isTaskMenuOpen, toggleTaskMenu } = useAppTaskMenuContext();
  const [search, setSearch] = useState("");
  const { tasks, selectTask } = useAppTasksContext();
  let filteredTasks = tasks.filter((tasks) => tasks.title.includes(search));
  return (
    <>
      <div className="h-screen">
        {isOpen ? (
          <div className="relative flex flex-col gap-6 h-full flex-1 p-4 bg-zinc-50 rounded-md text-zinc-500 scale-95 dark:bg-zinc-700">
            <header className="w-full flex flex-col gap-4">
              <h1 className="font-bold text-xl">Menu</h1>
              <form className="px-2 flex w-full h-9 border rounded-md items-center">
                <Search className="h-4 w-4" />
                <input
                  placeholder="Looking for a task?"
                  type="text"
                  className="bg-transparent p-3"
                  onChange={(e) => setSearch(e.target.value)}
                ></input>
              </form>
            </header>
            <ul className="flex flex-col gap-2">
              {menuOptions.map((menuOption) => (
                <ListWithRoutes
                  key={menuOption.path}
                  label={menuOption.label}
                  to={menuOption.path}
                  icon={menuOption.icon}
                  onClick={toggleMenu}
                ></ListWithRoutes>
              ))}
            </ul>
            <h2 className="font-semibold mt-4">All Tasks</h2>
            <ul className="flex flex-col p-2 rounded w-full h-52 overflow-scroll gap-2">
              {filteredTasks.length !== 0
                ? filteredTasks.map((task) => {
                    return (
                      <div
                        key={task.id}
                        onClick={() =>
                          selectTaskAndOpenTaskMenu(
                            isTaskMenuOpen,
                            toggleTaskMenu,
                            task,
                            selectTask
                          )
                        }
                        className="flex items-center gap-2 bg-zinc-50 rounded shadow p-2 cursor-pointer duration-200 hover:bg-zinc-100 font-semibold text-sm text-slate-500"
                      >
                        <span
                          className={classNames(task.done && "line-through")}
                        >
                          {task.title.charAt(0).toLocaleUpperCase() +
                            task.title.slice(1)}
                        </span>
                        <div
                          className={classNames(
                            task.type == "Study" &&
                              "h-2 w-2 bg-pink-600 rounded",
                            task.type == "Work" && "h-2 w-2 bg-sky-600 rounded",
                            task.type == "Trip" &&
                              "h-2 w-2 bg-amber-600 rounded",
                            task.type == "Personal" &&
                              "h-2 w-2 bg-emerald-600 rounded"
                          )}
                        ></div>
                        {task.done && (
                          <span className="text-emerald-500 text-xs no-underline">
                            Done
                          </span>
                        )}
                      </div>
                    );
                  })
                : []}
            </ul>
            <button onClick={toggleMenu} className="absolute right-3">
              <X />
            </button>
          </div>
        ) : null}
      </div>
      <div className="w-full h-screen">{children}</div>
    </>
  );
};
