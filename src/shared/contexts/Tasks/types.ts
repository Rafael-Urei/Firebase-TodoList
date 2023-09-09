export interface IProps {
  children: React.ReactNode;
}

export interface ITasksData {
  title: string;
  date: string;
  description: string;
  type: string;
  id: string;
}

export interface ITasksTypes {
  tasks: ITasksData[];
  todayTasks: ITasksData[];
  tomorrowTasks: ITasksData[];
  setTasks: (value: ITasksData[]) => void;
}
