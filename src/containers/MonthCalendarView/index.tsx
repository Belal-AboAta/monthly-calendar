import * as React from "react";

import { getMonthTextFromDate } from "@/lib/utils";
import { CalendarDays } from "../../components/CalendarDays";
import { CalendarHeader } from "../../components/CalendarHeader";
import { useCalendarDays } from "../../hooks/useCalendarDays";
import { useCurrentMonth } from "../../hooks/useCurrentMonth";
import { WeekDays } from "../../components/WeekDays";

export const MonthCalendarView: React.FC = () => {
  const { currentMonth, onNext, onPrev, onToday } = useCurrentMonth();
  const calendarDays = useCalendarDays(currentMonth);
  const calendarText = getMonthTextFromDate(currentMonth);

  return (
    <>
      <CalendarHeader
        calendarText={calendarText}
        onNext={onNext}
        onPrev={onPrev}
        onToday={onToday}
      />
      <WeekDays />
      <CalendarDays calendarDays={calendarDays} />
    </>
  );
};
