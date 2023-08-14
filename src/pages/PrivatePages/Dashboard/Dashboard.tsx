import { auth } from "../../../shared/config/Firebase";
import { useAppAuthContext } from "../../../shared/contexts/AuthContext/Auth";
import { signOut } from "firebase/auth";

export const Dashboard = () => {
  const { currentUser }: any = useAppAuthContext();
  return (
    <>
      <div>Olá {currentUser.email}!</div>
      <button onClick={() => signOut(auth)}>Sign out</button>
    </>
  );
};
