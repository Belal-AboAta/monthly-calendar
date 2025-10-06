import { useCalendarEventFlagContext } from "@/context/CalendarEventFlagContext";
import { getCalendarEventsFromLocalStorage } from "@/lib/utils";
import { useEffect, useState } from "react";

export const useCalendarEvents = (date: Date) => {
  const { flag } = useCalendarEventFlagContext();

  const [calendarEvents, setCalendarEvents] = useState(
    getCalendarEventsFromLocalStorage(date),
  );

  useEffect(() => {
    setCalendarEvents(getCalendarEventsFromLocalStorage(date));
  }, [flag, date]);

  return { calendarEvents };
};
