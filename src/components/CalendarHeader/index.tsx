import * as React from "react";

import type { CalendarHeaderProps } from "@/types/CalendarHeaderTypes";
import { CalendarNavigation } from "../CalendarNavigation";
import { TextComponent } from "../TextComponent";
import { Button } from "../ui/button";

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  calendarText,
  onNext,
  onPrev,
  onToday,
}) => {
  return (
    <div className="flex justify-between items-center gap-4">
      <>
        <TextComponent
          text={calendarText}
          className="text-xs md:text-base lg:text-lg"
        />
      </>

      <div className="flex justify-between items-center max-w-2xl gap-2">
        <Button
          onClick={onToday}
          size="sm"
          className="text-xs md:text-base lg:text-lg"
        >
          Today
        </Button>
        <CalendarNavigation onNext={onNext} onPrev={onPrev} />
      </div>
    </div>
  );
};
