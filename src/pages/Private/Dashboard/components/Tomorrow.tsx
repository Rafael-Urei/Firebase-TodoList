import { AddTaskButton } from "../../../../shared/components/Buttons/AddTaskButton/AddTaskButton";
import { startOfTomorrow } from "date-fns";
import { TasksList } from "../../../../shared/layouts/TasksLayout";

interface Props {
  day: string;
}

export const TomorrowTasks = ({ day }: Props) => {
  const tomorrow = startOfTomorrow().toISOString();
  return (
    <>
      <div className="flex bg-zinc-50 border rounded-md p-5 flex-col gap-4 w-full dark:bg-zinc-700 border-none">
        <h1 className="text-lg font-bold text-zinc-700 dark:text-zinc-200">
          Tomorrow
        </h1>
        <AddTaskButton day={day} />
        <TasksList day={tomorrow} />
      </div>
    </>
  );
};
