import { media } from "@/constants/breakPoints";
import { gray } from "@/constants/colors";
import useColorMode from "@/hooks/useColorMode";
import {
  TypographyElementType,
  TypographyVariantType,
} from "@/types/typography";
import { css } from "@emotion/react";

type Props = {
  variant: TypographyVariantType;
  element: TypographyElementType;
  color?: string;
  className?: string;
  children: React.ReactNode;
};
const Typography = ({
  variant,
  element,
  color,
  className = "",
  children,
}: Props) => {
  const Component = element;
  const c = useColorMode();
  if (!color) {
    color = c.primary;
  }
  return (
    <Component
      className={`typography-${variant} ${className}`}
      style={{ color }}
      css={S}
    >
      {children}
    </Component>
  );
};
const S = css`
  line-height: 1.4;
  letter-spacing: 0.00938em;
  &[class^="typography-h"] {
    font-weight: 700;
  }
  &[class^="typography-body"] {
    font-weight: 400;
  }
  &.typography-h1 {
    font-size: 32px;
  }
  &.typography-h2 {
    font-size: 28px;
  }
  &.typography-h3 {
    font-size: 22px;
  }
  &.typography-h4 {
    font-size: 20px;
  }
  &.typography-body1 {
    font-size: 16px;
  }
  &.typography-body2 {
    font-size: 14px;
  }
  &.typography-subtitle1 {
    font-size: 18px;
    font-weight: 700;
  }
  @media ${media.md} {
    &.typography-h1 {
      font-size: 36px;
    }
    &.typography-h2 {
      font-size: 32px;
    }
    &.typography-h3 {
      font-size: 28px;
    }
    &.typography-h4 {
      font-size: 24px;
    }
    &.typography-body1 {
      font-size: 16px;
    }
    &.typography-body2 {
      font-size: 15px;
    }
    &.typography-subtitle1 {
      font-size: 18px;
    }
  }
`;
export default Typography;
