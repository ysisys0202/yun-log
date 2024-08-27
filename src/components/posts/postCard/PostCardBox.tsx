import { SerializedStyles, css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { colorVars } from "@/constants/cssVariables";
import { media } from "@/constants/breakPoints";

type Props = {
  children: React.ReactNode;
  propsCss?: SerializedStyles;
} & HTMLAttributes<HTMLElement>;

const PostCardBox = ({ children, propsCss, ...rest }: Props) => {
  const styles = [S.self];
  propsCss && styles.push(propsCss);

  return (
    <article css={[styles]} {...rest}>
      {children}
    </article>
  );
};
const S = {
  self: css`
    position: relative;
    background-color: ${colorVars.backgroundGlobal};
    border: 1px solid ${colorVars.tertiary};
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      background-color: transparent;
      transition: background-color 200ms ease-in-out;
      @media ${media.md} {
        width: 16px;
        height: 16px;
      }
    }

    &:hover {
      &::after {
        background-color: ${colorVars.secondary};
      }
      .post-card-title {
        span {
          &::after {
            left: 0;
            right: auto;
            width: 100%;
          }
        }
      }
      .thumbnail {
        img {
          transform: scale(1.08);
        }
      }
    }
  `,
};
export default PostCardBox;
