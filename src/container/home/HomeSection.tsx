import { SerializedStyles, css } from "@emotion/react";
import React from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
  SectionStyle?: SerializedStyles;
};
const HomeSection = ({ children, className = "", SectionStyle }: Props) => {
  return (
    <section
      css={[S, SectionStyle]}
      {...(className && { className: className })}
    >
      {children}
    </section>
  );
};
const S = css`
  padding: 32px 24px;
`;
export default HomeSection;
