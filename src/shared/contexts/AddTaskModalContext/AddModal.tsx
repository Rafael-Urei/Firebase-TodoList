import { createContext, useCallback, useContext, useState } from "react";
import { useAppCalendarContext } from "../CalendarContext/CalendarContext";
import { startOfToday } from "date-fns";

interface IProp {
  children: React.ReactNode;
}

interface IAddModalContextData {
  isOpen: boolean;
  toggleAddTaskModal: () => void;
}

const AddModalContext = createContext({} as IAddModalContextData);

export const useAppAddModalContext = () => {
  return useContext(AddModalContext);
};

export const AppAddModalProvider = ({ children }: IProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setInputValue } = useAppCalendarContext();

  const toggleAddTaskModal = useCallback(() => {
    setIsOpen((prev) => !prev);
    setInputValue(startOfToday());
  }, []);

  return (
    <>
      <AddModalContext.Provider value={{ isOpen, toggleAddTaskModal }}>
        {children}
      </AddModalContext.Provider>
    </>
  );
};
