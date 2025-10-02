export interface CalendarDayType {
  currentMonth: boolean;
  currentDay: boolean;
  number: number;
  date: Date;
}

export interface CalendarDayPropss {
  day: CalendarDayType;
}

export interface CalenderDaysProps {
  calendarDays: CalendarDayType[];
}
