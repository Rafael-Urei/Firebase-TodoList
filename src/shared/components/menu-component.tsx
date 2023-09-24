import { X, Search } from "lucide-react";
import { useAppMenuContext } from "../contexts/MenuContext/menu-context";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}

type LinkRouteProps = {
  to: string;
  onClick: () => void | undefined;
  label: string;
  icon: ReactNode;
};

const ListWithRoutes = ({ to, label, onClick, icon }: LinkRouteProps) => {
  const resolvedPath = useResolvedPath(to);
  const navigate = useNavigate();
  const match = useMatch({ path: resolvedPath.pathname, end: false });
  const handleNavigate = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <li
      className={
        !!match
          ? "bg-zinc-200 text-sm font-bold flex items-center p-2 rounded gap-2 cursor-pointer"
          : "bg-trasnparent text-sm flex items-center p-2 rounded gap-2 cursor-pointer hover:bg-slate-200"
      }
      onClick={handleNavigate}
    >
      {icon}
      <h2>{label}</h2>
    </li>
  );
};

export const Menu = ({ children }: IProps) => {
  const { isOpen, toggleMenu, menuOptions } = useAppMenuContext();

  return (
    <>
      <div className="h-screen">
        {isOpen ? (
          <motion.div className="relative flex flex-col gap-4 h-full flex-1 p-4 bg-zinc-100 rounded-md text-zinc-500 scale-95 dark:bg-zinc-700">
            <header className="w-full flex flex-col gap-4">
              <h1 className="font-bold text-xl">Menu</h1>
              <form className="px-2 flex w-full h-9 border rounded-md items-center">
                <Search className="h-4 w-4" />
                <input
                  placeholder="Looking for a task?"
                  type="text"
                  className="bg-transparent p-3"
                ></input>
              </form>
            </header>
            <ul className="flex flex-col gap-2">
              {menuOptions.map((menuOption) => (
                <ListWithRoutes
                  key={menuOption.path}
                  label={menuOption.label}
                  to={menuOption.path}
                  icon={menuOption.icon}
                  onClick={toggleMenu}
                ></ListWithRoutes>
              ))}
            </ul>
            <h2 className="font-semibold mt-4">All Tasks</h2>
            <ul className="flex flex-col p-2 rounded w-full h-52 overflow-scroll"></ul>
            <button onClick={toggleMenu} className="absolute right-3">
              <X />
            </button>
          </motion.div>
        ) : null}
      </div>
      <div className="w-full h-screen">{children}</div>
    </>
  );
};
