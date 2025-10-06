import { PencilIcon, TrashIcon } from "lucide-react";
import * as React from "react";

import type { CalendarEventProps } from "@/types/CalendarEventsTypes";
import { Button } from "../ui/button";

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
    <div className="bg-gray-500 flex flex-row items-center justify-between overflow-hidden px-4 py-8 min-h-10 rounded-md h-full">
      <div>
        <p>{calendarEvent.name}</p>
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
