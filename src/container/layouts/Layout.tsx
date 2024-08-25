import React from "react";
import { SerializedStyles, css } from "@emotion/react";

const Layout = ({
  children,
  propsCss,
  className,
}: {
  children: React.ReactNode;
  propsCss?: SerializedStyles;
  className?: string;
}) => {
  return (
    <div className={className} css={propsCss}>
      {children}
    </div>
  );
};
export default Layout;
