import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CaptionText from "@/components/posts/CaptionText";
type Props = {
  children: string | string[];
  language: string;
};
const Codeblock = ({ children, language }: Props) => {
  return (
    <div>
      <SyntaxHighlighter language={language} PreTag="pre" style={materialDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Codeblock;
