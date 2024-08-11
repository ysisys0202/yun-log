import dynamic from "next/dynamic";
import { css } from "@emotion/react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostDetailType } from "@/types/post";
import { colorVars } from "@/constants/cssVariables";
import { media } from "@/constants/breakPoints";
import PostHeader from "@/components/posts/PostHeader";

const PostImage = dynamic(() => import("@/components/posts/PostImage"));
const Spacing = dynamic(() => import("@/components/common/Spacing"));
const Typography = dynamic(() => import("@/components/common/Typography"));
const Codeblock = dynamic(() => import("@/components/posts/Codeblock"));

type Props = {
  post: PostDetailType;
  mdx: MDXRemoteSerializeResult;
};

const PostContent = ({ post, mdx }: Props) => {
  const { title, createdAt, thumbNailImage, subTitle, category } = post;
  const { compiledSource, scope, frontmatter } = mdx;

  const postComponents = {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <Typography variant="h1" element="h2" color={colorVars.primary}>
        {props.children}
      </Typography>
    ),
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <Typography variant="h2" element="h3" color={colorVars.primary}>
        {props.children}
      </Typography>
    ),
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <Typography variant="h3" element="h4" color={colorVars.primary}>
        {props.children}
      </Typography>
    ),
    code(props: React.HTMLProps<HTMLPreElement>) {
      const { children, className } = props;
      const language = className?.split("-")[1];
      return (
        <Codeblock language={language || "javascript"}>
          {children as string}
        </Codeblock>
      );
    },
    PostImage,
    Spacing,
  };

  return (
    <article css={S.self}>
      <PostHeader
        title={title}
        createdAt={createdAt}
        headerImage={thumbNailImage}
        subTitle={subTitle}
        category={category}
      />
      <div css={S.markdown}>
        <MDXRemote
          compiledSource={compiledSource}
          scope={{ ...scope, ...frontmatter }}
          components={postComponents}
          frontmatter={frontmatter}
        />
      </div>
    </article>
  );
};

const S = {
  self: css`
    padding: 24px;
    max-width: 860px;
    @media ${media.md} {
      margin: 32px;
    }
  `,
  markdown: css`
    white-space: pre-wrap;
    word-break: keep-all;
    img {
      width: 100%;
      max-width: 400px;
    }
    table {
      background-color: ${colorVars.backgroundGlobal};
      thead {
        border-bottom: 2px solid ${colorVars.border};
      }
      th,
      td {
        padding: 10px 16px;
        border: 1px solid ${colorVars.border};
      }
    }
  `,
};

export default PostContent;
