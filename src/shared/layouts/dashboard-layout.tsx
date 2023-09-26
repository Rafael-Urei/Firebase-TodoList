import { useNavigate } from "react-router-dom";
import { IBasicLayoutProps } from "./types";
import { useAppAuthContext } from "../contexts/AuthContext/auth-context";
import { SignOut } from "../config/firebase";
import { useAppMenuContext } from "../contexts/MenuContext/menu-context";
import { ToggleMenu } from "../components";
import { useAppTaskMenuContext } from "../contexts/TaskMenuContext/task-menu-context";

export default function DashboardLayout({
  title,
  children,
}: IBasicLayoutProps) {
  const { isOpen, toggleMenu } = useAppMenuContext();
  const { isOpen: TaskMenuIsOpen, toggleTaskMenu } = useAppTaskMenuContext();
  const { currentUser } = useAppAuthContext();
  const navigate = useNavigate();

  function handleSignOut() {
    SignOut(navigate);
  }

  return (
    <div className="h-full bg-zinc-50 flex p-4 dark:bg-zinc-800 overflow-scroll w-full">
      <div className={!isOpen ? "mt-6 mr-6 ml-2" : "mt-6"}>
        <ToggleMenu></ToggleMenu>
      </div>
      <div className="flex w-full flex-col">
        <header className="p-4 rounded flex items-center gap-4 justify-between">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-4xl text-zinc-700 font-bold dark:text-zinc-400">
              {title}
            </h1>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <div
              className="rounded-full h-10 w-10 bg-zinc-700 cursor-pointer"
              onClick={() => {
                if (isOpen) toggleMenu();
                if (TaskMenuIsOpen) toggleTaskMenu();
                navigate("/profile");
              }}
            ></div>
            <p className="text-sm font-semibold text-zinc-700">
              {currentUser?.displayName}
            </p>
            <p
              className="text-slate-500 text-xs cursor-pointer"
              onClick={() => {
                if (isOpen) {
                  toggleMenu();
                  handleSignOut();
                } else {
                  handleSignOut();
                }
              }}
            >
              Sign Out
            </p>
          </div>
        </header>
        <div className="flex flex-col gap-4 h-full">{children}</div>
      </div>
    </div>
  );
}
