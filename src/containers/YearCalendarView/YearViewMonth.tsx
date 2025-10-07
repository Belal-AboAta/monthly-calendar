import clsx from "clsx";
import * as React from "react";

import { TextComponent } from "@/components/TextComponent";
import { useCalendarDays } from "@/hooks/useCalendarDays";
import { getMonthOnlyTextFromDate } from "@/lib/utils";
import type { YearViewMonthProps } from "@/types/yearCalendarViewTypes";

export const YearViewMonth: React.FC<YearViewMonthProps> = ({
  currentYear,
  monthNumber,
}) => {
  const monthDate = new Date(currentYear.getFullYear(), monthNumber);

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  const calendarDays = useCalendarDays(monthDate);
  const monthText = getMonthOnlyTextFromDate(monthDate);

  const borderTextShadow = [
    "-1px -1px 0 #000",
    "1px -1px 0 #000",
    "-1px 1px 0 #000",
    "1px 1px 0 #000",
    "-2px 0px 0 #000",
    "2px 0px 0 #000",
    "0px -2px 0 #000",
    "0px 2px 0 #000",
  ];

  return (
    <div>
      <TextComponent
        text={monthText}
        className="text-sm font-bold text-center text-gray-300"
      />
      <div className="grid grid-cols-7 gap-2 justify-center items-center my-4">
        {weekDays.map((day) => (
          <TextComponent
            key={day}
            text={day}
            className="font-bold text-gray-200 text-center text-sm"
            style={{
              textShadow: borderTextShadow.join(","),
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-7 grid-rows-6 gap-2 justify-center items-center">
        {calendarDays.map((day) => (
          <TextComponent
            text={day.number}
            className={clsx(
              "text-center text-xs p-3 rounded-full",
              day.currentMonth ? "text-gray-50" : "text-gray-500",
              day.currentMonth &&
                day.currentDay &&
                "bg-green-300 text-gray-800",
            )}
          />
        ))}
      </div>
    </div>
  );
};
