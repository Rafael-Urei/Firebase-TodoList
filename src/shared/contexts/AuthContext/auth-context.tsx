import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../../config/firebase";
import { User } from "firebase/auth";
import { Loading } from "../../components/loading-component";
import { IProps, IAuthData } from "./type";

const AuthContext = createContext({} as IAuthData);

export const useAppAuthContext = () => {
  return useContext(AuthContext);
};

export const AppAuthProvider = ({ children }: IProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const handleLoading = useCallback(() => {
    setLoading((oldValue) => !oldValue);
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <AuthContext.Provider
        value={{ currentUser, loading, setLoading: handleLoading }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
