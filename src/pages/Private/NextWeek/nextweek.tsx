import DashboardLayout from "../../../shared/layouts/dashboard-layout";
import { useState } from "react";
import TaskForm from "../../../components/TasksForm/tasksform";
import Item from "../../../shared/components/task-item-component";
import Button from "../../../shared/components/button-component";
import { useAppTasksContext } from "../../../shared/contexts/task-context";
import Alert from "./components/empty-tasks-alert";

export default function NextWeek() {
  const { nextWeekTasks } = useAppTasksContext();
  const [openModal, setOpenModal] = useState(false);

  function handleModal(value: boolean) {
    setOpenModal(value);
  }

  return (
    <>
      {openModal ? <TaskForm handleModal={handleModal}></TaskForm> : null}
      <DashboardLayout title="Next Week">
        <Button type="button" onClick={() => setOpenModal(true)}>
          Create Task
        </Button>
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
