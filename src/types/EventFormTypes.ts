export interface EventFormDialogProps {
  isOpen: boolean;
  onClose?: () => void;
  date: Date;
  isEdit: boolean;
  eventId?: string;
}

export interface CalendarEventType {
  id?: string;
  name: string;
  startTime: string;
  endTime: string;
}
