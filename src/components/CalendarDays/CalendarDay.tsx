import { clsx } from "clsx";
import { PlusIcon } from "lucide-react";
import * as React from "react";

import { useCalendarEvents } from "@/hooks/useCalenderEvents";
import type { CalendarDayPropss } from "@/types/CalendarDaysTypes";
import { CalendarEvents } from "../CalendarEvents";
import { TextComponent } from "../TextComponent";
import { Button } from "../ui/button";
import { getWeekDayFromDate } from "@/lib/utils";

export const CalendarDay: React.FC<CalendarDayPropss> = ({
  day,
  openDialog,
  setSelectedDate,
}) => {
  const hanldeOpenEventDailog = () => {
    setSelectedDate(day.date);
    openDialog(true);
  };

  const { calendarEvents } = useCalendarEvents(day.date);
  const weekDay = getWeekDayFromDate(day.date);

  return (
    <div
      className={clsx(
        "h-56 flex flex-col w-full border border-gray-500 relative p-4 hover:[&_button]:block",
        day.currentDay
          ? "bg-green-300"
          : day.currentMonth
            ? "bg-gray-700"
            : "bg-gray-400",
      )}
    >
      <div className="min-h-8 flex justify-between items-center w-full self-start">
        <TextComponent
          text={day.number}
          className="font-bold text-gray-50 text-center"
        />
        <Button size="sm" className="hidden" onClick={hanldeOpenEventDailog}>
          <PlusIcon />
        </Button>
        <TextComponent text={weekDay} className="block 2xl:hidden" />
      </div>
      {calendarEvents && calendarEvents?.length > 0 && (
        <CalendarEvents calendarEvents={calendarEvents} date={day.date} />
      )}
    </div>
  );
};
