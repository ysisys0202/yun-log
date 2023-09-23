import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { css } from "@emotion/react";
import { gray } from "@/constants/colors";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PostDetailType } from "@/types/post";
import Typography from "../common/Typography";
import { ReactMarkdownProps } from "react-markdown/lib/complex-types";
const PostContent = ({ post }: { post: PostDetailType }) => {
  const customComponents = {
    h1(h1: ReactMarkdownProps) {
      return (
        <Typography variant="h1" element="h1" color={gray.primary}>
          {h1.children}
        </Typography>
      );
    },
    h2(h2: ReactMarkdownProps) {
      return (
        <Typography variant="h2" element="h2" color={gray.primary}>
          {h2.children}
        </Typography>
      );
    },
    h3(h3: ReactMarkdownProps) {
      return (
        <Typography variant="h3" element="h3" color={gray.primary}>
          {h3.children}
        </Typography>
      );
    },
    h4(h4: ReactMarkdownProps) {
      return (
        <Typography variant="h4" element="h4" color={gray.primary}>
          {h4.children}
        </Typography>
      );
    },
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
      return (
        <Typography variant="body1" element="p" color={gray.primary}>
          {paragraph.children}
        </Typography>
      );
    },
    code(code: any) {
      const { className, children } = code;
      const language = /language-(\w+)/.exec(className || "");
      return (
        language && (
          <SyntaxHighlighter
            language={language[1]}
            PreTag="div"
            style={materialDark}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        )
      );
    },
  };
  return (
    <article css={S}>
      <PostHeader
        title={post.title}
        date={post.date}
        headerImage={post.thumbNailImage}
        subTitle={post.subTitle}
        category={post.category}
      />
      <ReactMarkdown
        components={customComponents}
        className="post-markdown mt-10"
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};
const S = css`
  margin: 32px;
  padding: 24px;
  width: calc(100% - 64px);
  max-width: 860px;
  border-radius: 4px;
  background-color: ${gray.background}80;
  .post-markdown {
    img {
      max-width: 400px;
    }
  }
`;
export default PostContent;
