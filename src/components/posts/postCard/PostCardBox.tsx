import { SerializedStyles, css } from "@emotion/react";
import { green } from "@/constants/colors";
import { HTMLAttributes } from "react";
import { colorVars } from "@/constants/cssVariables";

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
    border: 1px solid ${colorVars.border};
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
      background-color: transparent;
      transition: background-color 200ms ease-in-out;
    }
    &:hover {
      &::after {
        background-color: ${green[100]};
      }
      .thumbnail {
        img {
          transform: scale(1.08);
        }
      }
      .view-more-button {
        svg {
          transform: translateX(4px);
        }
      }
    }
  `,
};
export default PostCardBox;
