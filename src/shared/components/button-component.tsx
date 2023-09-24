import classNames from "classnames";
import { useState } from "react";
import "../../styles/global.css";

interface IProps {
  children: React.ReactNode;
  type: "button" | "submit";
  style?: "CLOSE_BUTTON";
  size?: "sm" | "normal" | "lg";
  onClick?: () => void;
}

export default function Button({ type, children, onClick, style }: IProps) {
  const [focused, setFocused] = useState(false);
  return (
    <button
      type={type}
      className={classNames(
        "rounded w-full h-9 bg-indigo-600 text-zinc-50 font-semibold duration-300",
        {
          "outline outline-sky-300": focused,
          "fixed z-20 h-12 bg-zinc-50 text-zinc-600 hover:bg-rose-500 hover:text-zinc-50 rounded-none":
            style === "CLOSE_BUTTON",
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
