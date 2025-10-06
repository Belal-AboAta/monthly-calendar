import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarViewEnum,
  type SwitchCalendarViewProps,
} from "@/types/SwitchCalendarViewTypes";

export const SwitchCalendarView: React.FC<SwitchCalendarViewProps> = ({
  onValueChange,
}) => {
  return (
    <Select defaultValue={CalendarViewEnum.Month} onValueChange={onValueChange}>
      <SelectTrigger className="w-[100px] capitalize ml-auto mb-8">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="capitalize">
        <SelectItem value={CalendarViewEnum.Day}>
          {CalendarViewEnum.Day}
        </SelectItem>
        <SelectItem value={CalendarViewEnum.Week}>
          {CalendarViewEnum.Week}
        </SelectItem>
        <SelectItem value={CalendarViewEnum.Month}>
          {CalendarViewEnum.Month}
        </SelectItem>
        <SelectItem value={CalendarViewEnum.Year}>
          {CalendarViewEnum.Year}
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
