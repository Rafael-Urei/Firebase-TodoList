import classNames from "classnames";
import { useState } from "react";
import "../../styles/global.css";

interface IProps {
  children: React.ReactNode;
  type: "button" | "submit";
  size?: "sm" | "normal" | "lg";
  onClick?: () => void;
}

export default function Button({ type, children, onClick }: IProps) {
  const [focused, setFocused] = useState(false);
  return (
    <button
      type={type}
      className={classNames(
        "rounded w-full h-9 bg-indigo-600 text-zinc-50 font-semibold duration-300",
        {
          "outline outline-sky-300": focused,
        }
      )}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
