import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormatedTextFromDate(
  date: Date,
  formatOptions: Record<string, string>,
  local = "en-US",
) {
  return new Intl.DateTimeFormat(local, formatOptions).format(date);
}

export function getMonthTextFromDate(date: Date, local = "en-US") {
  const formatOptions = {
    month: "long",
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
