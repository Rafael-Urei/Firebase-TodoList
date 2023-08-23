import { createContext, useCallback, useContext, useState } from "react";

interface ICalendarData {
  isOpen: boolean;
  toggleCalendar: () => void;
  inputValue: Date;
  setInputValue: (e: Date) => void;
}

interface IProp {
  children: React.ReactNode;
}

const CalendarContext = createContext({} as ICalendarData);

export const useAppCalendarContext = () => {
  return useContext(CalendarContext);
};

export const AppCalendarProvider = ({ children }: IProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<Date>(new Date());

  const toggleCalendar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <CalendarContext.Provider
        value={{ isOpen, toggleCalendar, inputValue, setInputValue }}
      >
        {children}
      </CalendarContext.Provider>
    </>
  );
};
