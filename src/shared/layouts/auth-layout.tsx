import { IAuthProps } from "./types";

export default function AuthLayout({ children, title }: IAuthProps) {
  return (
    <div className="h-screen w-full flex flex-col bg-zinc-800">
      <header className="p-10">
        <h1 className="text-[50px] text-zinc-50">{title}</h1>
      </header>
      {children}
    </div>
  );
}
