import { SerializedStyles, css } from "@emotion/react";
import { HtmlHTMLAttributes } from "react";

type Props = {
  element?: "button" | "div";
  icon: React.ReactNode;
  name: string;
  propsCss?: SerializedStyles;
} & HtmlHTMLAttributes<HTMLElement>;

const IconButton = ({
  element = "button",
  icon,
  name,
  propsCss,
  ...rest
}: Props) => {
  const Component = element;
  const styles = [S.self];
  propsCss && styles.push(propsCss);
  return (
    <Component css={styles} {...rest}>
      {icon}
      <span className="visually-hidden">{name}</span>
    </Component>
  );
};

const S = {
  self: css`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 24px;
      height: 24px;
    }
  `,
};
export default IconButton;
