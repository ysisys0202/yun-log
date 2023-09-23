import { css } from "@emotion/react";
import React from "react";
import Typography from "./Typography";
import { colors } from "@/constants/colors";
type Props = {
  color?: string;
  label: string | React.ReactNode;
  value: string | React.ReactNode;
  className?: string;
};
const DefinitionItem = ({
  color = colors.white,
  label,
  value,
  className = "",
}: Props) => {
  return (
    <div {...(className && { className: className })} css={S}>
      <Typography
        variant="body2"
        element="span"
        color={color}
        className="label"
      >
        {label}
      </Typography>
      <Typography
        variant="body2"
        element="span"
        color={color}
        className="value"
      >
        {value}
      </Typography>
    </div>
  );
};
const S = css`
  .label {
    &::after {
      content: ":";
      margin: 0 4px;
    }
  }
`;
export default DefinitionItem;
