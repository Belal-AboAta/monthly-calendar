import * as React from "react";

import { CalendarDays } from "@/components/CalendarDays";
import { CalendarHeader } from "@/components/CalendarHeader";
import { WeekDays } from "@/components/WeekDays";
import { useCurrentWeek } from "@/hooks/useCurrentWeek";
import { useWeekCalendarDays } from "@/hooks/useWeekCalendarDays";
import { getDayTextFromDate } from "@/lib/utils";

export const WeekCalendarView: React.FC = () => {
  const { currentWeek, onNext, onPrev, onToday } = useCurrentWeek();
  const calendarText = getDayTextFromDate(currentWeek);
  const calendarDays = useWeekCalendarDays(currentWeek);

  return (
    <>
      <CalendarHeader
        calendarText={calendarText}
        onNext={onNext}
        onPrev={onPrev}
        onToday={onToday}
      />
      <WeekDays />
      {<CalendarDays calendarDays={calendarDays} />}
    </>
  );
};
