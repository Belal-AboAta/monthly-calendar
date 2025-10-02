import { object, string, ref } from "yup";

export const eventSchema = object({
  name: string().required("The name is required"),
  startTime: string().required("The Start Time is Requried"),
  endTime: string()
    .required("The End Time is Required")
    .test(
      "is-greater-than-start-time",
      "End Time > than start Time",
      function (endDate) {
        return endDate > (this.resolve(ref("startTime")) as string);
      },
    ),
});
