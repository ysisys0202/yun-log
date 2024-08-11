import { SerializedStyles, css } from "@emotion/react";
import {
  TypographyElementType,
  TypographyVariantType,
} from "@/types/typography";
import { media } from "@/constants/breakPoints";
import { typography } from "@/constants/typography";

type Props = {
  variant: TypographyVariantType;
  element: TypographyElementType;
  color?: string;
  fontWeight?: number;
  className?: string;
  children: React.ReactNode;
  css?: SerializedStyles;
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
    S.default,
    S[variant],
    css`
      color: ${color};
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

const S = {
  default: css`
    line-height: ${typography.lineheight.default};
    letter-spacing: ${typography.letterspacing.default};
    &[class^="typography-h"] {
      font-weight: 700;
    }
    &[class^="typography-body"] {
      font-weight: 400;
    }
  `,
  heading: css`
    font-weight: ${typography.weight[700]};
  `,
  body: css`
    font-weight: ${typography.weight[400]};
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
