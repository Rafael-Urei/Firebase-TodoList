import { useState } from "react";
import Item from "../../../shared/components/task-item-component";
import { useAppTasksContext } from "../../../shared/contexts/task-context";
import DashboardLayout from "../../../shared/layouts/dashboard-layout";

export default function AllTasks() {
  const { tasks } = useAppTasksContext();
  const [condition, setCondition] = useState("");
  let filteredTasks = tasks.filter((task) => {
    switch (condition) {
      case "DONE":
        return task.done;
      case "UNDONE":
        return !task.done;
      case "STUDY":
        return task.type === "Study";
      case "WORK":
        return task.type === "Work";
      case "TRIP":
        return task.type === "Trip";
      case "PERSONAL":
        return task.type === "Personal";
      default:
        return task;
    }
  });
  return (
    <DashboardLayout title="All Tasks">
      <header className="text-sm font-medium">
        <div className="flex gap-4">
          <label>Filter by: </label>
          <select
            onChange={(e) => setCondition(e.target.value)}
            className="cursor-pointer bg-transparent"
          >
            <option value={""}>All Tasks</option>
            <option value={"DONE"}>Done Tasks</option>
            <option value={"UNDONE"}>Undone Tasks</option>
            <option value={"STUDY"}>Study Tasks</option>
            <option value={"WORK"}>Work Tasks</option>
            <option value={"TRIP"}>Trip Tasks</option>
            <option value={"PERSONAL"}>Personal Tasks</option>
          </select>
        </div>
      </header>
      <div className="flex flex-col h-auto">
        <ul className="w-full h-full flex flex-wrap gap-4 rounded-md justify-between">
          {filteredTasks.map((task) => {
            return (
              <div key={task.id} className="flex w-[400px] rounded-md p-4">
                <Item key={task.id} {...task} />
              </div>
            );
          })}
        </ul>
      </div>
    </DashboardLayout>
  );
}
