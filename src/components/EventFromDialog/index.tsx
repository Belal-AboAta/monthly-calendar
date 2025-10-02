import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import type {
  EventFormDialogProps,
  CalendarEventType,
} from "@/types/EventFormTypes";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { eventSchema } from "@/validation/eventFormSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  cn,
  getCalendarEventByEventId,
  setCalendarEventInLocalStorage,
  updateCalendarEventInLocalStorage,
} from "@/lib/utils";
import { useCalendarEventFlagContext } from "@/context/CalendarEventFlagContext";
import { useEffect } from "react";

export const EventFormDialog: React.FC<EventFormDialogProps> = ({
  isOpen,
  onClose,
  date,
  isEdit,
  eventId,
}) => {
  const { toggleFlag } = useCalendarEventFlagContext();

  const formDefualtValus: CalendarEventType = {
    name: "",
    startTime: "",
    endTime: "",
  };
  const form = useForm<CalendarEventType>({
    resolver: yupResolver(eventSchema),
    defaultValues: {
      ...formDefualtValus,
    },
    mode: "onChange",
  });

  const resetForm = () => {
    form.reset({
      ...formDefualtValus,
    });
  };

  useEffect(() => {
    if (isEdit && eventId) {
      const event = getCalendarEventByEventId(date, eventId);
      if (event) {
        form.setValue("name", event.name);
        form.setValue("startTime", event.startTime);
        form.setValue("endTime", event.endTime);
      }
    }
  }, [isEdit, eventId, date, form]);

  const handleSubmit = () => {
    form.trigger(["name", "startTime", "endTime"]);
    if (form.formState.isValid) {
      const { name, startTime, endTime } = form.getValues();
      const event = {
        name,
        startTime,
        endTime,
      };
      if (isEdit && eventId) {
        updateCalendarEventInLocalStorage(date, eventId, event);
      } else {
        setCalendarEventInLocalStorage(date, event);
      }
      toggleFlag?.((flag) => !flag);
      resetForm();
      onClose?.();
    }
  };

  const onOpenChange = () => {
    onClose?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <Form {...form}>
        <DialogContent className="sm:max-w-[425px] bg-[#333]">
          <DialogHeader>
            <DialogTitle>Add Event</DialogTitle>
            <DialogDescription>
              Add your event name, start time, and end time
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field: formField, fieldState }) => (
                <FormItem className="flex-1">
                  <FormLabel
                    className={cn(
                      "text-sm font-medium",
                      fieldState.error && "text-destructive",
                    )}
                  >
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...formField}
                      type="text"
                      className={cn(
                        "ring-0 focus-visible:ring-0",
                        fieldState.error &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                    />
                  </FormControl>
                  {fieldState.error && <FormMessage className="text-xs" />}
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center gap-4">
              <div className="grid gap-3 w-1/2">
                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field: formField, fieldState }) => (
                    <FormItem className="flex-1">
                      <FormLabel
                        className={cn(
                          "text-sm font-medium",
                          fieldState.error && "text-destructive",
                        )}
                      >
                        Start Time
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...formField}
                          type="time"
                          className={cn(
                            "ring-0 focus-visible:ring-0",
                            fieldState.error &&
                              "border-destructive focus-visible:ring-destructive",
                          )}
                          value={formField.value}
                        />
                      </FormControl>
                      {fieldState.error && <FormMessage className="text-xs" />}
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3 w-1/2">
                <FormField
                  control={form.control}
                  name="endTime"
                  render={({ field: formField, fieldState }) => (
                    <FormItem className="flex-1">
                      <FormLabel
                        className={cn(
                          "text-sm font-medium",
                          fieldState.error && "text-destructive",
                        )}
                      >
                        End Time
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...formField}
                          type="time"
                          className={cn(
                            "ring-0 focus-visible:ring-0",
                            fieldState.error &&
                              "border-destructive focus-visible:ring-destructive",
                          )}
                          value={formField.value}
                        />
                      </FormControl>
                      {fieldState.error && <FormMessage className="text-xs" />}
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handleSubmit}>
              {isEdit ? "Update changes" : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Form>
    </Dialog>
  );
};
