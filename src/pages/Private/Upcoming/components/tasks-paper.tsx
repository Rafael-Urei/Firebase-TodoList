import Item from "../../../../shared/components/task-item-component";
import { ITasksData } from "../../../../shared/contexts/task-context";

type IProps = {
  title: string;
  tasks: ITasksData[];
};

export default function TaskPaper({ title, tasks }: IProps) {
  return (
    <div className="flex-1 bg-white rounded-md p-10 h-full overflow-scroll">
      <header className="w-full text-center mb-10">
        <h1 className="font-semibold text-lg text-zinc-600">{title}</h1>
      </header>
      <ul className="list-none w-full flex flex-col gap-4">
        {tasks.length !== 0 ? (
          tasks.map((task) => {
            return <Item key={task.id} {...task}></Item>;
          })
        ) : (
          <p className="text-center text-lg font-semibold text-indigo-400 mt-5">
            There are no tasks for today...
          </p>
        )}
      </ul>
    </div>
  );
}
