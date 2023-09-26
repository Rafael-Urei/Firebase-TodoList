import { useState } from "react";
import { useAppTasksContext } from "../../shared/contexts/task-context";
import { format } from "date-fns";
import { useAppCalendarContext } from "../../shared/contexts/CalendarContext/calendar-context";
import { useAppTaskMenuContext } from "../../shared/contexts/TaskMenuContext/task-menu-context";
import TaskEditForm from "./components/task-edit-form";

export default function TaskMenu() {
  const [edit, setEdit] = useState(false);
  const { isOpen, toggleTaskMenu } = useAppTaskMenuContext();
  const { selectedTask } = useAppTasksContext();
  const { inputValue } = useAppCalendarContext();
  const [openModal, setOpenModal] = useState(false);

  function handleModal(value: boolean) {
    setOpenModal(value);
  }

  return (
    <>
      {openModal ? (
        <TaskEditForm handleModal={handleModal}></TaskEditForm>
      ) : null}
      {isOpen && (
        <div className="flex flex-col gap-4 h-screen w-1/3 bg-zinc-50 p-10 shadow-md overflow-scroll font-normal text-sm">
          <div>
            <div className="flex flex-col gap-2">
              <label>Title:</label>
              <h1 className="px-2">{selectedTask?.title}</h1>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <label>Description:</label>
              <div className="px-2  max-h-40 overflow-scroll">
                {selectedTask?.description}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <label>Date:</label>
              <div className="px-2  max-h-40 overflow-scroll">
                {selectedTask
                  ? format(new Date(`${selectedTask?.date}`), "MM/dd/yyyy")
                  : null}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <label>Type:</label>
              <div className="px-2  max-h-40 overflow-scroll">
                <p>{selectedTask?.type}</p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 items-center justify-center">
            <button
              className="border-2 border-zinc-600 font-medium rounded p-2 w-32"
              onClick={toggleTaskMenu}
            >
              Close
            </button>
            <button
              className="bg-indigo-600 font-medium rounded p-2 text-zinc-50 w-32"
              onClick={() => handleModal(true)}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
