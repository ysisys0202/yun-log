import { css } from "@emotion/react";
import { TypographyWeight } from "@/types/typography";
import { green } from "@/constants/colors";
import { colorVars } from "@/constants/cssVariables";

type Props = {
  type?: "text" | "background";
  fontWeight?: TypographyWeight;
  textColor?: string;
  backgroundColor?: string;
  children: React.ReactNode;
};

const HighlightText = ({
  type = "background",
  fontWeight = 400,
  textColor = green[70],
  backgroundColor = colorVars.backgroundElement,
  children,
}: Props) => {
  const styles = [
    css`
      color: ${textColor};
      font-weight: ${fontWeight};
    `,
  ];
  const backgroundStyle = css`
    border-radius: 4px;
    padding: 4px;
    font-size: 0.8em;
    background-color: ${backgroundColor};
  `;
  type === "background" && styles.push(backgroundStyle);

  return <span css={styles}>{children}</span>;
};

export default HighlightText;
