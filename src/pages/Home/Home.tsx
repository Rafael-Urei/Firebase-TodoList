import { BaseLayout } from "../../shared/layouts/BaseLayout";
import { useAppLoginModalContext } from "../../shared/contexts/LoginModalContext";
import { LoginModal } from "../../shared/components/LoginModal/LoginModal";

export const Home = () => {
  const { isOpen, toggleLoginModal } = useAppLoginModalContext();
  return (
    <>
      {isOpen && <LoginModal></LoginModal>}
      <BaseLayout title="Welcome">
        <div className="flex">
          <div className="flex flex-col text-zinc-200">
            <h2 className="text-lg m-2">Are you new here?</h2>
            <div className="flex flex-col items-center">
              <button className="bg-orange-600 rounded p-1 w-full duration-150 hover:bg-orange-800 text-slate-50">
                Register
              </button>
              <p className="m-2 text-sm">Or</p>
              <p
                about="login-page"
                className="duration-150 cursor-pointer text-sm hover:text-cyan-500"
                onClick={toggleLoginModal}
              >
                Sign In
              </p>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};
