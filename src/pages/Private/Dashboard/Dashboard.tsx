import { useAppTasksContext } from "../../../shared/contexts/task-context";
import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import Paper from "./components/paper";

export default function Dashboard() {
  const { todayTasks, tomorrowTasks, nextWeekTasks } = useAppTasksContext();
  return (
    <DashboardLayout title="Dashboard">
      <div className="flex justify-center gap-4 flex-wrap items-center">
        <Paper title="Upcoming">
          {todayTasks.length + tomorrowTasks.length + nextWeekTasks.length}
        </Paper>
        <Paper title="Today">{todayTasks.length}</Paper>
        <Paper title="Tomorrow">{tomorrowTasks.length}</Paper>
        <Paper title="Next Week">{nextWeekTasks.length}</Paper>
      </div>
    </DashboardLayout>
  );
}
