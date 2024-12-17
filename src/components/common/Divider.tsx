import { SerializedStyles, css } from "@emotion/react";
import { colorVars } from "@/constants/cssVariables";

type Props = {
  width?: string;
  height?: string;
  color?: string;
  propsCss?: SerializedStyles;
  className?: string;
  testId?: string;
};

const Divider = ({
  width = "100%",
  height = "1px",
  color = colorVars.border,
  propsCss,
  testId = "divider",
  ...props
}: Props) => {
  const styles = [
    css`
      width: ${width};
      height: ${height};
      background-color: ${color};
    `,
  ];
  propsCss && styles.push(propsCss);
  return (
    <div css={styles} aria-hidden="true" data-testid={testId} {...props}></div>
  );
};

export default Divider;
