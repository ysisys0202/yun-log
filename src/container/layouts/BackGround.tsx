import { media } from "@/constants/breakPoints";
import { css } from "@emotion/react";

const BackGround = () => {
  return <div css={S}></div>;
};
const S = css`
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-image: url(/images/common/grid_line.svg);
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
