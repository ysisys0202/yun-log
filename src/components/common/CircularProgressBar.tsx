import { css } from "@emotion/react";
import { MotionValue, motion } from "framer-motion";
import React from "react";
type Props = {
  className?: string;
  progressPer: number | MotionValue<number>;
  baseColor?: string;
  progressColor?: string;
  size?: number;
  borderWidth?: number;
};
const CircularProgressBar = ({
  className,
  progressPer,
  baseColor,
  progressColor,
  borderWidth = 4,
  size,
}: Props) => {
  return (
    <div css={S} {...(className && { className: className })}>
      <svg
        className="circular-progress-bar"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{ strokeWidth: `${borderWidth}px` }}
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="base-line"
          style={{ stroke: `${baseColor}` }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="progress-line"
          style={{ pathLength: progressPer, stroke: `${progressColor}` }}
        />
      </svg>
    </div>
  );
};
const S = css`
  svg {
    margin: 0 auto;
    fill: transparent;
    transform: rotate(270deg);
  }
`;

export default CircularProgressBar;
