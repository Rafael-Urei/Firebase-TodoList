import { X, Search } from "lucide-react";
import { useAppMenuContext } from "../../contexts/MenuContext/MenuContext";
import { motion } from "framer-motion";

interface IProps {
  children: React.ReactNode;
}

export const Menu = ({ children }: IProps) => {
  const { isOpen, toggleMenu } = useAppMenuContext();
  return (
    <>
      <div className="h-screen">
        {isOpen ? (
          <motion.div className="relative flex flex-col gap-4 h-full flex-1 p-4 bg-zinc-100 rounded-md text-zinc-700">
            <header className="w-full flex flex-col gap-4">
              <h1 className="font-bold text-xl">Menu</h1>
              <form className="px-2 flex w-full h-9 border rounded-md items-center">
                <Search className="h-4 w-4" />
                <input type="text" className="bg-transparent p-3"></input>
              </form>
            </header>
            <div>
              <h2 className="font-semibold text-sm">Tasks</h2>
            </div>
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
