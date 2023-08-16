import "../../styles/global.css";

interface IBasicLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const DashboardLayout = ({ title, children }: IBasicLayoutProps) => {
  return (
    <>
      <div className="h-screen bg-zinc-50 flex flex-col p-10 text-zinc-700">
        <div className="shadow-md ">
          <header className="bg-zinc-50 p-4 rounded flex items-center gap-4">
            <h1 className="text-4xl text-zinc-700 font-bold">{title}</h1>
            <div className="h-9 w-9 border bg-zinc-50"></div>
          </header>
          <div className="bg-zinc-200 h-[2px] w-full"></div>
          {children}
        </div>
      </div>
    </>
  );
};
