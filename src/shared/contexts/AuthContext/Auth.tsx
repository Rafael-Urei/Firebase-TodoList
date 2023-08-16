import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../config/Firebase";
import { User } from "firebase/auth";
import { Loading } from "../../components/Loading/Loading";

interface IProp {
  children: React.ReactNode;
}

const AuthContext = createContext({});

export const useAppAuthContext = () => {
  return useContext(AuthContext);
};

export const AppAuthProvider = ({ children }: IProp) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
