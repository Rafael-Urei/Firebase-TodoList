import classNames from "classnames";
import { useState } from "react";

interface IProps {
  label: string;
  size?: "xs" | "lg";
  errors?: any;
  register: any;
  name: string;
  getValues: any;
}

export default function Input({
  label,
  size = "lg",
  name,
  errors,
  register,
  getValues,
}: IProps) {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <div
        className={classNames(
          "relative flex items-center justify-center bg-zinc-50 border border-gray-300 rounded h-10 duration 200 outline-1",
          {
            "border-indigo-600 outline outline-indigo-600":
              focused && !errors?.[name],
            "w-32": size === "xs",
            "border-pink-500 outline outline-pink-500":
              errors?.[name] && focused,
            "border-pink-300": errors?.[name] && !focused,
          }
        )}
      >
        <label
          className={classNames(
            "absolute top-2 left-2 opacity-100 duration-200 text-sm",
            {
              "top-[-10px] bg-zinc-50 text-indigo-600 px-2 text-xs": focused,
              "text-pink-500": errors?.[name],
              "opacity-30": !focused,
            }
          )}
        >
          {label}
        </label>
        <input
          autoComplete="off"
          autoCorrect="off"
          className="w-full px-4 bg-transparent z-10 h-full rounded text-sm"
          type="text"
          {...register(name)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            const value = getValues(name);
            value.length !== 0 && setFocused(true);
          }}
        />
      </div>
      {errors?.[name] && (
        <span className="text-pink-500 font-semibold text-xs">
          {errors?.[name]?.message}
        </span>
      )}
    </>
  );
}
