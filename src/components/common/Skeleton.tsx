import { gray } from "@/constants/colors";
import { colorVars } from "@/constants/cssVariables";
import { SerializedStyles, css, keyframes } from "@emotion/react";
import { HTMLAttributes } from "react";

type Props = {
  width?: string;
  height?: string;
  borderColor?: string;
  propsCss?: SerializedStyles;
} & HTMLAttributes<HTMLElement>;

const Skeleton = ({
  width = "100%",
  height = "100%",
  borderColor = "transparent",
  propsCss,
  ...props
}: Props) => {
  const styles = [
    S.self,
    css`
      width: ${width};
      height: ${height};
      border-color: ${borderColor};
    `,
  ];
  propsCss && styles.push(propsCss);
  return <div css={styles} aria-hidden="true" {...props}></div>;
};

const skeletonAnimation = keyframes`
     0% {
        background-position: 100% 0;
      }
      100% {
        background-position: -100% 0;
   
      }
`;

const S = {
  self: css`
    background: linear-gradient(
      -75deg,
      ${colorVars.skeletonSecondary} 25%,
      ${colorVars.skeletonPrimary} 50%,
      ${colorVars.skeletonSecondary} 75%
    );
    background-size: 200% 100%;

    animation: ${skeletonAnimation} 1000ms linear infinite forwards;
  `,
};

export default Skeleton;
