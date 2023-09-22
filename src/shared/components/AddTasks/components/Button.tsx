import classNames from "classnames";

interface IProps {
  children: React.ReactNode;
  type: string;
}

export default function Button({ type, children }: IProps) {
  return (
    <button
      className={classNames(
        "rounded w-full h-9 bg-indigo-600 text-zinc-50 font-semibold"
      )}
    >
      {children}
    </button>
  );
}
