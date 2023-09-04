import { Link, useNavigate } from "react-router-dom";
import "../../styles/global.css";
import { ToggleMenu } from "../components";
import { useAppMenuContext } from "../contexts/MenuContext/MenuContext";
import { signOut } from "firebase/auth";
import { auth } from "../config/Firebase";
import { useAppTaskContext } from "../contexts/TasksContext/TasksContext";

interface IBasicLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const DashboardLayout = ({ title, children }: IBasicLayoutProps) => {
  const navigate = useNavigate();
  const { isOpen } = useAppMenuContext();
  const { tasks } = useAppTaskContext();

  return (
    <>
      <div className="h-full bg-zinc-50 flex flex-col text-zinc-700 ml-6">
        <div className="flex items-start">
          <div className={!isOpen ? "mt-6 mr-6 ml-2" : "mt-6"}>
            <ToggleMenu></ToggleMenu>
          </div>
          <div className="flex-1">
            <header className="bg-zinc-50 p-4 rounded flex items-center gap-4 justify-between">
              <div className="flex items-center justify-center gap-4">
                <h1 className="text-4xl text-zinc-700 font-bold">{title}</h1>
                <div className="h-9 w-9 border bg-zinc-50 flex items-center justify-center font-bold">
                  {tasks.length}
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <div
                  className="rounded-full h-10 w-10 bg-slate-600 cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  <img />
                </div>
                <Link
                  className="text-slate-500 text-sm"
                  to="/login"
                  onClick={() => signOut(auth)}
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
