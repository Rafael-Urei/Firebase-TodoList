import classNames from "classnames";

type Props = {
  title?: string;
  type?: string;
  description?: string;
};

export default function Item({ title, type, description }: Props) {
  return (
    <li
      className={classNames(
        "flex flex-col gap-3 bg-zinc-50 min-h-24 h-auto shadow-md rounded-md p-4 cursor-pointer duration-500 hover:bg-slate-100"
      )}
    >
      <h1 className="capitalize font-semibold text-zinc-600">{title}</h1>
      {description && (
        <div className="min-h-10 p-4 rounded-md w-full text-zinc-400 text-xs">
          {description}
        </div>
      )}
      <div className="flex rounded items-center p-2 gap-2 opacity-50">
        <div
          className={classNames("h-3 w-3 rounded-full bg-zinc-800", {
            "bg-indigo-600": type === "Study",
            "bg-pink-600": type === "Work",
            "bg-emerald-600": type === "Personal",
            "bg-sky-600": type === "Trip",
          })}
        ></div>
        <div className="flex rounded-md text-xs">
          <h2>{type}</h2>
        </div>
      </div>
    </li>
  );
}
