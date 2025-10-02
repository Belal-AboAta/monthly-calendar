import * as React from "react";

import type { CalenderDaysProps } from "@/types/CalendarDaysTypes";
import { CalendarDay } from "./CalendarDay";

export const CalendarDays: React.FC<CalenderDaysProps> = ({ calendarDays }) => {
  return (
    <div className="w-full grid grid-cols-7 grid-rows-6 justify-center items-center">
      {calendarDays.map((calendarDay) => (
        <CalendarDay key={calendarDay.date.getTime()} day={calendarDay} />
      ))}
    </div>
  );
};
