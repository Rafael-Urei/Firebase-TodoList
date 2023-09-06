import { useState } from "react";
import { Divider } from "../../../shared/components/Divider/Divider";
import { useAppAuthContext } from "../../../shared/contexts/AuthContext/Auth";
import { X, ChevronLeft } from "lucide-react";
import { User, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../../../shared/config/Firebase";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface IUpdateFormData {
  username: string;
}

const updateSchema = z.object({
  username: z.string().nonempty("Cannot be blank"),
});

export const Profile = () => {
  type UpdateFormDataSchema = z.infer<typeof updateSchema>;
  const { currentUser } = useAppAuthContext();
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [changeProfile, setChangeProfile] = useState<boolean>(false);
  const [photo, setPhoto] = useState<any>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormDataSchema>({ resolver: zodResolver(updateSchema) });

  const handleVerifyEmail = async () => {
    await sendEmailVerification(auth.currentUser as User).then(() => {
      setShowPopUp((prev) => !prev);
    });
  };

  const animation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 5 },
    exit: { opacity: 0, y: 0 },
  };

  const handleUpdateProfile = async (data: IUpdateFormData) => {
    console.log(data);
    console.log(auth.currentUser);
    // const imageURL = URL.createObjectURL(photo);
    await updateProfile(auth?.currentUser as User, {
      displayName: data.username,
    });
    navigate("/upcoming");
    console.log(auth.currentUser);
  };

  // const handleCHangePhoto = (e: any) => {
  //   if (e.target.files[0]) {
  //     setPhoto(e.target.files[0]);
  //   }
  // };

  return (
    <>
      <div className="flex h-screen w-screen bg-slate-200 items-center justify-center relative">
        {showPopUp && (
          <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center justify-center rounded h-24 p-4 text-slate-600 text-sm absolute bg-transparent top-1"
          >
            A verification was sent to your e-mail!
          </motion.div>
        )}
        <div className="flex absolute top-4 left-4">
          <button type="button" onClick={() => navigate("/upcoming")}>
            <ChevronLeft />
          </button>
        </div>

        <div className="flex flex-col gap-4 shadow-md bg-slate-50 h-2/3 w-96 rounded-md items-center justify-center py-5">
          {!changeProfile ? (
            <>
              <label className="flex h-24 w-24 bg-slate-200 rounded-full items-center justify-center cursor-pointer">
                <span className="text-[10px] w-full text-center font-medium text-slate-600">
                  {}
                </span>
              </label>
              <button
                type="button"
                className="bg-slate-600 text-slate-50 rounded h-10 px-2"
                onClick={() => setChangeProfile(!changeProfile)}
              >
                Edit Profile
              </button>
            </>
          ) : (
            <button
              type="button"
              className="bg-transparent text-slate-600 rounded h-10 px-2"
              onClick={() => setChangeProfile(!changeProfile)}
            >
              <X />
            </button>
          )}
          {changeProfile ? (
            <>
              <label className="flex h-24 w-24 bg-slate-200 rounded-full items-center justify-center cursor-pointer">
                <input type="file" className="hidden" />
                <span className="text-[10px] w-full text-center font-medium text-slate-600">
                  {}
                </span>
              </label>
              <form
                className="my-4 flex flex-col gap-4"
                onSubmit={handleSubmit(handleUpdateProfile)}
              >
                <div className="flex flex-col w-full items-start">
                  <label className="text-slate-400 text-xs">Username:</label>
                  <input
                    className="bg-transparent border-b border-slate-200 rounded-sm w-full p-1 text-sm text-slate-600"
                    {...register("username")}
                  ></input>
                  {errors.username && (
                    <span className="italic text-rose-600 text-xs">
                      {errors.username.message}
                    </span>
                  )}
                </div>
                {/* <div className="flex flex-col w-full items-start">
                  <label className="text-slate-400 text-xs">Phone:</label>
                  <input
                    className="bg-transparent border-b border-slate-200 rounded-sm w-full p-1 text-sm text-slate-600"
                    {...register("phone")}
                  ></input>
                  {errors.phone && (
                    <span className="italic text-rose-600 text-xs">
                      {errors.phone.message}
                    </span>
                  )}
                </div> */}

                <button
                  type="submit"
                  className="rounded h-10 px-2 bg-transparent border text-slate-600 border-gray-200 duration-150 hover:border-blue-500"
                >
                  Save changes
                </button>
              </form>
            </>
          ) : (
            <>
              {!currentUser?.emailVerified ? (
                <div>
                  <p className="italic text-pink-500 text-xs">
                    Your email is not verified!{" "}
                    <span
                      onClick={handleVerifyEmail}
                      className="not-italic px-2 text-blue-500 cursor-pointer"
                    >
                      Click here to verify
                    </span>
                  </p>
                </div>
              ) : (
                <div>
                  <p className="italic text-emerald-500 text-xs">
                    Your email was already verified!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
