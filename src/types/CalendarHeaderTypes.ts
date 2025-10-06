export type onNextType = () => void;
export type onPrevType = () => void;
export type onTodayType = () => void;

export interface CalendarHeaderProps {
  calendarText: string;
  onNext: onNextType;
  onPrev: onPrevType;
  onToday: onTodayType;
}
