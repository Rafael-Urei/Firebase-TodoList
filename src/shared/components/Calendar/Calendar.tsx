import "../../../styles/global.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import { useAppCalendarContext } from "../../contexts/CalendarContext/CalendarContext";

export const CalendarComponent = () => {
  const { setInputValue, toggleCalendar } = useAppCalendarContext();
  let actualDay = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(actualDay, "MMM-yyyy"));
  let [selectedDay, setSelectedDay] = useState(actualDay);
  let firstDayOfCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let daysList = eachDayOfInterval({
    start: firstDayOfCurrentMonth,
    end: endOfMonth(firstDayOfCurrentMonth),
  });
  let dayOfWeek = getDay(firstDayOfCurrentMonth);
  const colStart = [
    "",
    "col-start-1",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
  ];

  const handleMonth = (condition: boolean) => {
    let firstDayOfNextMonth = add(firstDayOfCurrentMonth, {
      months: condition ? 1 : -1,
    });
    setCurrentMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  const handleDays = (day: Date) => {
    setSelectedDay(day);
    setInputValue(day);
  };

  return (
    <>
      <div
        className="self-center w-full border-blue-400 bg-slate-50 scale-75 h-auto border py-4 rounded-md flex flex-col justify-center
       dark:bg-zinc-800 border-none "
      >
        <button
          className="absolute top-3 right-3"
          type="button"
          onClick={toggleCalendar}
        >
          <X />
        </button>
        <div className="flex gap-2 item-center justify-center">
          <div>
            <button
              type="button"
              onClick={() => handleMonth(false)}
              className="text-slate-300 hover:text-slate-600 duration-200"
            >
              <ChevronLeft />
            </button>
          </div>
          <div>
            <h1 className="font-medium text-slate-500 duration-200">
              {format(firstDayOfCurrentMonth, "MMMM yyyy")}
            </h1>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleMonth(true)}
              className="text-slate-300 hover:text-slate-600 duration-200"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 my-4 text-center text-slate-300 dark:text-zinc-500">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="grid grid-cols-7 text-sm font-medium text-slate-500 w-full">
          {daysList.map((day, index) => {
            return (
              <div
                key={day.toString()}
                className={
                  index === 0
                    ? `${
                        colStart[dayOfWeek + 1]
                      } flex border-t py-2 items-center justify-center dark:border-zinc-500`
                    : `flex border-t py-2 items-center justify-center dark:border-zinc-500`
                }
              >
                <button
                  type="button"
                  onClick={() => handleDays(day)}
                  className={
                    isEqual(day, selectedDay)
                      ? "bg-blue-500 text-slate-50 h-8 w-8 rounded-full duration-200"
                      : isEqual(day, selectedDay) && !isToday(day)
                      ? "hover:bg-slate-200 text-slate-700 h-8 w-8 rounded-full duration-200 bg-black dark:text-zinc-400"
                      : "hover:bg-slate-200 text-slate-700 h-8 w-8 rounded-full duration-200 dark:text-zinc-400"
                  }
                >
                  <time dateTime={format(day, "yyyy/MM/dd")}>
                    {format(day, "d")}
                  </time>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
