import { Link, useNavigate } from "react-router-dom";
import "../../styles/global.css";
import { ToggleMenu } from "../components";
import { useAppMenuContext } from "../contexts/MenuContext/MenuContext";
import { signOut } from "firebase/auth";
import { auth } from "../config/Firebase";
import { useAppCalendarContext } from "../contexts/CalendarContext/CalendarContext";
import { useAppTaskMenuContext } from "../contexts/TaskMenuContext/TaskMenuContext";
import { useAppTaskContext } from "../contexts/TasksContext/TasksContext";
import { startOfToday, startOfTomorrow } from "date-fns";
import { useAppAuthContext } from "../contexts/AuthContext/Auth";

interface IBasicLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const DashboardLayout = ({ title, children }: IBasicLayoutProps) => {
  const { tasks } = useAppTaskContext();
  const { currentUser } = useAppAuthContext();

  const todayTasks = tasks.filter(
    (task) => task.date === startOfToday().toISOString()
  );
  const tomorrowTasks = tasks.filter(
    (task) => task.date === startOfTomorrow().toISOString()
  );

  const navigate = useNavigate();
  const { isOpen, toggleMenu } = useAppMenuContext();
  const { isOpen: CalendarOpen, toggleCalendar } = useAppCalendarContext();
  const { isOpen: TaskMenuOpen, toggleTaskMenu } = useAppTaskMenuContext();

  const handleSignOut = () => {
    try {
      if (isOpen) {
        toggleMenu();
      }
      if (CalendarOpen) {
        toggleCalendar();
      }
      if (TaskMenuOpen) {
        toggleTaskMenu(false);
      }
    } catch (e) {
      console.log(e);
    } finally {
      signOut(auth);
    }
  };

  return (
    <>
      <div className="h-full bg-zinc-50 flex flex-col text-zinc-700 ml-6 dark:bg-zinc-800 p-4">
        <div className="flex items-start">
          <div className={!isOpen ? "mt-6 mr-6 ml-2" : "mt-6"}>
            <ToggleMenu></ToggleMenu>
          </div>
          <div className="flex-1 ">
            <header className="bg-zinc-50 p-4 rounded flex items-center gap-4 justify-between dark:bg-zinc-700">
              <div className="flex items-center justify-center gap-4">
                <h1 className="text-4xl text-zinc-700 font-bold dark:text-zinc-400">
                  {title}
                </h1>
                <div className="h-9 w-9 border bg-zinc-50 flex items-center justify-center font-bold dark:bg-zinc-700 text-zinc-400">
                  {title === "Today"
                    ? todayTasks.length
                    : title === "Upcoming"
                    ? todayTasks.length + tomorrowTasks.length
                    : 0}
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <div
                  className="rounded-full h-10 w-10 bg-slate-600 cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  <img
                    className="rounded-full"
                    src={auth.currentUser?.photoURL?.toString()}
                  />
                </div>
                <p>{currentUser?.displayName}</p>
                <Link
                  className="text-slate-500 text-sm"
                  to="/login"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Link>
              </div>
            </header>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
