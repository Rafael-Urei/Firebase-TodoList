import { useNavigate } from "react-router-dom";

export default function Paper({ children, title }: any) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col h-96 w-80 rounded-md  opacity-50 text-zinc-600 duration-200 cursor-pointer border-2 hover:opacity-100 hover:text-indigo-600"
      onClick={() =>
        navigate(`/${title.trim().toLocaleLowerCase().replace(" ", "")}`)
      }
    >
      <header className="flex items-center justify-center text-xl font-semibold  w-full h-20 border-b border-b-slate-200">
        {title}
      </header>
      <div className="flex h-full items-center justify-center p-2 text-center text-[60px] text-zinc-600">
        {children}
      </div>
    </div>
  );
}
