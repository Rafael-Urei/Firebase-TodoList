import { motion } from "framer-motion";

interface IAnimatedPageProps {
  children: React.ReactNode;
}

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const AnimatedPage = ({ children }: IAnimatedPageProps) => {
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
