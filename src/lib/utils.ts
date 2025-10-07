import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

import type { CalendarEventType } from "@/types/EventFormTypes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormatedTextFromDate(
  date: Date,
  formatOptions: Intl.DateTimeFormatOptions,
  local = "en-US",
) {
  return new Intl.DateTimeFormat(local, formatOptions).format(date);
}

export function getYearTextFromDate(date: Date, local = "en-US") {
  const formatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
  };
  return getFormatedTextFromDate(date, formatOptions, local);
}

export function getMonthOnlyTextFromDate(date: Date, local = "en-US") {
  const formatOptions: Intl.DateTimeFormatOptions = {
    month: "long",
  };
  return getFormatedTextFromDate(date, formatOptions, local);
}

export function getMonthTextFromDate(date: Date, local = "en-US") {
  const formatOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  return getFormatedTextFromDate(date, formatOptions, local);
}

export function getWeekTextFromDate(date: Date, local = "en-US") {
  const formatOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  const formatedDate = getFormatedTextFromDate(date, formatOptions, local);
  dayjs.extend(weekOfYear);
  return `Week ${dayjs(date).week()}, ${formatedDate}`;
}

export function getDayTextFromDate(date: Date, local = "en-US") {
  const formatOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return getFormatedTextFromDate(date, formatOptions, local);
}

export function isDateToday(date: Date) {
  const today = new Date();
  const isSameYear = date.getFullYear() === today.getFullYear();
  const isSameMonth = date.getMonth() === today.getMonth();
  const isSameDay = date.getDate() === today.getDate();
  return isSameYear && isSameMonth && isSameDay;
}

// Will use local storage for simplicity
// TODO: use api calss insteaded

export function getCalendarEventKeyFromDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const key = `${year}-${month}-${day}`;

  return key;
}

export function getCalendarEventsFromLocalStorage(
  date: Date,
): CalendarEventType[] | null {
  const key = getCalendarEventKeyFromDate(date);
  const events = localStorage.getItem(key);
  return events ? JSON.parse(events) : null;
}
export function setCalendarEventInLocalStorage(
  date: Date,
  event: CalendarEventType,
  eventId?: string,
) {
  const key = getCalendarEventKeyFromDate(date);
  const isEventsExist = localStorage.getItem(key);
  const newEvent = {
    ...event,
    id: eventId ? eventId : uuidv4(),
  };

  if (isEventsExist) {
    const events: CalendarEventType[] = JSON.parse(isEventsExist);
    events.push(newEvent);
    localStorage.setItem(key, JSON.stringify(events));
  } else {
    localStorage.setItem(key, JSON.stringify([newEvent]));
  }
}

export function getCalendarEventByEventId(
  date: Date,
  eventId: string,
): CalendarEventType | undefined {
  const events = getCalendarEventsFromLocalStorage(date);
  return events?.find((event) => event.id === eventId);
}

export function updateCalendarEventInLocalStorage(
  date: Date,
  eventId: string,
  event: CalendarEventType,
) {
  deleteCalendarEventInLocalStorage(date, eventId);
  setCalendarEventInLocalStorage(date, event, eventId);
}

export function deleteCalendarEventInLocalStorage(date: Date, eventId: string) {
  const key = getCalendarEventKeyFromDate(date);
  const events = getCalendarEventsFromLocalStorage(date);
  const filteredEvents = events?.filter((event) => event.id !== eventId);
  localStorage.setItem(key, JSON.stringify(filteredEvents));
}
