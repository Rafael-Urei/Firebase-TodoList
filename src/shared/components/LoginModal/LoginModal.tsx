import { motion } from "framer-motion";

export const LoginModal = () => {
  return (
    <>
      <motion.div className="h-screen w-screen bg-slate-900 flex items-center justify-center fixed">
        <motion.div className="flex flex-col h-80 w-96 gap-2 rounded bg-zinc-50 items-center justify-center p-4">
          <h1 className="text-4xl">Login</h1>
          <form className="flex flex-col gap-2 w-full">
            <label className="text-sm">E-mail</label>
            <input type="email" className="p-2"></input>
            <label className="text-sm">Password</label>
            <input type="password" className="p-2"></input>
            <button className="p-2 shadow-sm bg-orange-400 rounded mt-4 text-zinc-50 font-semibold">
              Sign In
            </button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};
