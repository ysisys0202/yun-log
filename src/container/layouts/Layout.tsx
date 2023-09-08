import React from "react";
import { SerializedStyles, css } from "@emotion/react";

const Layout = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style: SerializedStyles;
}) => {
  return <div css={style}>{children}</div>;
};
export default Layout;
