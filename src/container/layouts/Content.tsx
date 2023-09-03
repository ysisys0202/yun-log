import { css } from "@emotion/react";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const Content = ({ children }: Props) => {
  return <main css={S}>{children}</main>;
};
const S = css`
  width: 80%;
  margin-top: 50px;
  margin-left: auto;
`;
export default Content;
