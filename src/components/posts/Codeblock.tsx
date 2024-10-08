import { css } from "@emotion/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { gray } from "@/constants/colors";
import useClipboard from "@/hooks/useClipboard";
import Typography from "@/components/common/Typography";
import Button from "@/components/common/Button";
import IconDocument from "public/icons/document.svg";
import IconDocumentWithCheck from "public/icons/document_with_check.svg";

type CodeblockProps = {
  children: string | string[];
  language: string;
};

const Codeblock = ({ children, language }: CodeblockProps) => {
  const { copy, isCopied } = useClipboard();
  const handleCopyButtonClick = () => {
    copy(children as string);
  };

  return (
    <section css={codeblockStyle.self}>
      <header css={codeblockStyle.codeBlockHeader}>
        <Typography variant="body1" as="span">
          {language}
        </Typography>
        <Button
          variant="text"
          size="sm"
          beforeIcon={isCopied ? IconDocumentWithCheck : IconDocument}
          disabled={isCopied}
          onClick={handleCopyButtonClick}
        >
          {isCopied ? "복사 되었습니다!" : "코드 복사"}
        </Button>
      </header>
      <SyntaxHighlighter
        language={language}
        PreTag="pre"
        style={materialDark}
        css={codeblockStyle.codeBlockBody}
      >
        {children}
      </SyntaxHighlighter>
    </section>
  );
};

const codeblockStyle = {
  self: css`
    font-size: 15px;
  `,
  codeBlockHeader: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px 8px 16px;
    border-radius: 4px 4px 0 0;
    background-color: ${gray[50]};
  `,
  codeBlockBody: css`
    margin: 0 !important;
  `,
};

export default Codeblock;
