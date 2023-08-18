import { motion } from "framer-motion";

export const AddTask = () => {
  return (
    <>
      <motion.div>
        <header>
          <h1>Add Task</h1>
        </header>
        <form>
          <input></input>
          <label>Tag</label>
          <div></div>
          <button>Add Task</button>
        </form>
      </motion.div>
    </>
  );
};
