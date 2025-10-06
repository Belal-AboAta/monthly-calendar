import { useState } from "react";

export const useCurrentMonth = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const onNext = () => {
    setCurrentMonth(
      (oldMonth) => new Date(oldMonth.getFullYear(), oldMonth.getMonth() + 1),
    );
  };

  const onPrev = () => {
    setCurrentMonth(
      (oldMonth) => new Date(oldMonth.getFullYear(), oldMonth.getMonth() - 1),
    );
  };

  const onToday = () => {
    const today = new Date();
    setCurrentMonth(today);
  };

  return {
    currentMonth,
    onNext,
    onPrev,
    onToday,
  };
};
