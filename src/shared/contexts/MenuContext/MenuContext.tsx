import { createContext, useCallback, useContext, useState } from "react";

interface IMenuContextData {
  isOpen: boolean;
  toggleMenu: () => void;
}

interface IProp {
  children: React.ReactNode;
}

const MenuContext = createContext({} as IMenuContextData);

export const useAppMenuContext = () => {
  return useContext(MenuContext);
};

export const AppMenuProvider = ({ children }: IProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <MenuContext.Provider value={{ isOpen, toggleMenu }}>
        {children}
      </MenuContext.Provider>
    </>
  );
};
