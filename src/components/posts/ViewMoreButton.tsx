import { colors } from "@/constants/colors";
import { css } from "@emotion/react";
import React from "react";
import IconArrow from "public/icons/arrow.svg";
type Props = { text?: string; icon?: React.ReactNode; className?: string };

const ViewMoreButton = ({
  text = "더 알아보기",
  icon = <IconArrow width={24} height={24} stroke={colors.white} />,
  className = "",
}: Props) => {
  return (
    <div css={S} {...(className && { className: className })}>
      {
        <>
          <span>{text}</span>
          {icon}
        </>
      }
    </div>
  );
};
const S = css`
  display: flex;
  align-items: center;
  color: ${colors.white};
  font-size: 18px;
  line-height: 1.4;
  opacity: 0.8;
`;
export default ViewMoreButton;
