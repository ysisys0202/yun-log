import { gnbHeightMb } from "@/constants/size";
import { css } from "@emotion/react";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const Content = ({ children }: Props) => {
  return <main css={contentStyle.self}>{children}</main>;
};

const contentStyle = {
  self: css`
    min-height: calc(100vh - ${gnbHeightMb}px);
  `,
};
export default Content;
