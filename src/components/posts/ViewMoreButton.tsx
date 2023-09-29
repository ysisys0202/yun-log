import { colors } from "@/constants/colors";
import { css } from "@emotion/react";
import React from "react";
import IconArrow from "public/icons/arrow.svg";
import Typography from "../common/Typography";
type Props = { text?: string; icon?: React.ReactNode; className?: string };

const ViewMoreButton = ({
  text = "더 알아보기",
  icon = <IconArrow width={24} height={24} stroke={colors.white} />,
  className = "",
}: Props) => {
  return (
    <div css={S} {...(className && { className: className })}>
      <Typography
        variant="subtitle1"
        element="span"
        color={colors.white}
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
