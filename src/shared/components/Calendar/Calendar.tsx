import "../../../styles/global.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

export const CalendarComponent = () => {
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
  return (
    <>
      <div className="absolute bg-slate-50 scale-75 h-auto w-96 border py-4 shadow-lg rounded-md flex flex-col justify-center">
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
        <div className="grid grid-cols-7 my-4 text-center text-slate-300">
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
                      } flex border-t py-2 items-center justify-center`
                    : `flex border-t py-2 items-center justify-center`
                }
              >
                <button
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={
                    isEqual(day, selectedDay)
                      ? "bg-cyan-500 text-slate-50 h-8 w-8 rounded-full duration-200"
                      : isEqual(day, selectedDay) && !isToday(day)
                      ? "hover:bg-slate-200 text-slate-700 h-8 w-8 rounded-full duration-200 bg-black"
                      : "hover:bg-slate-200 text-slate-700 h-8 w-8 rounded-full duration-200"
                  }
                >
                  <time dateTime={format(day, "yyyy-MM-dd")}>
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
