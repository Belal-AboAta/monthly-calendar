import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { MonthNavigationProps } from "@/types/monthNavigationTypes";
import { Button } from "../ui/button";

export const MonthNavigation: React.FC<MonthNavigationProps> = ({
  onNext,
  onPrev,
}) => {
  return (
    <div className="inline-flex justify-center items-center gap-3">
      <Button onClick={onPrev}>
        <ChevronLeft />
      </Button>
      <Button onClick={onNext}>
        <ChevronRight />
      </Button>
    </div>
  );
};
