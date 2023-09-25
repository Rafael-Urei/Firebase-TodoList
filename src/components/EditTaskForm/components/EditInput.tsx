import classNames from "classnames";
import { useState } from "react";

type Props = {
  value?: string | undefined;
};

export default function TogglableInput({ value }: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-col gap-4 mb-2">
      <input
        defaultValue={value}
        disabled={!toggle}
        className={classNames("rounded p-2 border border-indigo-200", {
          "border-indigo-800": toggle,
        })}
      ></input>
      <button
        type="button"
        onClick={() => setToggle((prev) => !prev)}
        className="border bg-zinc-200 w-24 rounded text-xs"
      >
        {!toggle ? "Edit" : "Finish"}
      </button>
    </div>
  );
}
