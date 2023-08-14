import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../config/Firebase";

interface IProp {
  children: React.ReactNode;
}

const AuthContext = createContext({});

export const useAppAuthContext = () => {
  return useContext(AuthContext);
};

export const AppAuthProvider = ({ children }: IProp) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  console.log(currentUser);
  if (pending) {
    return <>Loading</>;
  }

  return (
    <>
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
