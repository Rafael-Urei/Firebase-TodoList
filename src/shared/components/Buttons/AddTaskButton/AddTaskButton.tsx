import { Plus } from "lucide-react";

export const AddTaskButton = () => {
  return (
    <>
      <button className="flex items-center gap-2 border p-4 rounded-md text-left text-zinc-500 font-semibold">
        <Plus className="h-3 w-3" />
        Add New Task
      </button>
    </>
  );
};
