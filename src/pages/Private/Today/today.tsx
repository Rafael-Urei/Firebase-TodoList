import { useAppTasksContext } from "../../../shared/contexts/Tasks/tasks-context";
import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import { useState } from "react";
import TaskForm from "../../../components/TasksForm/tasksform";
import Item from "../../../shared/components/task-item-component";
import Button from "../../../shared/components/button-component";

export default function Today() {
  const { todayTasks } = useAppTasksContext();
  const [openModal, setOpenModal] = useState(false);

  function handleModal(value: boolean) {
    setOpenModal(value);
  }

  return (
    <>
      {openModal ? <TaskForm handleModal={handleModal}></TaskForm> : null}
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
