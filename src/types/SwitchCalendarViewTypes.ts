export enum CalendarViewEnum {
  Day = "day",
  Week = "week",
  Month = "month",
  Year = "year",
}

export interface SwitchCalendarViewProps {
  onValueChange: (view: CalendarViewEnum) => void;
}
