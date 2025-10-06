import * as React from "react";

import type { CalendarHeaderProps } from "@/types/CalendarHeaderTypes";
import { TextComponent } from "../TextComponent";
import { Button } from "../ui/button";
import { MonthNavigation } from "../MonthNavigation";

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  calendarText,
  onNext,
  onPrev,
  onToday,
}) => {
  return (
    <div className="flex justify-between items-center">
      <>
        <TextComponent text={calendarText} className="min-w-2xl" />
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
