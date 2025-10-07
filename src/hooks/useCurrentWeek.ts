import { useState } from "react";

export const useCurrentWeek = () => {
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date());
  const onNext = () => {
    setCurrentWeek(
      (oldMonth) =>
        new Date(
          oldMonth.getFullYear(),
          oldMonth.getMonth(),
          oldMonth.getDate() + 7,
        ),
    );
  };

  const onPrev = () => {
    setCurrentWeek(
      (oldMonth) =>
        new Date(
          oldMonth.getFullYear(),
          oldMonth.getMonth(),
          oldMonth.getDate() - 7,
        ),
    );
  };

  const onToday = () => {
    const today = new Date();
    setCurrentWeek(today);
  };

  return {
    currentWeek,
    onNext,
    onPrev,
    onToday,
  };
};
