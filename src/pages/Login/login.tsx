import { useForm } from "react-hook-form";
import AuthLayout from "../../shared/layouts/auth-layout";
import { loginSchema } from "./login-schema";
import { Mail, KeyRound, LoaderIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginData } from "./types";
import { SignIn } from "../../shared/config/firebase";
import { useState } from "react";

//*Login Component*
export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //*UseForm*
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginData>({ resolver: zodResolver(loginSchema) });

  //*Function to submit data*
  function onSubmit(data: ILoginData) {
    SignIn(data, setLoading, navigate);
  }

  return (
    <AuthLayout title="Sign In">
      <div className="h-full bg-transparent flex items-center justify-center">
        <div className="flex flex-col h-auto w-96 gap-2 rounded bg-zinc-50 items-center justify-center px-8 py-8 shadow-md">
          <div className="w-full flex items-center justify-center bg-transparent text-blue-500 p-3 mb-2">
            <h1 className="text-lg">Login</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full items-center justify-center"
          >
            <div className="flex gap-4 w-full items-center">
              <Mail className="h-4 w-4 text-sky-600" />
              {/* Component JSX E-mail */}
              <input
                type="text"
                autoComplete="none"
                placeholder="example@gmail.com"
                {...register("email")}
                className="w-full h-10 px-2 bg-transparent border-b-sky-600 text-sky-600 rounded-md placeholder:italic"
              ></input>
            </div>
            {/* Component JSX E-mail Errors */}
            {errors.email && (
              <span className="italic text-rose-700 text-xs">
                {errors.email.message}
              </span>
            )}
            <div className="flex gap-4 w-full items-center ">
              <KeyRound className="h-4 w-4 text-sky-600" />
              {/* Component JSX Password */}
              <input
                type="password"
                autoComplete="none"
                placeholder="Password"
                {...register("password")}
                className="w-full h-10 px-2 bg-transparent border-b-sky-600 text-sky-600 rounded-md placeholder:italic"
              ></input>
              {/* Component JSX Password Errors */}
            </div>
            {errors.password && (
              <span className="italic text-rose-700 text-xs">
                {errors.password.message}
              </span>
            )}
            {/* Component JSX Submit Button */}
            <button
              type="submit"
              className="flex items-center justify-center p-2 shadow-sm bg-blue-500 rounded mt-4 text-zinc-50 font-semibold w-full"
            >
              {loading ? <LoaderIcon className="animate-spin" /> : "Sign In"}
            </button>
          </form>
          <p className="text-zinc-400 text-xs">Or</p>
          <Link to="/Register" className="text-blue-500 text-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
