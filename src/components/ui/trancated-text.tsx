import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ITruncatedTextProps {
  text: string | number;
  maxLength?: number;
}

export const TruncatedText: React.FC<
  ITruncatedTextProps & React.ComponentProps<"div">
> = ({ text, maxLength = 30, className, children }) => {
  const isTruncated = text.toString().length > maxLength;
  const truncatedText = isTruncated
    ? `${text.toString().substring(0, maxLength)}...`
    : text;

  console.log(text, isTruncated, text.toString().substring(0, maxLength));

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className={cn("truncate", className)}>
          {children || truncatedText}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};
