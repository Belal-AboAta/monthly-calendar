export interface DeleteCalendarEventDailogProps {
  isOpen: boolean;
  onClose: () => void;
  date?: Date;
  eventId?: string;
}
