import { useAppTasksContext } from "../../../shared/contexts/task-context";
import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import TaskPaper from "./components/tasks-paper";

export default function Upcoming() {
  const { todayTasks, tomorrowTasks, nextWeekTasks } = useAppTasksContext();
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
