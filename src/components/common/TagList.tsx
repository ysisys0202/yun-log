import { css } from "@emotion/react";
import React from "react";
type Props = {
  align?: "start" | "center" | "end" | "between";
  children: React.ReactNode;
  className?: string;
};
const TagList = ({ align = "start", children, className = "" }: Props) => {
  return (
    <ul css={S} className={`${className} align-${align} `}>
      {children}
    </ul>
  );
};
const S = css`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  &.align-start {
    justify-content: start;
  }
  &.align-center {
    justify-content: center;
  }
  &.align-end {
    justify-content: end;
  }
`;
export default TagList;
