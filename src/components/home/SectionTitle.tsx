import { colors, gray } from "@/constants/colors";
import { css } from "@emotion/react";
import React from "react";
import Typography from "../common/Typography";
type Props = { children: React.ReactNode; className?: string };
const SectionTitle = ({ children, className }: Props) => {
  return (
    <Typography
      variant="h3"
      element="h2"
      {...(className && { className: className })}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
