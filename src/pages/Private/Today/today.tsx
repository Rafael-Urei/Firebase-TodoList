import { useAppTasksContext } from "../../../shared/contexts/Tasks/tasks-context";
import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import { useState } from "react";
import TaskForm from "../../../shared/components/TasksForm/tasksform";
import Item from "../../../shared/components/task-item-component";
import Button from "../../../shared/components/button-component";

export default function Today() {
  const { todayTasks } = useAppTasksContext();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <>
          <Button
            type="button"
            style="CLOSE_BUTTON"
            onClick={() => setOpenModal(false)}
          >
            Close Modal
          </Button>
          <TaskForm></TaskForm>
        </>
      )}
      <DashboardLayout title="Today">
        <Button type="button" onClick={() => setOpenModal(true)}>
          Create Task
        </Button>
        <ul className="list-none w-full flex flex-col gap-4">
          {todayTasks.map((task) => {
            return (
              <Item
                key={task.id}
                title={task.title}
                type={task.type}
                description={task.description}
              ></Item>
            );
          })}
        </ul>
      </DashboardLayout>
    </>
  );
}
