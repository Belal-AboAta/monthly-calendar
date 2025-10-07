import { useState } from "react";

export const useCurrentWeek = () => {
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date());
  const onNext = () => {
    setCurrentWeek(
      (oldWeek) =>
        new Date(
          oldWeek.getFullYear(),
          oldWeek.getMonth(),
          oldWeek.getDate() + 7,
        ),
    );
  };

  const onPrev = () => {
    setCurrentWeek(
      (oldWeek) =>
        new Date(
          oldWeek.getFullYear(),
          oldWeek.getMonth(),
          oldWeek.getDate() - 7,
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
