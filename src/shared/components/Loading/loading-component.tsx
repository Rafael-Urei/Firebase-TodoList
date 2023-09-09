import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const Loading = () => {
  return (
    <>
      <motion.div
        variants={animation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="h-screen w-screen flex items-center justify-center flex-col gap-4"
      >
        <div className="flex gap-2 items-center justify-center">
          <div className="h-3 w-3 bg-slate-600 rounded-full animate-bounce"></div>
          <div className="h-3 w-3 bg-slate-600 rounded-full animate-bounce"></div>
          <div className="h-3 w-3 bg-slate-600 rounded-full animate-bounce"></div>
        </div>
        <p className="text-sm text-slate-600 font-bold">Loading</p>
      </motion.div>
    </>
  );
};
