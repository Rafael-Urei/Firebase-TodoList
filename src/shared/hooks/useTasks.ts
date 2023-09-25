import { useEffect, useState } from "react";
import { useAppAuthContext } from "../contexts/AuthContext/auth-context";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { ITasksData } from "../contexts/Tasks/types";
import startOfToday from "date-fns/startOfToday";
import startOfTomorrow from "date-fns/startOfTomorrow";
import { nextMonday } from "date-fns";

export function useTasks() {
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
    if (currentUser === null) return;
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
    }
    fetchData();
  }, []);

  return {
    tasks,
    setTasks,
    todayTasks,
    tomorrowTasks,
    nextWeekTasks,
  };
}
