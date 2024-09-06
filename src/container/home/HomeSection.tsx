import { media } from "@/constants/breakPoints";
import { contentSideSpacingMb, contentSideSpacingPc } from "@/constants/size";
import { SerializedStyles, css } from "@emotion/react";
import React, { HTMLAttributes } from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
  propsCss?: SerializedStyles;
} & HTMLAttributes<HTMLElement>;
const HomeSection = ({
  children,
  className = "",
  propsCss,
  ...props
}: Props) => {
  const styles = [S.self, propsCss];
  return (
    <section
      css={styles}
      {...(className && { className: className })}
      {...props}
    >
      {children}
    </section>
  );
};
const S = {
  self: css`
    padding: 40px ${contentSideSpacingMb}px;
    @media ${media.md} {
      padding: 40px ${contentSideSpacingPc}px;
    }
  `,
};
export default HomeSection;
