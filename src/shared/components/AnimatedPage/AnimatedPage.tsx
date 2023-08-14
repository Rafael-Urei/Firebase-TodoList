import { motion } from "framer-motion";

interface IAnimatedPageProps {
  children: React.ReactNode;
}

const animation = {
  initial: { opacity: 1 },
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
      >
        {children}
      </motion.div>
    </>
  );
};
