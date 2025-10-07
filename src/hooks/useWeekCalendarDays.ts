import { isDateToday } from "@/lib/utils";
import type { CalendarDayType } from "@/types/CalendarDaysTypes";

export const useWeekCalendarDays = (date: Date) => {
  const days: CalendarDayType[] = [];

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const weekday = date.getDay();
  const firstDayOfWeek = new Date(
    currentYear,
    currentMonth,
    date.getDate() - weekday,
  );

  for (let day = 0; day < 7; day++) {
    if (day !== 0) {
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
    }

    const currentDate = new Date();

    const calendarDay = {
      currentMonth: firstDayOfWeek.getMonth() === currentDate.getMonth(),
      currentDay: isDateToday(firstDayOfWeek),
      number: firstDayOfWeek.getDate(),
      date: new Date(firstDayOfWeek),
    };

    days.push(calendarDay);
  }

  return days;
};
