import { useNavigate } from "react-router-dom";
import { IBasicLayoutProps } from "./types";
import { useAppAuthContext } from "../contexts/AuthContext/auth-context";
import { SignOut } from "../config/firebase";
import { useAppMenuContext } from "../contexts/MenuContext/menu-context";
import { ToggleMenu } from "../components";

export default function DashboardLayout({
  title,
  children,
}: IBasicLayoutProps) {
  const { isOpen } = useAppMenuContext();
  const { currentUser } = useAppAuthContext();
  const navigate = useNavigate();

  function handleSignOut() {
    SignOut(navigate);
  }

  return (
    <div className="h-full bg-zinc-50 flex p-4 dark:bg-zinc-800 ">
      <div className={!isOpen ? "mt-6 mr-6 ml-2" : "mt-6"}>
        <ToggleMenu></ToggleMenu>
      </div>
      <div className="flex flex-1 flex-col">
        <header className="p-4 rounded flex items-center gap-4 justify-between">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-4xl text-zinc-700 font-bold dark:text-zinc-400">
              {title}
            </h1>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <div
              className="rounded-full h-10 w-10 bg-zinc-700 cursor-pointer"
              onClick={() => navigate("/profile")}
            ></div>
            <p className="text-sm font-semibold text-zinc-700">
              {currentUser?.displayName}
            </p>
            <p
              className="text-slate-500 text-xs cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </p>
          </div>
        </header>
        <div className="flex-1 flex flex-wrap p-10 gap-4 bg-zinc-100 rounded">
          {children}
        </div>
      </div>
    </div>
  );
}
