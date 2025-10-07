import { PencilIcon, TrashIcon } from "lucide-react";
import * as React from "react";

import type { CalendarEventProps } from "@/types/CalendarEventsTypes";
import { Button } from "../ui/button";
import { TextComponent } from "../TextComponent";

export const CalendarEvent: React.FC<CalendarEventProps> = ({
  calendarEvent,
  toggleDeleteCalendarEventDialog,
  toggleEditCalendarEventDialog,
  setEventId,
}) => {
  const toggleDeleteDialog = () => {
    toggleDeleteCalendarEventDialog(true);
    if (calendarEvent.id) {
      setEventId(calendarEvent.id);
    }
  };

  const toggleEditDialog = () => {
    toggleEditCalendarEventDialog(true);
    if (calendarEvent.id) {
      setEventId(calendarEvent.id);
    }
  };
  return (
    <div className="bg-gray-500 flex flex-row gap-4 items-center justify-between overflow-hidden px-2 2xl:px-4 py-2 2xl:py-8 min-h-10 rounded-md h-full max-w-full">
      <div>
        <TextComponent
          text={calendarEvent.name}
          className="text-xs"
          isTrancated={true}
          maxLength={9}
        />
      </div>
      <div className="flex flex-row gap-2">
        <Button variant="default" size="xs" onClick={toggleEditDialog}>
          <PencilIcon />
        </Button>

        <Button variant="destructive" size="xs" onClick={toggleDeleteDialog}>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};
