import { useState } from "react";
import { Divider } from "../../../shared/components/Divider/Divider";
import { useAppAuthContext } from "../../../shared/contexts/AuthContext/Auth";
import { X, ChevronLeft, Moon } from "lucide-react";
import { User, sendEmailVerification } from "firebase/auth";
import { auth } from "../../../shared/config/Firebase";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { currentUser } = useAppAuthContext();
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [changeProfile, setChangeProfile] = useState<boolean>(false);

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
          <div className="flex h-24 w-24 bg-slate-200 rounded-full">
            <img></img>
          </div>
          <Divider />
          {!changeProfile ? (
            <button
              type="button"
              className="bg-slate-600 text-slate-50 rounded h-10 px-2"
              onClick={() => setChangeProfile(!changeProfile)}
            >
              Edit Profile
            </button>
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
              <form className="my-4 flex flex-col gap-4">
                <div className="flex flex-col w-full items-start">
                  <label className="text-slate-400 text-xs">Username:</label>
                  <input className="bg-transparent border-b border-slate-200 rounded-sm w-full p-1 text-sm text-slate-600"></input>
                </div>
                <div className="flex flex-col w-full items-start">
                  <label className="text-slate-400 text-xs">Phone:</label>
                  <input className="bg-transparent border-b border-slate-200 rounded-sm w-full p-1 text-sm text-slate-600"></input>
                </div>

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
              <div className="flex gap-2 text-slate-600 text-sm items-center justify-center cursor-pointer my-4">
                <Moon />
                <p>Change theme</p>
              </div>
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
