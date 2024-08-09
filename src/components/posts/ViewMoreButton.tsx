import { css } from "@emotion/react";
import React from "react";
import IconArrow from "public/icons/arrow.svg";
import Typography from "../common/Typography";
import { colorVars } from "@/constants/cssVariables";
type Props = { text?: string; icon?: React.ReactNode; className?: string };

const ViewMoreButton = ({ text = "더보기", icon, className = "" }: Props) => {
  if (!icon) {
    icon = <IconArrow width={16} height={16} stroke={colorVars.primary} />;
  }
  return (
    <div css={S} {...(className && { className: className })}>
      <Typography
        variant="body1"
        element="span"
        color={colorVars.primary}
        className="!font-normal"
      >
        {text}
      </Typography>
      {icon}
    </div>
  );
};
const S = css`
  display: flex;
  align-items: center;
  opacity: 0.8;
`;
export default ViewMoreButton;
