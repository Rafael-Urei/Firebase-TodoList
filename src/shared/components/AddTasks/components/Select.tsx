import { useEffect, useState } from "react";
import classNames from "classnames";

interface IProps {
  name: string;
  options: string[];
  getValues: any;
}

export default function Select({ options, getValues, name }: IProps) {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setFocused(true);
  }, []);

  return (
    <div
      className={classNames(
        "relative flex items-center justify-center bg-zinc-50 border border-gray-300 rounded h-10 duration 200",
        {
          "border-indigo-600": focused,
        }
      )}
    >
      <label
        className={classNames(
          "absolute top-[6px] left-4 opacity-100 duration-200",
          {
            "absolute top-[-10px] left-2 bg-zinc-50 text-indigo-600 px-2 text-xs":
              focused,
            "opacity-30": !focused,
          }
        )}
      >
        {name}
      </label>
      <select
        onFocus={() => setFocused(true)}
        className="w-full bg-transparent h-full rounded px-4"
      >
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
}
