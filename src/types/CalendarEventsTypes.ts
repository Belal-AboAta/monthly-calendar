import type React from "react";
import type { CalendarEventType } from "./EventFormTypes";

export interface CalendarEventProps {
  calendarEvent: CalendarEventType;
  toggleDeleteCalendarEventDialog: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  toggleEditCalendarEventDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setEventId: React.Dispatch<React.SetStateAction<string>>;
}

export interface CalendarEventsProps {
  calendarEvents: CalendarEventType[];
  date: Date;
}

export interface CalendarEventsContextType {
  flag: boolean;
  toggleFlag?: React.Dispatch<React.SetStateAction<boolean>>;
}
