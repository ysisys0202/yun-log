import { css } from "@emotion/react";

type Props = {
  size: "sm" | "md" | "lg";
  backgroundColor: string;
};

const Spacing = ({ size = "sm", backgroundColor = "transparent" }: Props) => {
  const dynamicStyle = [
    style.size[size],
    css`
      background-color: ${backgroundColor};
    `,
  ];
  return <div css={dynamicStyle} aria-hidden="false"></div>;
};

const style = {
  size: {
    xs: css`
      height: 4px;
    `,
    sm: css`
      height: 8px;
    `,
    md: css`
      height: 16px;
    `,
    lg: css`
      height: 24px;
    `,
    xl: css`
      height: 32px;
    `,
  },
};

export default Spacing;
