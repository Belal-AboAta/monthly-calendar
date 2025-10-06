import { useState } from "react";

export const useCalendarEventDialog = () => {
  const [isEventDialogOpen, toggleEventDialog] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [isDeleteCalendarEventDailogOpen, toggleDeleteCalendarEventDialog] =
    useState<boolean>(false);

  const [isEditCalendarEventDialogOpen, toggleEditCalendarEventDialog] =
    useState<boolean>(false);

  const [selectedEventId, setSelectedEventId] = useState("");

  return {
    isEventDialogOpen,
    toggleEventDialog,
    selectedDate,
    setSelectedDate,
    isDeleteCalendarEventDailogOpen,
    toggleDeleteCalendarEventDialog,
    isEditCalendarEventDialogOpen,
    toggleEditCalendarEventDialog,
    selectedEventId,
    setSelectedEventId,
  };
};
