import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import Item from "../../../shared/components/task-item-component";
import TaskForm from "../../../components/TasksForm/tasksform";
import Button from "../../../shared/components/button-component";
import { useState } from "react";
import { useAppTasksContext } from "../../../shared/contexts/task-context";

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
          {todayTasks.length !== 0 ? (
            todayTasks.map((task) => {
              return <Item key={task.id} {...task}></Item>;
            })
          ) : (
            <p className="text-center text-lg font-semibold text-indigo-400 mt-5">
              There are no tasks for today...
            </p>
          )}
        </ul>
      </DashboardLayout>
    </>
  );
}
