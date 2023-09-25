import { useTasks } from "../../../shared/hooks/useTasks";
import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import TaskPaper from "./components/tasks-paper";

export default function Upcoming() {
  const { todayTasks, tomorrowTasks, nextWeekTasks } = useTasks();
  return (
    <>
      <DashboardLayout title="Upcoming">
        <TaskPaper title="Today" tasks={todayTasks}></TaskPaper>
        <TaskPaper title="Tomorrow" tasks={tomorrowTasks}></TaskPaper>
        <TaskPaper title="Next Week" tasks={nextWeekTasks}></TaskPaper>
      </DashboardLayout>
    </>
  );
}
