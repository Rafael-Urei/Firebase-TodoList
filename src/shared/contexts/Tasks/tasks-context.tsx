import { createContext, useContext, useEffect, useState } from "react";
import { IProps, ITasksData, ITasksTypes } from "./types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAppAuthContext } from "../AuthContext/auth-context";
import { Loading } from "../../components";
import { startOfToday, startOfTomorrow } from "date-fns";

export const TasksContext = createContext({} as ITasksTypes);

export const useAppTasksContext = () => {
  return useContext(TasksContext);
};

export function AppTasksProvider({ children }: IProps) {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAppAuthContext();
  const [tasks, setTasks] = useState<ITasksData[]>([]);
  const todayTasks = tasks.filter(
    (task) => task.date === startOfToday().toISOString()
  );
  const tomorrowTasks = tasks.filter(
    (task) => task.date === startOfTomorrow().toISOString()
  );

  useEffect(() => {
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
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, todayTasks, tomorrowTasks }}
    >
      {children}
    </TasksContext.Provider>
  );
}
