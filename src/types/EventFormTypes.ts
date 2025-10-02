export interface EventFormDialogProps {
  isOpen: boolean;
  onClose?: any;
  date: Date;
  isEdit: boolean;
  name?: string | number;
  startTime?: Date;
  endTime?: Date;
}

export interface CalendarEventType {
  id?: string;
  name: string;
  startTime: string;
  endTime: string;
}
