import { createContext, useCallback, useContext, useState } from "react";

interface ITaskMenuContextData {
  isOpen: boolean;
  toggleTaskMenu: () => void;
}

interface IProp {
  children: React.ReactNode;
}

const TaskMenuContext = createContext({} as ITaskMenuContextData);

export const useAppTaskMenuContext = () => {
  return useContext(TaskMenuContext);
};

export const AppTaskMenuProvider = ({ children }: IProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleTaskMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <TaskMenuContext.Provider
        value={{
          isOpen,
          toggleTaskMenu,
        }}
      >
        {children}
      </TaskMenuContext.Provider>
    </>
  );
};
