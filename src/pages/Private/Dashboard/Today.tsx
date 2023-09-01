import { AddTask } from "../../../shared/components/AddTaskModal/AddTask";
import { AddTaskButton } from "../../../shared/components/Buttons/AddTaskButton/AddTaskButton";
import { useAppAddModalContext } from "../../../shared/contexts/AddTaskModalContext/AddModal";
import { useAppTaskContext } from "../../../shared/contexts/TasksContext/TasksContext";
import { useAppTimeContext } from "../../../shared/contexts/TimeContext/TimeContext";
import { DashboardLayout } from "../../../shared/layouts/DashboardLayout";
import { startOfToday } from "date-fns";

export const Today = () => {
  const { isOpen } = useAppAddModalContext();
  const { tasks } = useAppTaskContext();
  const {} = useAppTimeContext();
  let actualDay = startOfToday().toISOString();

  return (
    <>
      {isOpen && <AddTask />}
      <DashboardLayout title="Today">
        <div className="flex flex-col">
          <AddTaskButton />
          <ul>
            {tasks.map((task) => {
              if (task.date === actualDay) {
                return (
                  <li key={task.id} className="flex flex-col bg-color">
                    <header>
                      <h1>{task.title}</h1>
                    </header>
                  </li>
                );
              } else {
                return;
              }
            })}
          </ul>
        </div>
      </DashboardLayout>
    </>
  );
};
