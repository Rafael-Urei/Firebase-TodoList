import { Mail, KeyRound, Check, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { BaseLayout } from "../../shared/layouts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../shared/config/Firebase";

interface IFormData {
  email: string;
  password: string;
}

const userLoginSchema = z.object({
  email: z
    .string()
    .nonempty()
    .email()
    .transform((email) => {
      return email.toLocaleLowerCase().trim();
    }),
  password: z.string().nonempty(),
});

type userLoginSchemaData = z.infer<typeof userLoginSchema>;

export const LoginModal = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<userLoginSchemaData>({ resolver: zodResolver(userLoginSchema) });

  const handleOnSubmit = async (data: IFormData) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    navigate("/");
  };

  return (
    <>
      <BaseLayout title="Login">
        <div className="h-screen w-screen bg-transparent flex items-center justify-center fixed">
          <div className="flex flex-col h-auto w-96 gap-2 rounded bg-zinc-50 items-center justify-center px-8 py-8 shadow-md">
            <div className="w-full flex items-center justify-center bg-transparent text-blue-500 p-3 mb-2">
              <h1>Login</h1>
            </div>
            <form
              className="flex flex-col gap-2 w-full items-center justify-center"
              onSubmit={handleSubmit(handleOnSubmit)}
            >
              <div className="relative w-full ">
                <Mail className="flex mt-2 absolute text-blue-500 h-4 w-4 self-center" />
                {!errors.email ? (
                  <Check className="flex mt-2 absolute right-1 text-blue-500 h-4 w-4 self-center" />
                ) : (
                  <X className="flex mt-2 absolute right-1 text-pink-400 h-4 w-4 self-center" />
                )}
                <input
                  {...register("email")}
                  type="email"
                  placeholder="example@gmail.com"
                  className={
                    errors.password
                      ? "py-2 pl-8 pr-6 border-b-2 border-b-pink-500 bg-transparent w-full text-sm text-blue-500 font-normal placeholder:opacity-30"
                      : "py-2 pl-8 pr-6 border-b-2 border-b-blue-500 bg-transparent w-full text-sm text-blue-500 font-normal placeholder:opacity-30"
                  }
                ></input>
                {errors.email && (
                  <span className="text-pink-400 italic text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="relative w-full ">
                <KeyRound className="flex mt-2 absolute text-blue-500 h-4 w-4 self-center" />
                {!errors.password ? (
                  <Check className="flex mt-2 absolute right-1 text-blue-500 h-4 w-4 self-center" />
                ) : (
                  <X className="flex mt-2 absolute right-1 text-pink-400 h-4 w-4 self-center" />
                )}
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Type here your password"
                  className={
                    errors.password
                      ? "py-2 pl-8 pr-6 border-b-2 border-b-pink-500 bg-transparent w-full text-sm text-blue-500 font-normal placeholder:opacity-30"
                      : "py-2 pl-8 pr-6 border-b-2 border-b-blue-500 bg-transparent w-full text-sm text-blue-500 font-normal placeholder:opacity-30"
                  }
                ></input>
                {errors.password && (
                  <span className="text-pink-400 italic text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <button className="p-2 shadow-sm bg-blue-500 rounded mt-4 text-zinc-50 font-semibold w-full">
                Sign In
              </button>
            </form>
            <p className="text-zinc-400 text-xs">Or</p>
            <Link to="/" className="text-blue-500 text-sm">
              Sign Up
            </Link>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};
