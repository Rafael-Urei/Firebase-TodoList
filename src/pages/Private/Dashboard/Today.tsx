import { AddTaskButton } from "../../../shared/components/Buttons/AddTaskButton/AddTaskButton";
import { DashboardLayout } from "../../../shared/layouts/DashboardLayout";
import { startOfToday } from "date-fns";
import { TasksList } from "../../../shared/layouts/TasksLayout";
import { AddTask } from "../../../shared/components/AddTaskModal/AddTask";
import { useAppAddModalContext } from "../../../shared/contexts/AddTaskModalContext/AddModal";

export const Today = () => {
  let actualDay = startOfToday().toISOString();
  const { isOpen } = useAppAddModalContext();

  return (
    <>
      {isOpen && <AddTask />}
      <DashboardLayout title="Today">
        <div className="flex flex-col mt-2">
          <AddTaskButton day="today" />
          <TasksList day={actualDay} />
        </div>
      </DashboardLayout>
    </>
  );
};
