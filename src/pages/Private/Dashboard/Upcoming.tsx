import { AddTask } from "../../../shared/components/AddTaskModal/AddTask";
import { DashboardLayout } from "../../../shared/layouts/DashboardLayout";
import { TodayTasks } from "./components/Today";
import { TomorrowTasks } from "./components/Tomorrow";

export const Upcoming = () => {
  return (
    <>
      {<AddTask />}
      <DashboardLayout title="Upcoming">
        <div className="flex flex-wrap gap-4 p-4">
          <TodayTasks />
          <TomorrowTasks />
        </div>
      </DashboardLayout>
    </>
  );
};
