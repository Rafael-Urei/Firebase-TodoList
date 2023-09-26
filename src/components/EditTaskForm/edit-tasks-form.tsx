import { useState } from "react";
import { useAppTasksContext } from "../../shared/contexts/task-context";
import { format } from "date-fns";
import { useAppCalendarContext } from "../../shared/contexts/CalendarContext/calendar-context";

export default function EditTaskForm() {
  const [edit, setEdit] = useState(false);
  const { selectedTask } = useAppTasksContext();
  const { inputValue } = useAppCalendarContext();
  return (
    <>
      <form className="flex flex-col gap-4 h-screen w-1/3 bg-zinc-50 p-10 shadow-md overflow-scroll font-normal text-sm">
        <div>
          {edit ? (
            <div className="flex flex-col gap-2">
              <label>Title:</label>
              <input
                className="px-2 border-b border-indigo-600 bg-transparent"
                value={selectedTask?.title}
              ></input>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label>Title:</label>
              <h1 className="px-2">{selectedTask?.title}</h1>
            </div>
          )}
        </div>
        <div>
          {edit ? (
            <div className="flex flex-col gap-2">
              <label>Description:</label>
              <textarea
                value={selectedTask?.description}
                className="px-2 border-b max-h-40 border-indigo-600 bg-transparent"
                defaultValue={selectedTask?.description}
              ></textarea>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label>Description:</label>
              <div className="px-2  max-h-40 overflow-scroll">
                {selectedTask?.description}
              </div>
            </div>
          )}
        </div>
        <div>
          {edit ? (
            <div className="flex flex-col gap-2">
              <label>Date:</label>
              <input
                value={format(inputValue, "MM/dd/yyyy")}
                className="px-2 border-b border-indigo-600 w-32 text-center bg-transparent"
              ></input>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label>Date:</label>
              <div className="px-2  max-h-40 overflow-scroll">
                {selectedTask
                  ? format(new Date(`${selectedTask?.date}`), "MM/dd/yyyy")
                  : null}
              </div>
            </div>
          )}
        </div>
        <div>
          {edit ? (
            <div className="flex flex-col gap-2">
              <label>Type:</label>
              <select
                className="px-2 border-b border-indigo-600 w-32 bg-transparent"
                defaultValue={selectedTask?.type}
              >
                <option>Work</option>
                <option>Study</option>
                <option>Personal</option>
                <option>Trip</option>
              </select>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label>Type:</label>
              <div className="px-2  max-h-40 overflow-scroll">
                <p>{selectedTask?.type}</p>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
