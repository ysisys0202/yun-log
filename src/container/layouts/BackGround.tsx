import { media } from "@/constants/breakPoints";
import useColorMode from "@/hooks/useColorMode";
import { colorModeState } from "@/store/colorMode";
import {
  ColorSematicType,
  ColorSetType,
  ColorThemeType,
} from "@/types/colorTheme";
import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";

const BackGround = () => {
  const c = useColorMode();
  const colorMode = useRecoilValue(colorModeState);
  return (
    <div
      css={S}
      style={{
        backgroundColor: c.background_global,
        backgroundImage: `url(/images/common/grid_line_${colorMode}.svg)`,
      }}
    ></div>
  );
};
const S = css`
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100dvh;
  background-size: 8.3333%;
  background-position: center 50px;
  @media ${media.md} {
    width: 80%;
    max-width: calc(100% - 220px);
  }
`;
const S1 = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100dvh;
  /* https://uigradients.com/#Summer */
  background: #22c1c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #fdbb2d,
    #22c1c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #fdbb2d,
    #22c1c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
export default BackGround;
