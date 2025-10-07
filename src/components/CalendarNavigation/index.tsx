import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

import type { CalendarNavigationProps } from "@/types/calendarNavigationTypes";
import { Button } from "../ui/button";

export const CalendarNavigation: React.FC<CalendarNavigationProps> = ({
  onNext,
  onPrev,
}) => {
  return (
    <div className="inline-flex justify-center items-center gap-3">
      <Button onClick={onPrev} size="sm">
        <ChevronLeft />
      </Button>
      <Button onClick={onNext} size="sm">
        <ChevronRight />
      </Button>
    </div>
  );
};
