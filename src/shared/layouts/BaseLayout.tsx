import "../../styles/global.css";
import { AnimatedPage } from "../components/AnimatedPage/AnimatedPage";

interface IBasicLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const BaseLayout = ({ title, children }: IBasicLayoutProps) => {
  return (
    <>
      <AnimatedPage>
        <div className="h-screen bg-slate-900 flex flex-col items-center justify-center">
          <header>
            <h1 className="text-zinc-200 text-6xl">{title}</h1>
          </header>
          {children}
        </div>
      </AnimatedPage>
    </>
  );
};
