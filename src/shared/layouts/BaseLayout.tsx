import "../../styles/global.css";
import { AnimatedTag } from "../components";
import { AnimatedPage } from "../components/AnimatedPage/AnimatedPage";

interface IBasicLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const BaseLayout = ({ title, children }: IBasicLayoutProps) => {
  return (
    <>
      <AnimatedPage>
        <div className="h-screen bg-slate-900 flex flex-col">
          <AnimatedTag>
            <header className="p-10">
              <h1 className="text-slate-200 text-6xl">{title}</h1>
            </header>
          </AnimatedTag>
          {children}
        </div>
      </AnimatedPage>
    </>
  );
};
