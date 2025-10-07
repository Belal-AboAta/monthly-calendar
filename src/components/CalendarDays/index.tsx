import * as React from "react";

import type { CalenderDaysProps } from "@/types/CalendarDaysTypes";
import { EventFormDialog } from "../EventFromDialog";
import { CalendarDay } from "./CalendarDay";
import { useCalendarEventDialog } from "@/hooks/useCalendarEventDialog";

export const CalendarDays: React.FC<CalenderDaysProps> = ({ calendarDays }) => {
  const {
    isEventDialogOpen,
    toggleEventDialog,
    selectedDate,
    setSelectedDate,
  } = useCalendarEventDialog();
  return (
    <>
      <div className="w-full grid lg:grid-cols-4 lg:grid-rows-6 2xl:grid-cols-7 2xl:grid-rows-6 justify-center items-center mt-8 2xl:mt-0">
        {calendarDays.map((calendarDay) => (
          <CalendarDay
            key={calendarDay.date.getTime()}
            day={calendarDay}
            openDialog={toggleEventDialog}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </div>
      <EventFormDialog
        isOpen={isEventDialogOpen}
        date={selectedDate}
        isEdit={false}
        onClose={() => toggleEventDialog(false)}
      />
    </>
  );
};
