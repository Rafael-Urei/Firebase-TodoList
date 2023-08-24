import { createContext, useCallback, useContext, useState } from "react";

interface IMenuOptions {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface IMenuContextData {
  isOpen: boolean;
  menuOptions: IMenuOptions[];
  toggleMenu: () => void;
  setMenuOptions: (newMenuOptions: IMenuOptions[]) => void;
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
  const [menuOptions, setMenuOptions] = useState<IMenuOptions[]>([]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSetMenuOptions = useCallback((newMenuOptions: IMenuOptions[]) => {
    setMenuOptions(newMenuOptions);
  }, []);

  return (
    <>
      <MenuContext.Provider
        value={{
          isOpen,
          toggleMenu,
          setMenuOptions: handleSetMenuOptions,
          menuOptions,
        }}
      >
        {children}
      </MenuContext.Provider>
    </>
  );
};
