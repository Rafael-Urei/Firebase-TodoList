import { collection, getDocs } from "firebase/firestore";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../../config/Firebase";
import { useAppAuthContext } from "../AuthContext/Auth";
import { Loading } from "../../components";

export type FormData = {
  title: string;
  description: string;
  date: string | Date;
  type: string;
  id: string;
};

interface ITasksContextData {
  tasks: FormData[];
  setTasks: (newTasks: FormData[]) => void;
}

interface IProp {
  children: React.ReactNode;
}

const TasksContext = createContext({} as ITasksContextData);

export const useAppTaskContext = () => {
  return useContext(TasksContext);
};

export const AppTasksProvider = ({ children }: IProp) => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<FormData[]>([]);
  const { currentUser } = useAppAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(
        collection(db, "users", `${currentUser?.uid}`, "tasks")
      );
      setTasks(
        data.docs.map((task) => ({ ...task.data(), id: task.id })) as FormData[]
      );
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleAddTasks = useCallback((newTasks: FormData[]) => {
    setTasks(newTasks);
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <TasksContext.Provider value={{ tasks, setTasks: handleAddTasks }}>
        {children}
      </TasksContext.Provider>
    </>
  );
};
