import { motion } from "framer-motion";
// import { useState } from "react";
// import { z } from "zod";

// const TaskFormSchema = z.object({
//   title: z.string().nonempty("Cannot be blank!"),
//   description: z.string().nonempty("Cannot be blank!"),
//   list: z.string(),
// });

export const AddTask = () => {
  return (
    <>
      <motion.div className="p-4 z-10 fixed shadow-md w-80 h-auto flex flex-col gap-2 bg-zinc-100 text-slate-700 items-center m-6 rounded text-sm font-medium">
        <header className="flex w-full p-4 items-center justify-center">
          <h1 className="text-lg font-semibold">Task</h1>
        </header>
        <form className="flex flex-col gap-4 h-full w-full">
          <input
            className="p-2 text-slate-800 rounded-sm border bg-transparent text-sm"
            placeholder="ex. Study React"
          ></input>
          <textarea
            className="bg-transparent border p-2 rounded"
            placeholder="Description"
          ></textarea>
          <div className="flex gap-2 items-center">
            <label>List:</label>
            <select onChange={(e) => console.log(e.target.value)}>
              <option>Work</option>
              <option>Study</option>
            </select>
          </div>
          <div className="flex gap-2 items-center">
            <label>Due date:</label>
            <input
              className="border rounded-md bg-slate-100 w-28 p-2 flex items-center justify-center text-center"
              maxLength={10}
            ></input>
          </div>
          <button type="submit" className="bg-yellow-500 rounded p-2">
            Add Task
          </button>
        </form>
      </motion.div>
    </>
  );
};
