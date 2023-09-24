import { useEffect, useState } from "react";
import classNames from "classnames";

interface IProps {
  label: string;
  name: string;
  options: string[];
  getValues: any;
  register: any;
}

export default function Select({ options, name, label, register }: IProps) {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setFocused(true);
  }, []);

  return (
    <div
      className={classNames(
        "relative flex items-center justify-center bg-zinc-50 border border-gray-300 rounded h-10 duration 200 outline-1",
        {
          "border-indigo-600 outline outline-indigo-600": focused,
        }
      )}
    >
      <label
        className={classNames(
          "absolute top-2 left-2 opacity-100 duration-200 text-sm",
          {
            "top-[-10px] bg-zinc-50 text-indigo-600 px-2 text-xs": focused,
            "opacity-30": !focused,
          }
        )}
      >
        {label}
      </label>
      <select
        onFocus={() => setFocused(true)}
        className="w-full bg-transparent h-full rounded px-4 text-sm cursor-pointer"
        {...register(name)}
      >
        {options.map((option, index) => {
          return (
            <option key={index} className="cursor-pointer">
              {option.charAt(0).toLocaleUpperCase() + option.slice(1)}
            </option>
          );
        })}
      </select>
    </div>
  );
}
