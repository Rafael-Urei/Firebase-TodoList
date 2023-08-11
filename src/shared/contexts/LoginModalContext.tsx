import { createContext, useCallback, useContext, useState } from "react";

interface ILoginModalContextData {
  isOpen: boolean;
  toggleLoginModal: () => void;
}

type Props = {
  children: React.ReactNode;
};

const LoginModalContext = createContext({} as ILoginModalContextData);

export const useAppLoginModalContext = () => {
  return useContext(LoginModalContext);
};

export const AppLoginModalProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleLoginModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <LoginModalContext.Provider value={{ toggleLoginModal, isOpen }}>
        {children}
      </LoginModalContext.Provider>
    </>
  );
};
