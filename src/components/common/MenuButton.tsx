import { colors } from "@/constants/colors";
import { css } from "@emotion/react";
type Props = {
  color?: string;
  isActive: boolean;
  className?: string;
};
type ButtonProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement>;
const MenuButton = ({
  color = colors.white,
  isActive,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${isActive ? "is-active" : ""}`}
      css={S}
      aria-label={`메뉴 열기`}
      {...props}
    >
      <div
        className="bar"
        aria-hidden="true"
        style={{ backgroundColor: color }}
      ></div>
      <div
        className="bar"
        aria-hidden="true"
        style={{ backgroundColor: color }}
      ></div>
      <div
        className="bar"
        aria-hidden="true"
        style={{ backgroundColor: color }}
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
        transform: translateY(10px) rotateZ(-45deg);
      }

      &:nth-of-type(2) {
        opacity: 0;
      }

      &:last-of-type {
        transform: translateY(-7px) rotateZ(45deg);
      }
    }
  }
  .bar {
    width: 100%;
    height: 2px;
    border-radius: 2px;
  }
`;
export default MenuButton;
