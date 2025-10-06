import dayjs from "dayjs";

export function getPercentageFromTime(startDate: Date, endDate: Date): number {
  const hoursDiff = dayjs(endDate).diff(startDate, "hours");
  const minsDiff = dayjs(endDate).diff(startDate, "minute");
  const minsRemaining = minsDiff % 60;
  const minsToHours = +(minsRemaining / 60).toFixed(2);

  return hoursDiff + minsToHours;
}

export function getEventPositionFromTime(startTime: string, endTime: string) {
  const startDate = new Date("1-1-2025 " + startTime);
  const endDate = new Date("1-1-2025 " + endTime);

  const duration = getPercentageFromTime(startDate, endDate);

  const startDateStartOfTheDay = new Date(startDate);
  startDateStartOfTheDay.setHours(0, 0);
  const topInset = getPercentageFromTime(startDateStartOfTheDay, startDate);

  return {
    duration,
    topInset,
  };
}
