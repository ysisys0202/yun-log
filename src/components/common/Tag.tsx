import React, { HTMLProps } from "react";
import { SerializedStyles, css } from "@emotion/react";
import { colors } from "@/constants/colors";
import { colorVars } from "@/constants/cssVariables";

type TagProps = {
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  size?: "sm" | "md";
  children: React.ReactNode;
  variant?: "contained" | "outlined";
  propsCss?: SerializedStyles;
} & Omit<HTMLProps<HTMLDivElement>, "size">;

const Tag = ({
  className = "",
  backgroundColor = "transparent",
  textColor = colorVars.primary,
  borderColor = colorVars.border,
  size = "md",
  children,
  variant = "contained",
  propsCss,
  ...rest
}: TagProps) => {
  const dynamicStyles = [
    css`
      background-color: ${backgroundColor};
      color: ${textColor};
      border-color: ${borderColor};
    `,
    propsCss,
  ];
  const styles = [
    S.defalut,
    S.size[size],
    S.variant[variant],
    ...dynamicStyles,
  ];

  return (
    <div css={styles} {...rest}>
      {children}
    </div>
  );
};

const S = {
  defalut: css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  `,
  size: {
    sm: css`
      padding: 4px 12px;
      font-size: 12px;
      line-height: 1.4;
    `,
    md: css`
      padding: 4px 12px;
      font-size: 14px;
      line-height: 1.4;
    `,
  },
  variant: {
    contained: css`
      border: none;
    `,
    outlined: css`
      border: 1px solid;
    `,
  },
};

export default Tag;
