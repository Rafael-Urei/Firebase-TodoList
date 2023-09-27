import Item from "../../../../shared/components/task-item-component";
import { ITasksData } from "../../../../shared/contexts/task-context";
import Alert from "../../NextWeek/components/empty-tasks-alert";

type IProps = {
  title: string;
  tasks: ITasksData[];
};

export default function TaskPaper({ title, tasks }: IProps) {
  return (
    <div className="flex-1 bg-white rounded-md p-10 h-full overflow-scroll border-2">
      <header className="w-full text-center mb-10">
        <h1 className="font-semibold text-lg text-zinc-600">{title}</h1>
      </header>
      <ul className="list-none w-full flex flex-col gap-4">
        {tasks.length !== 0 ? (
          tasks.map((task) => {
            return <Item key={task.id} {...task}></Item>;
          })
        ) : (
          <Alert title="There are no tasks upcoming..."></Alert>
        )}
      </ul>
    </div>
  );
}
