import type { CalendarEventsContextType } from "@/types/CalendarEventsTypes";
import { createContext, useContext } from "react";

export const CalendarEventFlagContext =
  createContext<CalendarEventsContextType>({
    flag: false,
  });

export const useCalendarEventFlagContext = () =>
  useContext(CalendarEventFlagContext);
