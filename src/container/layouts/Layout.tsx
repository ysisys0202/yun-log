import React from "react";
import { SerializedStyles, css } from "@emotion/react";

const Layout = ({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style: SerializedStyles;
  className: string;
}) => {
  return (
    <div className={className} css={style}>
      {children}
    </div>
  );
};
export default Layout;
