import * as React from "react";

import { CalendarHeader } from "@/components/CalendarHeader";
import { useCurrentYear } from "@/hooks/useCurrentYear";
import { getYearTextFromDate } from "@/lib/utils";
import { YearViewMonth } from "./YearViewMonth";

export const YearCalendarView: React.FC = () => {
  const { currentYear, onNext, onPrev, onToday } = useCurrentYear();

  const calendarText = getYearTextFromDate(currentYear);
  return (
    <>
      <CalendarHeader
        calendarText={calendarText}
        onNext={onNext}
        onPrev={onPrev}
        onToday={onToday}
      />
      <div className="grid grid-rows-3 grid-cols-4 gap-16 mt-8">
        {Array.from({ length: 12 }, (_, i) => i).map((month) => {
          return (
            <YearViewMonth
              key={month}
              currentYear={currentYear}
              monthNumber={month}
            />
          );
        })}
      </div>
    </>
  );
};
