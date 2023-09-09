import { useAppTasksContext } from "../../../shared/contexts/Tasks/tasks-context";
import DashboardLayout from "../../../shared/layouts/dashboard-layout";

export default function Today() {
  const { todayTasks } = useAppTasksContext();

  return (
    <DashboardLayout title="Today">
      <div></div>
    </DashboardLayout>
  );
}
