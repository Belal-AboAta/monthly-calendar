import type React from "react";

export interface CalendarDayType {
  currentMonth: boolean;
  currentDay: boolean;
  number: number;
  date: Date;
}

export interface CalendarDayPropss {
  day: CalendarDayType;
  openDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export interface CalenderDaysProps {
  calendarDays: CalendarDayType[];
}
