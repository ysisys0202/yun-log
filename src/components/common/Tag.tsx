import React, { HTMLProps, forwardRef } from "react";
import { SerializedStyles, css } from "@emotion/react";
import { colorVars } from "@/constants/cssVariables";

export type TagProps = {
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  size?: "sm" | "md";
  children: React.ReactNode;
  variant?: "contained" | "outlined";
  propsCss?: SerializedStyles;
} & Omit<HTMLProps<HTMLDivElement>, "size">;

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      className = "",
      backgroundColor = "transparent",
      textColor = colorVars.primary,
      borderColor = colorVars.border,
      size = "md",
      children,
      variant = "contained",
      propsCss,
      ...props
    },
    ref
  ) => {
    const styles = [
      tagStyle.base,
      tagStyle[size],
      tagStyle[variant],
      css`
        background-color: ${backgroundColor};
        color: ${textColor};
        border-color: ${borderColor};
      `,
    ];
    propsCss && styles.push(propsCss);

    return (
      <div ref={ref} css={styles} {...props}>
        {children}
      </div>
    );
  }
);

const tagStyle = {
  base: css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  `,
  // NOTE: size styles
  sm: css`
    height: 26px;
    padding: 0 8px;
    font-size: 12px;
    line-height: 1;
  `,
  md: css`
    height: 30px;
    padding: 0 12px;
    font-size: 14px;
    line-height: 1.4;
  `,
  // NOTE: variant styles
  contained: css`
    border: none;
  `,
  outlined: css`
    border: 1px solid;
  `,
};

Tag.displayName = "Tag";
export default Tag;
