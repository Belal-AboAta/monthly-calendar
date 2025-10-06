import * as React from "react";
import { useEffect, useState } from "react";

import { CalendarEvent } from "@/components/CalendarEvents/CalendarEvent";
import { CalendarHeader } from "@/components/CalendarHeader";
import { DayTimes } from "@/components/DayTimes";
import { DayTimesBlocks } from "@/components/DayTimesBlocks";
import { DeleteCalendarEventDailog } from "@/components/DeleteCalendarEventDialog";
import { EventFormDialog } from "@/components/EventFromDialog";
import { useCalendarEventFlagContext } from "@/context/CalendarEventFlagContext";
import { useCurrentDay } from "@/hooks/useCurrentDay";
import { getEventPositionFromTime } from "@/lib/eventPosition";
import {
  getCalendarEventsFromLocalStorage,
  getDayTextFromDate,
} from "@/lib/utils";
import { useCalendarEventDialog } from "@/hooks/useCalendarEventDialog";

export const DayCalendarView: React.FC = () => {
  const { currentDay, onNext, onPrev, onToday } = useCurrentDay();
  const calendarText = getDayTextFromDate(currentDay);

  const { flag } = useCalendarEventFlagContext();

  const [calendarEvents, setCalendarEvents] = useState(
    getCalendarEventsFromLocalStorage(currentDay),
  );

  useEffect(() => {
    setCalendarEvents(getCalendarEventsFromLocalStorage(currentDay));
  }, [flag, currentDay]);

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
      <CalendarHeader
        calendarText={calendarText}
        onNext={onNext}
        onPrev={onPrev}
        onToday={onToday}
      />
      <div className="relative mt-8">
        <div className="flex gap-4 absolute inset-0">
          <DayTimes />
          <DayTimesBlocks />
        </div>

        {calendarEvents?.length &&
          calendarEvents.map((event) => {
            const { duration, topInset } = getEventPositionFromTime(
              event.startTime,
              event.endTime,
            );

            const height = duration * 96;
            const top = topInset * 96;
            return (
              <div
                className="absolute left-40 right-0"
                style={{ height: height, top: top }}
              >
                <CalendarEvent
                  key={event.id}
                  calendarEvent={event}
                  toggleDeleteCalendarEventDialog={
                    toggleDeleteCalendarEventDialog
                  }
                  toggleEditCalendarEventDialog={toggleEditCalendarEventDialog}
                  setEventId={setSelectedEventId}
                />
              </div>
            );
          })}
      </div>

      <DeleteCalendarEventDailog
        isOpen={isDeleteCalendarEventDailogOpen}
        onClose={() => toggleDeleteCalendarEventDialog(false)}
        date={currentDay}
        eventId={selectedEventId}
      />
      <EventFormDialog
        isOpen={isEditCalendarEventDialogOpen}
        date={currentDay}
        isEdit={true}
        onClose={() => toggleEditCalendarEventDialog(false)}
        eventId={selectedEventId}
      />
    </>
  );
};
