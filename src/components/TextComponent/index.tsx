import * as React from "react";

import type { TextComponentProps } from "@/types/textComponentsTypes";
import { TruncatedText } from "@/components/ui/trancated-text";

export const TextComponent: React.FC<
  TextComponentProps & React.ComponentProps<"p">
> = ({ text, isTrancated = false, maxLength = 18, ...props }) =>
  isTrancated ? (
    <TruncatedText maxLength={maxLength} text={text} {...props} />
  ) : (
    <p {...props}>{text}</p>
  );
