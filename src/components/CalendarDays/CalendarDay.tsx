import * as React from "react";
import { clsx } from "clsx";

import type { CalendarDayPropss } from "@/types/CalendarDaysTypes";
import { TextComponent } from "../TextComponent";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

export const CalendarDay: React.FC<CalendarDayPropss> = ({ day }) => {
  return (
    <div
      className={clsx(
        "h-56 flex items-center justify-center w-full border border-gray-500 relative",
        day.currentDay
          ? "bg-green-300"
          : day.currentMonth
            ? "bg-gray-700"
            : "bg-gray-400",
      )}
    >
      <Button size="sm" className="absolute top-2 right-2">
        <PlusIcon />
      </Button>
      <TextComponent
        text={day.number}
        className="font-bold text-gray-50 text-center"
      />
    </div>
  );
};
