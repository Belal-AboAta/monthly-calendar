import { isDateToday } from "@/lib/utils";
import type { CalendarDayType } from "@/types/CalendarDaysTypes";

export const useCalendarDays = (date: Date) => {
  const days: CalendarDayType[] = [];

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();

  for (let day = 0; day < 42; day++) {
    if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - weekdayOfFirstDay);
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    const calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === date.getMonth(),
      currentDay: isDateToday(firstDayOfMonth),
      number: firstDayOfMonth.getDate(),
      date: new Date(firstDayOfMonth),
    };

    days.push(calendarDay);
  }

  return days;
};
