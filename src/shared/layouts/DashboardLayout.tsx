import "../../styles/global.css";
import { ToggleMenu } from "../components";
import { useAppMenuContext } from "../contexts/MenuContext/MenuContext";

interface IBasicLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const DashboardLayout = ({ title, children }: IBasicLayoutProps) => {
  const { isOpen } = useAppMenuContext();
  return (
    <>
      <div className="h-full bg-zinc-50 flex flex-col text-zinc-700 ml-6">
        <div className="flex items-start">
          <div className={!isOpen ? "mt-6 mr-6 ml-2" : "mt-6"}>
            <ToggleMenu></ToggleMenu>
          </div>
          <div className="flex-1">
            <header className="bg-zinc-50 p-4 rounded flex items-center gap-4">
              <h1 className="text-4xl text-zinc-700 font-bold">{title}</h1>
              <div className="h-9 w-9 border bg-zinc-50"></div>
            </header>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
