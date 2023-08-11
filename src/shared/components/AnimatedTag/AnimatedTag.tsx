import { motion } from "framer-motion";

interface IAnimatedTagProps {
  children: React.ReactNode;
}

const animation = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export const AnimatedTag = ({ children }: IAnimatedTagProps) => {
  return (
    <>
      <motion.div
        variants={animation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </>
  );
};
