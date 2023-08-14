import { motion } from "framer-motion";

interface IAnimatedTagProps {
  children: React.ReactNode;
}

const animation = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 50 },
  exit: { opacity: 0, y: 0 },
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
