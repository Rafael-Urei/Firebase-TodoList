import { Calendar } from "lucide-react";
import { AddTask } from "../../../shared/components/AddTaskModal/AddTask";
import { AddTaskButton } from "../../../shared/components/Buttons/AddTaskButton/AddTaskButton";
import { useAppAddModalContext } from "../../../shared/contexts/AddTaskModalContext/AddModal";
import { useAppTaskContext } from "../../../shared/contexts/TasksContext/TasksContext";
import { useAppTimeContext } from "../../../shared/contexts/TimeContext/TimeContext";
import { DashboardLayout } from "../../../shared/layouts/DashboardLayout";
import { format, startOfToday } from "date-fns";

export const Today = () => {
  const { isOpen } = useAppAddModalContext();
  const { tasks } = useAppTaskContext();
  const {} = useAppTimeContext();
  let actualDay = startOfToday().toISOString();

  return (
    <>
      {isOpen && <AddTask />}
      <DashboardLayout title="Today">
        <div className="flex flex-col">
          <AddTaskButton />
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
        </div>
      </DashboardLayout>
    </>
  );
};
