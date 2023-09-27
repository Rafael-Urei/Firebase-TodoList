import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import Item from "../../../shared/components/task-item-component";
import { useAppTasksContext } from "../../../shared/contexts/task-context";
import Alert from "../NextWeek/components/empty-tasks-alert";

export default function Today() {
  const { todayTasks } = useAppTasksContext();

  return (
    <>
      <DashboardLayout title="Today">
        <ul className="flex flex-col items-start justify-start list-none h-full w-full gap-4">
          {todayTasks.length !== 0 ? (
            todayTasks.map((task) => {
              return <Item key={task.id} {...task}></Item>;
            })
          ) : (
            <Alert title={"There are no tasks upcoming next week..."} />
          )}
        </ul>
      </DashboardLayout>
    </>
  );
}
