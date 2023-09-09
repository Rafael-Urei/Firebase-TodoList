import { zodResolver } from "@hookform/resolvers/zod";
import AuthLayout from "../../shared/layouts/auth-layout";
import {
  KeyRound,
  Mail,
  LoaderIcon,
  User,
  XCircle,
  CheckCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "./register-schema";
import { IRegisterData } from "./types";
import { useState } from "react";
import { SignUp } from "../../shared/config/firebase";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({ resolver: zodResolver(registerSchema) });

  function onSubmit(data: IRegisterData) {
    SignUp(data, setLoading, navigate);
  }

  return (
    <>
      <AuthLayout title="Sign Up">
        <div className="h-full bg-transparent flex items-center justify-center">
          <div className="flex flex-col h-auto w-96 gap-2 rounded bg-zinc-50 items-center justify-center px-8 py-8 shadow-md">
            <div className="w-full flex items-center justify-center bg-transparent text-blue-500 p-3 mb-2">
              <h1 className="text-lg">Register</h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 w-full items-center justify-center"
            >
              {/* Component JSX Username */}
              <div className="flex gap-4 w-full items-center">
                <User className="h-4 w-4 text-sky-600" />
                <input
                  type="text"
                  autoComplete="none"
                  placeholder="Username"
                  {...register("username")}
                  className="w-full h-10 px-2 bg-transparent border-b-sky-600 border-b text-sky-600 placeholder:italic"
                ></input>
              </div>
              {errors.username && (
                <span className="italic text-rose-700 text-xs">
                  {errors.username.message}
                </span>
              )}

              {/* Component JSX E-mail */}
              <div className="flex gap-4 w-full items-center">
                <Mail className="h-4 w-4 text-sky-600" />

                <input
                  type="text"
                  autoComplete="none"
                  placeholder="example@gmail.com"
                  {...register("email")}
                  className="w-full h-10 px-2 bg-transparent border-b-sky-600 border-b text-sky-600 placeholder:italic"
                ></input>
              </div>
              {/* Component JSX E-mail Errors */}
              {errors.email && (
                <span className="italic text-rose-700 text-xs">
                  {errors.email.message}
                </span>
              )}
              {/* Component JSX Password */}
              <div className="flex gap-4 w-full items-center ">
                <KeyRound className="h-4 w-4 text-sky-600" />

                <input
                  type="password"
                  autoComplete="none"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full h-10 px-2 bg-transparent border-b-sky-600 border-b text-sky-600 placeholder:italic"
                ></input>
                {/* Component JSX Password Errors */}
              </div>
              {errors.password && (
                <span className="italic text-rose-700 text-xs">
                  {errors.password.message}
                </span>
              )}
              {/* Component JSX Confirm Password */}
              <div className="flex gap-4 w-full items-center ">
                <KeyRound className="h-4 w-4 text-sky-600" />

                <input
                  type="password"
                  autoComplete="none"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  className="w-full h-10 px-2 bg-transparent border-b-sky-600 border-b text-sky-600 placeholder:italic"
                ></input>
                {/* Component JSX Confirm Password Errors */}
              </div>
              {/* Component JSX to validate Password */}
              {errors.confirmPassword ? (
                <div className="flex w-full gap-2 p-4 text-sm items-center font-medium">
                  <span className="flex items-center gap-2 text-xs text-red-600">
                    <XCircle className="h-4 w-4" />
                    Passwords do not match
                  </span>
                </div>
              ) : (
                <div className="flex w-full gap-2 p-4 text-sm items-center font-medium">
                  <span className="flex items-center gap-2 text-xs text-emerald-600">
                    <CheckCircle className="h-4 w-4" />
                    Passwords match
                  </span>
                </div>
              )}

              {/* Component JSX Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center p-2 shadow-sm bg-blue-500 rounded mt-4 text-zinc-50 font-semibold w-full"
              >
                {loading ? <LoaderIcon className="animate-spin" /> : "Sign Up"}
              </button>
            </form>
            <p className="text-zinc-400 text-xs">Or</p>
            <Link to="/Login" className="text-blue-500 text-sm">
              Sign In
            </Link>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
