import { colors } from "@/constants/colors";
import { css } from "@emotion/react";
import React from "react";
import Typography from "../common/Typography";
type Props = { children: React.ReactNode; className?: string };
const SectionTitle = ({ children, className }: Props) => {
  return (
    <Typography
      variant="h1"
      element="h2"
      color={colors.white}
      {...(className && { className: className })}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
