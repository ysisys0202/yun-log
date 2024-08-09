import React from "react";
import { colorVars } from "@/constants/cssVariables";
import Typography from "@/components/common/Typography";

type Props = { children: React.ReactNode; className?: string };
const SectionTitle = ({ children, className }: Props) => {
  return (
    <Typography
      variant="h3"
      element="h2"
      color={colorVars.primary}
      {...(className && { className: className })}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
