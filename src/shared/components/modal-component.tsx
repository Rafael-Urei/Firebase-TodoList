import { ReactNode } from "react";

interface IProps {
  title?: string;
  children: ReactNode;
}

export function Modal({ title, children }: IProps) {
  return (
    <div className="h-full w-full fixed flex items-center justify-center bg-opacity-30 bg-zinc-700 rounded z-10">
      <div className="relative flex flex-col rounded w-96 h-auto bg-zinc-50">
        <h1 className="px-6 mt-8 text-zinc-500 text-lg font-semibold">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
