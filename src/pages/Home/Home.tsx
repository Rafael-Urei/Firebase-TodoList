import { BaseLayout } from "../../shared/layouts/BaseLayout";

export const Home = () => {
  return (
    <>
      <BaseLayout title="Welcome">
        <div>
          <div>
            <h2>Are you new here?</h2>
            <div>
              <p>If yes</p>
              <button>Register</button>
              <p>No? login right here</p>
              <button>Login</button>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};
