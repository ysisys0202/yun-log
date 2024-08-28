import { Global, css } from "@emotion/react";
import { media } from "@/constants/breakPoints";

const BackGround = () => {
  return (
    <div className="global-background" css={[S]}>
      <Global
        styles={css`
          :root {
            --background-image: url(/images/common/grid_line_light.svg);
            .dark {
              --background-image: url(/images/common/grid_line_dark.svg);
            }
          }
        `}
      />
    </div>
  );
};
const S = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100dvh;
  background-size: 8.3333%;
  background-position: center 50px;
  background-image: var(--background-image);
  pointer-events: none;
  @media ${media.md} {
    width: 80%;
    max-width: calc(100% - 220px);
  }
`;

export default BackGround;
