import { colors } from "@/constants/colors";
import { css } from "@emotion/react";
import React from "react";
type Props = { children: React.ReactNode; className?: string };
const SectionTitle = ({ children, className }: Props) => {
  return (
    <h2 css={S} {...(className && { className: className })}>
      {children}
    </h2>
  );
};
const S = css`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.white};
`;
export default SectionTitle;
