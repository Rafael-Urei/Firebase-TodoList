import { useState } from "react";

interface IProps {
  inputs: any;
}

export default function Form({ inputs }: IProps) {
  const [focused, setFocused] = useState({
    state: false,
    element: document.activeElement,
    id: "",
  });

  function handleChangeInput(element: any, name: string) {
    setFocused({ state: !focused, element: element, id: name });
  }

  return (
    <form className="flex flex-col p-10 gap-4">
      <h1 className="text-zinc-400 mb-4">Create your task</h1>
      {inputs.map((input: any) => {
        if (input.id !== "date") {
          return (
            <div
              key={input.id}
              placeholder={input.placeholder}
              className={
                focused.element == document.activeElement &&
                focused.id === input.id
                  ? "relative flex items-center justify-center bg-zinc-50 border border-indigo-600 rounded h-10 duration-200 before:content-[attr(placeholder)] before:absolute before:top-[-9px] before:left-2 before:bg-zinc-50 before:text-indigo-600 before:px-2 before:duration-200 before:text-xs before:opacity-100 opacity-80"
                  : "relative flex items-center justify-center bg-zinc-50 border border-gray-300 rounded h-10 duration 200 before:content-[attr(placeholder)] before:absolute before:top-[9px] before:left-[20px] before:bg-zinc-50 before:px-2 before:duration-200 before:text-xs before:opacity-0"
              }
              onFocus={(e) => handleChangeInput(e.target, input.id)}
            >
              <input
                placeholder={input.placeholder}
                className="w-full h-full px-4 z-10 rounded bg-transparent focus:placeholder:opacity-0"
              ></input>
            </div>
          );
        } else {
          return (
            <div
              key={input.id}
              placeholder={input.placeholder}
              className={
                focused.element == document.activeElement &&
                focused.id === input.id
                  ? "relative flex items-center justify-center bg-zinc-50 border border-indigo-600 rounded h-10 w-32 duration-200 before:content-[attr(placeholder)] before:absolute before:top-[-9px] before:left-2 before:bg-zinc-50 before:text-indigo-600 before:px-2 before:duration-200 before:text-xs before:opacity-100 opacity-80"
                  : "relative flex items-center justify-center bg-zinc-50 border border-gray-300 rounded h-10 w-32 duration 200 before:content-[attr(placeholder)] before:absolute before:top-[9px] before:left-[20px] before:bg-zinc-50 before:px-2 before:duration-200 before:text-xs before:opacity-0"
              }
              onFocus={(e) => handleChangeInput(e.target, input.id)}
            >
              <input
                placeholder={input.placeholder}
                className="w-full h-full px-4 z-10 rounded bg-transparent focus:placeholder:opacity-0 placeholder:text-start text-center"
              ></input>
            </div>
          );
        }
      })}
    </form>
  );
}
