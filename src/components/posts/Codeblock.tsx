import { css } from "@emotion/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { gray } from "@/constants/colors";
import Typography from "@/components/common/Typography";

type Props = {
  children: string | string[];
  language: string;
};

const Codeblock = ({ children, language }: Props) => {
  return (
    <section>
      <header css={S.codeBlockHeader}>
        <Typography variant="body1" element="span">
          {language}
        </Typography>
      </header>
      <SyntaxHighlighter
        language={language}
        PreTag="pre"
        style={materialDark}
        css={S.codeBlockBody}
      >
        {children}
      </SyntaxHighlighter>
    </section>
  );
};

const S = {
  codeBlockHeader: css`
    padding: 8px;
    border-radius: 4px 4px 0 0;
    background-color: ${gray[50]};
  `,
  codeBlockBody: css`
    margin: 0 !important;
  `,
};

export default Codeblock;
