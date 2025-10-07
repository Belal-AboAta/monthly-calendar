import * as React from "react";
import { TextComponent } from "../TextComponent";

export const WeekDays: React.FC = () => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="hidden w-full xl:grid grid-cols-7 justify-center items-center my-8">
      {weekDays.map((day) => (
        <TextComponent
          key={day}
          text={day}
          className="font-bold text-gray-50 text-center"
        />
      ))}
    </div>
  );
};
