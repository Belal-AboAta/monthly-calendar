import * as React from "react";

import type { TextComponentProps } from "@/types/textComponentsTypes";

export const TextComponent: React.FC<
  TextComponentProps & React.ComponentProps<"p">
> = ({ text, ...props }) => <p {...props}>{text}</p>;
