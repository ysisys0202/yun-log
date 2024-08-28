import React from "react";
import GlobalHeader from "./GlobalHeader";
import UtilButtonBox from "@/components/common/UtilButtonBox";

import useMediaQuery from "@/hooks/useMediaQuery";

import { gnbSideSpacing } from "@/constants/size";
import BackGround from "@/container/layouts/BackGround";
import Content from "@/container/layouts/Content";
import { media } from "@/constants/breakPoints";
import { css } from "@emotion/react";
import GlobalFooter from "./GlobalFooter";

type Props = {
  headerHide?: boolean;
  children: React.ReactNode;
};

const AppContainer = ({ headerHide, children }: Props) => {
  return (
    <div css={S.self}>
      <GlobalHeader isHide={headerHide} />
      <UtilButtonBox />
      <BackGround />
      <Content>{children}</Content>
      <GlobalFooter />
    </div>
  );
};
const S = {
  self: css`
    width: 100%;
    @media ${media.md} {
      margin-left: auto;
      width: 80%;
      max-width: calc(100% - 220px);
    }
  `,
};

export default AppContainer;
