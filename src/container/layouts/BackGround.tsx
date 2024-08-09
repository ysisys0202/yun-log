import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { media } from "@/constants/breakPoints";
import { colorModeState } from "@/store/colorMode";
import { colorVars } from "@/constants/cssVariables";

const BackGround = () => {
  const colorMode = useRecoilValue(colorModeState);
  const dynamicStyle = css`
    background-image: url(/images/common/grid_line_${colorMode}.svg);
  `;
  return <div className="hh" css={[S, dynamicStyle]}></div>;
};
const S = css`
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100dvh;
  background-color: ${colorVars.backgroundGlobal};
  background-size: 8.3333%;
  background-position: center 50px;
  @media ${media.md} {
    width: 80%;
    max-width: calc(100% - 220px);
  }
`;

export default BackGround;
