import * as React from "react";

import { useCalendarEventDialog } from "@/hooks/useCalendarEventDialog";
import type { CalendarEventsProps } from "@/types/CalendarEventsTypes";
import { DeleteCalendarEventDailog } from "../DeleteCalendarEventDialog";
import { EventFormDialog } from "../EventFromDialog";
import { CalendarEvent } from "./CalendarEvent";

export const CalendarEvents: React.FC<CalendarEventsProps> = ({
  calendarEvents,
  date,
}) => {
  const {
    isDeleteCalendarEventDailogOpen,
    toggleDeleteCalendarEventDialog,
    isEditCalendarEventDialogOpen,
    toggleEditCalendarEventDialog,
    selectedEventId,
    setSelectedEventId,
  } = useCalendarEventDialog();

  return (
    <>
      <div className="min-h-4/5 flex flex-col gap-2 overflow-y-auto mt-2 px-2">
        {calendarEvents.length &&
          calendarEvents.map((event) => (
            <CalendarEvent
              key={event.id}
              calendarEvent={event}
              toggleDeleteCalendarEventDialog={toggleDeleteCalendarEventDialog}
              toggleEditCalendarEventDialog={toggleEditCalendarEventDialog}
              setEventId={setSelectedEventId}
            />
          ))}
      </div>
      <DeleteCalendarEventDailog
        isOpen={isDeleteCalendarEventDailogOpen}
        onClose={() => toggleDeleteCalendarEventDialog(false)}
        date={date}
        eventId={selectedEventId}
      />
      <EventFormDialog
        isOpen={isEditCalendarEventDialogOpen}
        date={date}
        isEdit={true}
        onClose={() => toggleEditCalendarEventDialog(false)}
        eventId={selectedEventId}
      />
    </>
  );
};
