import { Mail, KeyRound, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../../layouts";

export const LoginModal = () => {
  return (
    <>
      <BaseLayout title="Login">
        <div className="h-screen w-screen bg-transparent flex items-center justify-center fixed">
          <div className="flex flex-col h-80 w-96 gap-2 rounded bg-zinc-50 items-center justify-center px-8 shadow-md">
            <div className="w-full flex items-center justify-center bg-transparent text-blue-500 p-3 mb-2">
              <h1>Login</h1>
            </div>
            <form className="flex flex-col gap-2 w-full items-center justify-center">
              <div className="relative w-full ">
                <Mail className="flex mt-2 absolute text-blue-500 h-4 w-4 self-center" />
                <Check className="flex mt-2 absolute right-1 text-blue-500 h-4 w-4 self-center" />
                <input
                  type="email"
                  className="py-2 pl-8 pr-6 border-b-2 border-b-blue-500 bg-transparent w-full text-sm text-blue-500 font-semibold"
                ></input>
              </div>
              <div className="relative w-full ">
                <KeyRound className="flex mt-2 absolute text-blue-500 h-4 w-4 self-center" />
                <Check className="flex mt-2 absolute right-1 text-blue-500 h-4 w-4 self-center" />
                <input
                  type="password"
                  className="py-2 pl-8 pr-6 border-b-2 border-b-blue-500 bg-transparent w-full text-sm text-blue-500 font-semibold"
                ></input>
              </div>
              <button className="p-2 shadow-sm bg-blue-500 rounded mt-4 text-zinc-50 font-semibold w-full">
                Sign In
              </button>
            </form>
            <p className="text-zinc-400 text-xs">Or</p>
            <Link to="/register" className="text-blue-500 text-sm">
              Sign Up
            </Link>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};
