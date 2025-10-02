export type onNextType = () => void;
export type onPrevType = () => void;
export type onTodayType = () => void;

export interface CalendarHeaderProps {
  currentMonth: Date;
  onNext: onNextType;
  onPrev: onPrevType;
  onToday: onTodayType;
}
