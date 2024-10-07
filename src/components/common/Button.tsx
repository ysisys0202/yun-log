import { colorVars } from "@/constants/cssVariables";
import { SerializedStyles, css } from "@emotion/react";
import React, { ElementType, HTMLAttributes, forwardRef } from "react";
import { typographyStyle } from "./Typography";
import { TypographyWeight } from "@/types/typography";

export type ButtonProps = {
  as?: ElementType;
  variant?: "contained" | "outlined" | "text";
  size?: "sm" | "md" | "lg";
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  fontWeight?: TypographyWeight;
  children: React.ReactNode;
  beforeIcon?: React.ElementType;
  afterIcon?: React.ElementType;
  propsCss?: SerializedStyles;
} & HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as = "button",
      variant = "outlined",
      size = "md",
      textColor = colorVars.secondary,
      backgroundColor = colorVars.backgroundGlobal,
      borderColor = colorVars.border,
      fontWeight = 400,
      children,
      beforeIcon: BeforeIcon,
      afterIcon: AfterIcon,
      propsCss,
      ...props
    },
    ref
  ) => {
    const Component = as;

    const styles = [
      buttonStyle.base,
      buttonStyle[size],
      buttonStyle[variant],
      css`
        color: ${textColor};
        background-color: ${backgroundColor};
        border-color: ${borderColor};
        font-weight: ${fontWeight};
      `,
    ];
    propsCss && styles.push(propsCss);

    return (
      <Component ref={ref} css={styles} {...props}>
        {BeforeIcon && (
          <BeforeIcon
            width={iconSizes[size]}
            height={iconSizes[size]}
            fill={textColor}
          />
        )}
        {children}
        {AfterIcon && (
          <AfterIcon
            width={iconSizes[size]}
            height={iconSizes[size]}
            fill={textColor}
          />
        )}
      </Component>
    );
  }
);

const iconSizes = {
  sm: 20,
  md: 30,
  lg: 34,
};

const buttonStyle = {
  base: css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: opacity 200ms ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  `,
  // NOTE: variant styles
  text: css`
    background-color: transparent !important;
    border: none;
  `,
  contained: css`
    border: none;
  `,
  outlined: css`
    border: 1px solid;
  `,
  // NOTE: size styles
  sm: css`
    gap: 4px;
    padding: 0 12px;
    height: 30px;
    ${typographyStyle.body2}
  `,
  md: css`
    gap: 6px;
    padding: 0 16px;
    height: 44px;
    ${typographyStyle.body1}
  `,
  lg: css`
    gap: 8px;
    padding: 0 20px;
    height: 54px;
    ${typographyStyle.subtitle1}
  `,
};

Button.displayName = "Button";
export default Button;
