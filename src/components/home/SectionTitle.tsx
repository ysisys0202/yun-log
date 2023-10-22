import { colors, gray } from "@/constants/colors";
import { css } from "@emotion/react";
import React from "react";
import Typography from "../common/Typography";
import useColorMode from "@/hooks/useColorMode";
type Props = { children: React.ReactNode; className?: string };
const SectionTitle = ({ children, className }: Props) => {
  const c = useColorMode();
  return (
    <Typography
      variant="h3"
      element="h2"
      color={c.primary}
      {...(className && { className: className })}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
