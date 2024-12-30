import React, { ReactNode } from "react";
import Typography from "../common/Typography";
import { colorVars } from "@/constants/cssVariables";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const lineBreak = (text: ReactNode) => {
  const splitedText = text?.toString().split("\\n");

  return splitedText?.map((line, index) => (
    <>
      {line.trim()}
      {index < splitedText.length - 1 && <br />}
    </>
  ));
};

const CaptionText = ({ children, className }: Props) => {
  return (
    <Typography
      variant="body2"
      as="p"
      color={colorVars.tertiary}
      css={style}
      {...(className && { className: className })}
    >
      {lineBreak(children)}
    </Typography>
  );
};

const style = css`
  width: 100%;
  word-break: break-all;
`;
export default CaptionText;
