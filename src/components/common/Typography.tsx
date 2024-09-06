import { SerializedStyles, css } from "@emotion/react";
import {
  TypographyElement,
  TypographyVariant,
  TypographyWeight,
} from "@/types/typography";
import { media } from "@/constants/breakPoints";
import { typography } from "@/constants/typography";

type Props = {
  variant: TypographyVariant;
  element: TypographyElement;
  color?: string;
  fontWeight?: TypographyWeight;
  className?: string;
  children: React.ReactNode;
  css?: SerializedStyles | SerializedStyles[];
} & React.HTMLAttributes<HTMLElement>;

const Typography = ({
  variant = "body1",
  element = "p",
  color,
  fontWeight,
  className,
  children,
  css: propsCss,
  ...rest
}: Props) => {
  const Component = element;

  const styles = [
    typographyStyle.default,
    typographyStyle[variant],
    css`
      color: ${color};
      font-weight: ${fontWeight} !important;
    `,
    propsCss,
  ];

  return (
    <Component
      css={styles}
      className={`typography-${variant} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const typographyStyle = {
  default: css`
    line-height: ${typography.lineheight.default};
    letter-spacing: ${typography.letterspacing.default};
    &[class^="typography-h"],
    &[class^="typography-subtitle"] {
      font-weight: 600;
    }
    &[class^="typography-body"] {
      font-weight: 400;
    }
  `,
  h1: css`
    font-size: ${typography.size["5xl"]};
    @media ${media.md} {
      font-size: ${typography.size["6xl"]};
    }
  `,
  h2: css`
    font-size: ${typography.size["4xl"]};
    @media ${media.md} {
      font-size: ${typography.size["5xl"]};
    }
  `,
  h3: css`
    font-size: ${typography.size["2xl"]};
    @media ${media.md} {
      font-size: ${typography.size["4xl"]};
    }
  `,
  h4: css`
    font-size: ${typography.size["xl"]};
    @media ${media.md} {
      font-size: ${typography.size["3xl"]};
    }
  `,
  body1: css`
    font-size: ${typography.size["md"]};
    @media ${media.md} {
      font-size: ${typography.size["lg"]};
    }
  `,
  body2: css`
    font-size: ${typography.size["xs"]};
    @media ${media.md} {
      font-size: ${typography.size["sm"]};
    }
  `,
  subtitle1: css`
    font-size: ${typography.size["lg"]};
    font-size: ${typography.weight["700"]};
    @media ${media.md} {
      font-size: ${typography.size["xl"]};
    }
  `,
};

export default Typography;
