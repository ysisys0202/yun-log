import { colors, gray } from "@/constants/colors";
import { css } from "@emotion/react";
import Link from "next/link";
import React, { Component } from "react";
type TagProps = {
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  variant?: "contained" | "outlined";
};
const Tag = ({
  className = "",
  backgroundColor = "#",
  textColor = gray.primary,
  borderColor = colors.white,
  size = "md",
  children,
  variant = "contained",
}: TagProps) => {
  const style = {
    backgroundColor,
    color: textColor,
    borderColor,
  };
  return (
    <div
      className={`${className} size-${size} ${variant}`}
      style={style}
      css={S}
    >
      {children}
    </div>
  );
};
type LinkTagProps = TagProps & {
  href: string;
};
const LinkTag = ({
  className = "",
  backgroundColor = "#",
  textColor = gray.primary,
  borderColor = colors.white,
  size = "md",
  children,
  variant = "contained",
  href,
}: LinkTagProps) => {
  return (
    <Link href={href}>
      <Tag
        {...{
          className,
          backgroundColor,
          textColor,
          borderColor,
          size,
          variant,
        }}
      >
        {children}
      </Tag>
    </Link>
  );
};
const S = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  &.size-md {
    padding: 4px 8px;
    font-size: 14px;
    line-height: 1.4;
  }
  &.contained {
    border: none;
  }
  &.outlined {
    border: 1px solid;
  }
`;
export default Tag;
export { LinkTag };
