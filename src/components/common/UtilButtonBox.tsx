import { media } from "@/constants/breakPoints";
import {
  contentSideSpacingMb,
  contentSideSpacingPc,
  gnbHeightMb,
  gnbHeightPc,
} from "@/constants/size";
import { css } from "@emotion/react";
import React from "react";
import ColorModeButton from "./ColorModeButton";
import ContactButton from "./ContactButton";

const UtilButtonBox = () => {
  return (
    <div css={S.self}>
      <ColorModeButton />
      <ContactButton />
    </div>
  );
};

const S = {
  self: css`
    display: flex;
    align-items: center;
    gap: 12px;
    position: fixed;
    top: 0;
    right: ${contentSideSpacingMb}px;
    z-index: 100;
    height: ${gnbHeightMb}px;
    @media ${media.md} {
      right: ${contentSideSpacingPc};
      height: ${gnbHeightPc}px;
    }
  `,
};
export default UtilButtonBox;
