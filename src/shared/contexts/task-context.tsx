import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAppAuthContext } from "./AuthContext/auth-context";
import { Loading } from "../components";
import { startOfToday, startOfTomorrow, nextMonday } from "date-fns";

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
  nextWeekTasks: ITasksData[];
  setTasks: (value: ITasksData[]) => void;
}

export const TasksContext = createContext({} as ITasksTypes);

export const useAppTasksContext = () => {
  return useContext(TasksContext);
};

export function AppTasksProvider({ children }: IProps) {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAppAuthContext();
  const [tasks, setTasks] = useState<ITasksData[]>([]);
  const nextWeek = nextMonday(startOfToday());
  const nextWeekTasks = tasks.filter(
    (task) => task.date === nextWeek.toISOString()
  );
  const todayTasks = tasks.filter(
    (task) => task.date === startOfToday().toISOString()
  );
  const tomorrowTasks = tasks.filter(
    (task) => task.date === startOfTomorrow().toISOString()
  );

  useEffect(() => {
    if (currentUser) {
      setLoading(true);
      async function fetchData() {
        const data = await getDocs(
          collection(db, "users", `${currentUser?.uid}`, "tasks")
        );
        setTasks(
          data.docs.map((task) => ({
            ...task.data(),
            id: task.id,
          })) as ITasksData[]
        );
        setLoading(false);
      }
      fetchData();
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, todayTasks, tomorrowTasks, nextWeekTasks }}
    >
      {children}
    </TasksContext.Provider>
  );
}
