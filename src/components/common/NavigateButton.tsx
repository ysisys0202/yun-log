import Link from "next/link";
import Button, { ButtonProps } from "@/components/common/Button";
import IconArrow from "public/icons/arrow.svg";
import { SerializedStyles, css } from "@emotion/react";
import { forwardRef } from "react";

type NavigateButtonProps = {
  href: string;
  onClick?: () => void;
  propsCss?: SerializedStyles;
} & Pick<
  ButtonProps,
  | "size"
  | "variant"
  | "textColor"
  | "borderColor"
  | "backgroundColor"
  | "children"
>;

const NavigateButton = forwardRef<HTMLButtonElement, NavigateButtonProps>(
  ({ href, onClick, propsCss, ...props }, ref) => {
    return (
      <Link
        href={href}
        onClick={() => {
          onClick?.();
        }}
        css={propsCss}
      >
        <Button
          as="div"
          afterIcon={IconArrow}
          propsCss={navigateButtonStyle.self}
          ref={ref}
          {...props}
        />
      </Link>
    );
  }
);

const navigateButtonStyle = {
  self: css`
    svg {
      transition: transform 100ms ease-in-out;
    }
    &:hover {
      opacity: 1;
      svg {
        transform: translateX(5px);
      }
    }
  `,
};

NavigateButton.displayName = "NavigateButton";
export default NavigateButton;
