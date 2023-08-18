import { ArrowRight } from "lucide-react";
import { tasks } from "../../../../shared/contexts/TasksContext/TasksContext";
import { AddTaskButton } from "../../../../shared/components/Buttons/AddTaskButton/AddTaskButton";

export const TodayTasks = () => {
  const actualDate = new Date().getDate();
  return (
    <>
      <div className="flex bg-zinc-50 border rounded-md p-5 flex-col gap-4 w-full">
        <h1 className="text-lg font-bold text-zinc-700">Today</h1>
        <AddTaskButton />
        <ul>
          {tasks.map((task) => {
            if (task.date === actualDate) {
              return (
                <div
                  key={task.id}
                  className="flex items-center text-sm px-5 justify-between"
                >
                  <div className="flex items-center gap-4">
                    <input type="checkbox" className="cursor-pointer" />
                  </div>
                  <li>{task.title}</li>
                  <button className="flex items-center h-4 w-4 rounded-full text-zinc-500 cursor-pointer duration-100 hover:bg-cyan-300 hover:text-slate-50">
                    <ArrowRight />
                  </button>
                </div>
              );
            } else {
              return;
            }
          })}
        </ul>
      </div>
    </>
  );
};
