import * as React from "react";

export const DayTimesBlocks: React.FC = () => {
  const BLOCKS = Array.from({ length: 24 }, (_, index) => index);

  return (
    <div className="grid grid-rows-[24] w-full">
      {BLOCKS.map((block) => (
        <div key={block} className="h-24 border border-gray-500 w-full"></div>
      ))}
    </div>
  );
};
