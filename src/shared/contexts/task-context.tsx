import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
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
  date: string | Date;
  description: string;
  type: string;
  id: string;
  done: boolean;
}

export interface ITasksTypes {
  tasks: ITasksData[];
  todayTasks: ITasksData[];
  tomorrowTasks: ITasksData[];
  nextWeekTasks: ITasksData[];
  selectedTask: ITasksData | null;
  setTasks: (value: ITasksData[]) => void;
  selectTask: (value: ITasksData) => void;
}

export const TasksContext = createContext({} as ITasksTypes);

export const useAppTasksContext = () => {
  return useContext(TasksContext);
};

export function AppTasksProvider({ children }: IProps) {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAppAuthContext();
  const [tasks, setTasks] = useState<ITasksData[]>([]);
  const [selectedTask, setSelectedTask] = useState<ITasksData | null>(null);
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

  const selectTask = useCallback((task: ITasksData) => {
    setSelectedTask({ ...task });
  }, []);

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
      return () => {
        console.log("cleanup");
      };
    }
  }, [currentUser]);

  if (loading) {
    return <Loading />;
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        todayTasks,
        tomorrowTasks,
        nextWeekTasks,
        selectTask,
        selectedTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
