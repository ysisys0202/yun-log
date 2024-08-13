import { TypographyWeight } from "@/types/typography";
import { css } from "@emotion/react";

type Props = {
  fontWeight: TypographyWeight;
  textColor: string;
  backgroundColor: string;
  children: React.ReactNode;
};

const HighlightText = ({
  fontWeight,
  textColor,
  backgroundColor,
  children,
}: Props) => {
  const style = css`
    background-color: ${backgroundColor};
    color: ${textColor};
    font-weight: ${fontWeight};
  `;

  return <span css={style}>{children}</span>;
};

export default HighlightText;
