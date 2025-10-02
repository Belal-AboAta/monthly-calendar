import * as React from "react";

import { getMonthTextFromDate } from "@/lib/utils";
import type { CalendarHeaderProps } from "@/types/CalendarHeaderTypes";
import { TextComponent } from "../TextComponent";
import { Button } from "../ui/button";
import { MonthNavigation } from "../MonthNavigation";

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  onNext,
  onPrev,
  onToday,
}) => {
  const currentMonthText = getMonthTextFromDate(currentMonth);

  return (
    <div className="flex justify-between items-center">
      <>
        <TextComponent text={currentMonthText} className="min-w-2xl" />
      </>

      <div className="flex justify-between items-center max-w-2xl gap-2">
        <Button onClick={onToday}>
          {/* TODO: use local if needed */}
          Today
        </Button>
        <MonthNavigation onNext={onNext} onPrev={onPrev} />
      </div>
    </div>
  );
};
