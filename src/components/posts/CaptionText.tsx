import React from "react";
import Typography from "../common/Typography";
import { colorVars } from "@/constants/cssVariables";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const CaptionText = ({ children, className }: Props) => {
  return (
    <Typography
      variant="subtitle1"
      element="p"
      color={colorVars.tertiary}
      {...(className && { className: className })}
    >
      {children}
    </Typography>
  );
};

export default CaptionText;
