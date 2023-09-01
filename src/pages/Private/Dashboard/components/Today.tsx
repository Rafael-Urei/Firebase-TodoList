// import { ArrowRight } from "lucide-react";
// import { tasks } from "../../../../shared/contexts/TasksContext/TasksContext";
import { AddTaskButton } from "../../../../shared/components/Buttons/AddTaskButton/AddTaskButton";
import { useAppTaskContext } from "../../../../shared/contexts/TasksContext/TasksContext";
import { startOfToday, format } from "date-fns";
import { Calendar } from "lucide-react";

export const TodayTasks = () => {
  // const actualDate = new Date().getDate();
  const { tasks } = useAppTaskContext();
  let actualDay = startOfToday().toISOString();
  return (
    <>
      <div className="flex bg-zinc-50 border rounded-md p-5 flex-col gap-4 w-full">
        <h1 className="text-lg font-bold text-zinc-700">Today</h1>
        <AddTaskButton />
        <ul>
          <ul>
            {tasks.map((task) => {
              const date = new Date(task.date);
              if (task.date === actualDay) {
                return (
                  <li
                    key={task.id}
                    className="flex flex-col border-b-2 border-slate-100 h-20 justify-center"
                  >
                    <header className="flex gap-4">
                      <input type="checkbox" />
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
                      <div className="flex gap-2 items-center">
                        <div className="h-3 w-3">
                          <Calendar className="h-3 w-3 opacity-50" />
                        </div>
                        <h2 className="text-xs font-semibold opacity-50">
                          {format(date, "yyyy-MM-dd")}
                        </h2>
                      </div>
                    </div>
                  </li>
                );
              } else {
                return;
              }
            })}
          </ul>
        </ul>
      </div>
    </>
  );
};
