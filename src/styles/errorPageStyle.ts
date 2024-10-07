import { media } from "@/constants/breakPoints";
import { css } from "@emotion/react";

export const errorPageStyle = {
  self: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  image: css`
    margin-top: 120px;
    width: auto;
    height: 90px;
    @media ${media.md} {
      margin-top: 180px;
      width: 222px;
    }
  `,
  title: css`
    margin-top: 48px;
    text-align: center;
    @media ${media.md} {
      margin-top: 84px;
    }
  `,
  button: css`
    margin-top: 36px;
    @media ${media.md} {
      margin-top: 56px;
    }
  `,
};
