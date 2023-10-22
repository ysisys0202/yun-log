import React, { useEffect } from "react";
import { SerializedStyles, css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { colorModeState, value as colorModeValue } from "@/store/colorMode";

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
