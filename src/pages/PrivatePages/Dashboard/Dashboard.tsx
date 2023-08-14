import { useAppAuthContext } from "../../../shared/contexts/AuthContext/Auth";

export const Dashboard = () => {
  const { currentUser }: any = useAppAuthContext();
  return (
    <>
      <div>Olá {currentUser.email}!</div>
    </>
  );
};
