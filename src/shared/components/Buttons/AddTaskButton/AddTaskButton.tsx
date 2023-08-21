import { Plus } from "lucide-react";
import { useAppAddModalContext } from "../../../contexts/AddTaskModalContext/AddModal";

export const AddTaskButton = () => {
  const { toggleAddTaskModal } = useAppAddModalContext();
  return (
    <>
      <button
        onClick={toggleAddTaskModal}
        className="flex items-center gap-2 border p-4 rounded-md text-left text-zinc-500 font-semibold"
      >
        <Plus className="h-3 w-3" />
        Add New Task
      </button>
    </>
  );
};
