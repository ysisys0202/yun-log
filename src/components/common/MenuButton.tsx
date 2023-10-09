import { colors, gray, green } from "@/constants/colors";
import useColorMode from "@/hooks/useColorMode";
import { css } from "@emotion/react";
type Props = {
  isActive: boolean;
  className?: string;
};
type ButtonProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement>;
const MenuButton = ({ isActive, className = "", ...props }: ButtonProps) => {
  const c = useColorMode();

  return (
    <button
      className={`${isActive ? "is-active" : ""} ${className}`}
      css={S}
      aria-label={`메뉴 열기`}
      {...props}
    >
      <div
        className="bar"
        aria-hidden="true"
        style={{ backgroundColor: c.green_primary }}
      ></div>
      <div
        className="bar"
        aria-hidden="true"
        style={{ backgroundColor: c.green_primary }}
      ></div>
      <div
        className="bar"
        aria-hidden="true"
        style={{ backgroundColor: c.green_primary }}
      ></div>
    </button>
  );
};
const S = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px 4px;
  width: 40px;
  height: 32px;
  &.is-active {
    .bar {
      &:first-of-type {
        transform: translateX(14%) translateY(430%) rotateZ(-45deg);
      }

      &:nth-of-type(2) {
        opacity: 0;
      }

      &:last-of-type {
        transform: translateX(13%) translateY(-430%) rotateZ(45deg);
      }
    }
  }
  .bar {
    width: 100%;
    height: 2px;
    border-radius: 2px;
    transition: all 200ms ease-in-out;
  }
`;
export default MenuButton;
