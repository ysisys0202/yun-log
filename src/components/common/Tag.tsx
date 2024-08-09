import React, { HTMLProps } from "react";
import Link, { LinkProps } from "next/link";
import { css } from "@emotion/react";
import { colors } from "@/constants/colors";
import { colorVars } from "@/constants/cssVariables";

type TagProps = {
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  variant?: "contained" | "outlined";
} & Omit<HTMLProps<HTMLDivElement>, "size">;

const Tag = ({
  className = "",
  backgroundColor = "transparent",
  textColor,
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

  if (!textColor) {
    textColor = colorVars.primary;
  }
  if (!borderColor) {
    borderColor = colorVars.border;
  }
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
type LinkTagProps = TagProps & LinkProps;

const LinkTag = ({
  className = "",
  backgroundColor = "#",
  textColor,
  borderColor,
  size = "md",
  children,
  variant = "contained",
  href,
  ...rest
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  &.size-sm {
    padding: 4px 12px;
    font-size: 12px;
    line-height: 1.4;
  }
  &.size-md {
    padding: 4px 12px;
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
