import { css } from "@emotion/react";
import { TypographyWeight } from "@/types/typography";

type Props = {
  fontWeight?: TypographyWeight;
  textColor?: string;
  backgroundColor?: string;
  highlightType?: "underline" | "full";
  decoration?: "underline" | "line-through";
  children: React.ReactNode;
};

const HighlightText = ({
  fontWeight = 400,
  textColor,
  backgroundColor,
  children,
  highlightType = "full",
  decoration,
}: Props) => {
  const styles = [
    css`
      color: ${textColor};
      font-weight: ${fontWeight};
    `,
  ];
  const highlightStyle = css`
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: ${highlightType === "full" ? "80%" : "20%"};
      transform: skewX(-10deg);
      background-color: ${backgroundColor};
      opacity: 0.4;
    }
  `;
  const decorationStyle = css`
    text-decoration: ${decoration};
  `;
  backgroundColor && styles.push(highlightStyle);
  decoration && styles.push(decorationStyle);

  return <span css={styles}>{children}</span>;
};

export default HighlightText;
