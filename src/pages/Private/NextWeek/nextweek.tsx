import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import Item from "../../../shared/components/task-item-component";
import { useAppTasksContext } from "../../../shared/contexts/task-context";
import Alert from "./components/empty-tasks-alert";

export default function NextWeek() {
  const { nextWeekTasks } = useAppTasksContext();

  return (
    <>
      <DashboardLayout title="Next Week">
        <ul className="flex flex-col items-start justify-start list-none h-full gap-4">
          {nextWeekTasks.length !== 0 ? (
            nextWeekTasks.map((task) => {
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
