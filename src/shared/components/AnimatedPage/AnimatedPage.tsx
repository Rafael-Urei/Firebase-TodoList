import { motion } from "framer-motion";

interface IAnimatedPageProps {
  children: React.ReactNode;
}

const animation = {
  initial: { opacity: 1, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
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
