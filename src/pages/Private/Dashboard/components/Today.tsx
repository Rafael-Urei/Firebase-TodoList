import { AddTaskButton } from "../../../../shared/components/Buttons/AddTaskButton/AddTaskButton";
import { startOfToday } from "date-fns";
import { TasksList } from "../../../../shared/layouts/TasksLayout";

export const TodayTasks = () => {
  let actualDay = startOfToday().toISOString();
  return (
    <>
      <div className="flex bg-zinc-50 border rounded-md p-5 flex-col gap-4 w-full dark:bg-zinc-700 border-none">
        <h1 className="text-lg font-bold text-zinc-700 dark:text-zinc-200">
          Today
        </h1>
        <AddTaskButton day="today" />
        <TasksList day={actualDay} />
      </div>
    </>
  );
};
