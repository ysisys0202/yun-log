import { css } from "@emotion/react";
import React from "react";

const Test = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => {
  return (
    <div css={S} style={{ color }}>
      {children}
    </div>
  );
};
const S = css`
  font-size: 18px;
`;
export default Test;
