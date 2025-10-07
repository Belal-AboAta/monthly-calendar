import * as React from "react";

import { TextComponent } from "../TextComponent";

export const DayTimes: React.FC = () => {
  const DAY_TIMES = [
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];

  return (
    <div className="w-16 md:w-32">
      {DAY_TIMES.map((time) => (
        <TextComponent
          key={time}
          text={time}
          className="h-24 flex items-end justify-center p-0 m-0 leading-0 text-xs md:text-base lg:text-lg"
        />
      ))}
    </div>
  );
};
