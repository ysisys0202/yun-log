import React from "react";
import Typography from "../common/Typography";
import useColorMode from "@/hooks/useColorMode";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const CaptionText = ({ children, className }: Props) => {
  const c = useColorMode();
  return (
    <Typography
      variant="subtitle1"
      element="p"
      color={c.tertiary}
      {...(className && { className: className })}
    >
      {children}
    </Typography>
  );
};

export default CaptionText;
