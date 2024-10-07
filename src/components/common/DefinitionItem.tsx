import React from "react";
import { SerializedStyles, css } from "@emotion/react";
import { colors } from "@/constants/colors";
import Typography from "@/components/common/Typography";

type Props = {
  color?: string;
  label: string | React.ReactNode;
  value: string | React.ReactNode;
  className?: string;
  css?: SerializedStyles;
};
const DefinitionItem = ({
  color = colors.white,
  label,
  value,
  className = "",
  css,
}: Props) => {
  return (
    <div {...(className && { className: className })} css={css}>
      <Typography variant="body2" as="span" color={color} css={S.label}>
        {label}
      </Typography>
      <Typography variant="body2" as="span" color={color} className="value">
        {value}
      </Typography>
    </div>
  );
};
const S = {
  label: css`
    &::after {
      content: ":";
      margin: 0 4px;
    }
  `,
};
export default DefinitionItem;
