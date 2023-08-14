import { BaseLayout } from "../../shared/layouts/BaseLayout";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <BaseLayout title="Welcome">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col text-zinc-200 gap-2">
            <h2 className="text-4xl m-2">Are you new here?</h2>
            <div className="flex flex-col items-center">
              <button className="bg-blue-600 rounded p-1 w-full duration-150 hover:bg-blue-800 text-slate-50">
                Register
              </button>
              <p className="m-2 text-sm">Or</p>
              <Link
                to="/login"
                about="login-page"
                className="duration-150 cursor-pointer text-sm hover:text-blue-500"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};
