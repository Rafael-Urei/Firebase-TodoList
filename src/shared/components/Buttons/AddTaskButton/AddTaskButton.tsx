import { Plus } from "lucide-react";
import { useAppAddModalContext } from "../../../contexts/AddTaskModalContext/AddModal";
import { useAppCalendarContext } from "../../../contexts/CalendarContext/CalendarContext";
import { startOfTomorrow } from "date-fns";

interface Props {
  day: string;
}

export const AddTaskButton = ({ day }: Props) => {
  const { toggleAddTaskModal } = useAppAddModalContext();
  const { setInputValue } = useAppCalendarContext();

  const handleOpenModal = () => {
    toggleAddTaskModal();
    {
      day === "tomorrow" && setInputValue(startOfTomorrow());
    }
  };
  return (
    <>
      <button
        onClick={handleOpenModal}
        className="flex items-center gap-2 border p-4 rounded-md text-left text-zinc-500 font-semibold dark:border-zinc-600"
      >
        <Plus className="h-3 w-3" />
        Add New Task
      </button>
    </>
  );
};
