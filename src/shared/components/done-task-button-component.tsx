import { doc, updateDoc } from "firebase/firestore";
import { ITasksData, useAppTasksContext } from "../contexts/task-context";
import { db } from "../config/firebase";
import { useAppAuthContext } from "../contexts/AuthContext/auth-context";

type Props = {
  task: ITasksData;
};

export default function DoneButton({ task }: Props) {
  const { currentUser } = useAppAuthContext();
  const { setTasks, tasks } = useAppTasksContext();

  async function handleDoneTask() {
    try {
      const docRef = doc(
        db,
        "users",
        `${currentUser?.uid}`,
        "tasks",
        `${task.id}`
      );
      const result = await updateDoc(docRef, {
        ...task,
        done: !task.done,
      });
      setTasks(
        tasks.map((taskFromList) => {
          if (taskFromList.id === task.id) {
            return { ...taskFromList, done: !taskFromList.done };
          } else {
            return taskFromList;
          }
        })
      );
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <div
      className="p-2 rounded-md flex self-center justify-center duration-200 font-semibold cursor-pointer"
      onClick={handleDoneTask}
    >
      {task.done ? <p>Undone</p> : <p className="text-indigo-600">Done</p>}
    </div>
  );
}
