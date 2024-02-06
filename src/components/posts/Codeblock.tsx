import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CaptionText from "@/components/posts/CaptionText";
type Props = {
  language?: string;
  children: React.ReactElement;
  caption?: string;
};
const Codeblock = ({ language = "js", children, caption }: Props) => {
  const code = children.props.children.props.children;
  return (
    <div>
      <SyntaxHighlighter language={language} PreTag="pre" style={materialDark}>
        {code}
      </SyntaxHighlighter>
      {!!caption && <CaptionText className="mt-1">{caption}</CaptionText>}
    </div>
  );
};

export default Codeblock;
