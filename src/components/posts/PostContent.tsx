import React from "react";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { css } from "@emotion/react";
import { gray } from "@/constants/colors";
const PostContent = ({ post }: { post: any }) => {
  const customComponents = {
    p(paragraph: any) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <Image
            src={`${image.properties.src}`}
            alt={image.alt}
            width={600}
            height={300}
            className="image"
          />
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code: any) {
      const { language, children } = code;
      return (
        <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>
      );
    },
  };
  return (
    <article css={S}>
      <PostHeader
        title={post.title}
        date={post.date}
        headerImage={post.thumbnail}
      />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};
const S = css`
  margin: 98px 32px;
  padding: 24px;
  width: calc(100% - 64px);
  max-width: 860px;
  border-radius: 4px;
  background-color: ${gray.background}80;
`;
export default PostContent;
