export default function Paper({ children, title }: any) {
  return (
    <div className="flex flex-col h-96 w-96 rounded-md bg-slate-50 opacity-50 duration-200 cursor-pointer shadow-md hover:opacity-100">
      <header className="flex items-center justify-center text-xl font-semibold text-zinc-600 w-full h-20 border-b border-b-slate-200">
        {title}
      </header>
      <div className="flex h-full items-center justify-center p-2 text-center text-[60px] text-zinc-600">
        {children}
      </div>
    </div>
  );
}
