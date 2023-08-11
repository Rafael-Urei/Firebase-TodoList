import "../../styles/global.css";

interface IBasicLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const BaseLayout = ({ title, children }: IBasicLayoutProps) => {
  return (
    <>
      <div className="h-screen bg-slate-900 flex items-center justify-center">
        <header>
          <h1 className="text-zinc-200 text-6xl">{title}</h1>
        </header>
        <div>{children}</div>
      </div>
    </>
  );
};
