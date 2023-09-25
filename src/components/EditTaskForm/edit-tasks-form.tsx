import { format, formatISO } from "date-fns";
import { useAppTasksContext } from "../../shared/contexts/task-context";
import TogglableInput from "./components/EditInput";

export default function EditTaskForm() {
  const { selectedTask } = useAppTasksContext();
  return (
    <div className="flex flex-col w-1/3 border bg-zinc-100 font-semibold">
      <div className="flex flex-1 flex-col gap-4 bg-zinc-50 rounded-md scale-90 p-10 h-full shadow-md">
        <h1 className="mb-5 text-[20px]">{selectedTask?.title}</h1>
        <span className="mr-2 text-sm font-medium">Description:</span>
        <div className="h-40 border p-2 rounded-md text-sm text-zinc-500 overflow-scroll">
          {selectedTask?.description}
        </div>
        <p>
          <span className="mr-2 text-sm font-medium">Date:</span>
          {selectedTask?.date
            ? format(new Date(selectedTask?.date), "MM/dd/yyyy")
            : null}
        </p>
        <p>
          <span className="mr-2 text-sm font-medium">Type:</span>
          {selectedTask?.type}
        </p>
        {/* <form className="flex flex-col">
        <TogglableInput value={selectedTask?.description} />
        <TogglableInput value={selectedTask?.type} />
        <TogglableInput value={selectedTask?.date} />
      </form> */}
      </div>
      <div className="flex w-full items-center justify-center gap-4 p-5 mb-5">
        <button className="border-2 border-zinc-700 w-32 h-8 rounded-md bg-transparent">
          Close
        </button>
        <button className="bg-indigo-600 text-zinc-50 w-32 h-8 rounded-md">
          Edit
        </button>
      </div>
    </div>
  );
}
