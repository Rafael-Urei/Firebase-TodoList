import { useTasks } from "../../../shared/hooks/useTasks";
import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import Paper from "./components/paper";

export default function Dashboard() {
  const { todayTasks, tomorrowTasks } = useTasks();
  return (
    <DashboardLayout title="Dashboard">
      <Paper title="Upcoming">0</Paper>
      <Paper title="Today">{todayTasks.length}</Paper>
      <Paper title="Tomorrow">{tomorrowTasks.length}</Paper>
    </DashboardLayout>
  );
}
