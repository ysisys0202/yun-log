import { SerializedStyles, css } from "@emotion/react";
import { colorVars } from "@/constants/cssVariables";

type Props = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  style: SerializedStyles;
};

const Divider = ({
  width = "100%",
  height = "1px",
  backgroundColor = colorVars.border,
  style,
}: Props) => {
  const styles = [
    css`
      width: ${width};
      height: ${height};
      background-color: ${backgroundColor};
    `,
    style,
  ];

  return <div css={styles} aria-hidden="true"></div>;
};

export default Divider;
