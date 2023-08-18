import { createContext, useContext, useState } from "react";

interface ITimeContextData {
  actualDate: number;
}

interface IProp {
  children: React.ReactNode;
}

const TimeContext = createContext({} as ITimeContextData);

export const useAppTimeContext = () => {
  return useContext(TimeContext);
};

export const AppTimeProvider = ({ children }: IProp) => {
  const [actualDate] = useState(18);

  //   const toggleMenu = useCallback(() => {
  //     setIsOpen((prev) => !prev);
  //   }, []);

  return (
    <>
      <TimeContext.Provider value={{ actualDate }}>
        {children}
      </TimeContext.Provider>
    </>
  );
};
