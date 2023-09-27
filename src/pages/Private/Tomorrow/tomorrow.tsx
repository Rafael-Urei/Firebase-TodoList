import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import Item from "../../../shared/components/task-item-component";
import { useAppTasksContext } from "../../../shared/contexts/task-context";
import Alert from "../NextWeek/components/empty-tasks-alert";

export default function Tomorrow() {
  const { tomorrowTasks } = useAppTasksContext();
  return (
    <>
      <DashboardLayout title="Tomorrow">
        <ul className="flex flex-col items-start justify-start list-none h-full gap-4">
          {tomorrowTasks.length !== 0 ? (
            tomorrowTasks.map((task) => {
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
