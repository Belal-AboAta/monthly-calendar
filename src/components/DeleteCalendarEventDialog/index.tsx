import * as React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useCalendarEventFlagContext } from "@/context/CalendarEventFlagContext";
import { deleteCalendarEventInLocalStorage } from "@/lib/utils";
import type { DeleteCalendarEventDailogProps } from "@/types/DeleteCalendarEventTypes";

export const DeleteCalendarEventDailog: React.FC<
  DeleteCalendarEventDailogProps
> = ({ isOpen, onClose, date, eventId }) => {
  const { toggleFlag } = useCalendarEventFlagContext();
  const onSubmit = () => {
    if (toggleFlag && date && eventId) {
      toggleFlag((flag) => !flag);
      deleteCalendarEventInLocalStorage(date, eventId);
    }
    onClose();
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-[#333]">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            event.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-destructive">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit}>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
