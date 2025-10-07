import { useState } from "react";

export const useCurrentYear = () => {
  const [currentYear, setCurrentYear] = useState<Date>(new Date());
  const onNext = () => {
    setCurrentYear(
      (oldYear) => new Date((oldYear.getFullYear() + 1).toString()),
    );
  };

  const onPrev = () => {
    setCurrentYear(
      (oldYear) => new Date((oldYear.getFullYear() - 1).toString()),
    );
  };

  const onToday = () => {
    const today = new Date();
    setCurrentYear(today);
  };

  return {
    currentYear,
    onNext,
    onPrev,
    onToday,
  };
};
