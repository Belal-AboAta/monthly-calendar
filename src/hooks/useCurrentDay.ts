import { useState } from "react";

export const useCurrentDay = () => {
  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const onNext = () => {
    setCurrentDay(
      (oldMonth) =>
        new Date(
          oldMonth.getFullYear(),
          oldMonth.getMonth(),
          oldMonth.getDate() + 1,
        ),
    );
  };

  const onPrev = () => {
    setCurrentDay(
      (oldMonth) =>
        new Date(
          oldMonth.getFullYear(),
          oldMonth.getMonth(),
          oldMonth.getDate() - 1,
        ),
    );
  };

  const onToday = () => {
    const today = new Date();
    setCurrentDay(today);
  };

  return {
    currentDay,
    onNext,
    onPrev,
    onToday,
  };
};
