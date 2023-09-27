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
        "rounded w-full text-zinc-600 border-2 h-12 font-semibold duration-300",
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
