import { useAppTasksContext } from "../../../shared/contexts/Tasks/tasks-context";
import classNames from "classnames";
import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import AddTask from "../../../shared/components/AddTasks/addtasks";

export default function Today() {
  const { todayTasks } = useAppTasksContext();

  return (
    <>
      <AddTask />
      <DashboardLayout title="Today">
        <ul className="list-none w-full">
          {todayTasks.map((task) => {
            return (
              <li
                key={task.id}
                className="p-2 flex flex-col bg-zinc-50 w-full rounded gap-3"
              >
                <h1 className="font-semibold text-normal">{task.title}</h1>
                <div className="flex bg-zinc-200 items-center px-2 gap-2">
                  <div
                    className={classNames(
                      task.type === "Work" && "bg-rose-700 rounded h-3 w-3",
                      task.type === "Study" && "bg-amber-700 rounded h-3 w-3",
                      task.type === "Trip" && "bg-emerald-700 rounded h-3 w-3",
                      task.type === "Personal" && "bg-sky-700 rounded h-3 w-3"
                    )}
                  ></div>
                  <div className="flex rounded-md text-xs">
                    <h2>{task.type}</h2>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </DashboardLayout>
    </>
  );
}
