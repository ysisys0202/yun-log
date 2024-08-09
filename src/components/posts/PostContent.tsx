import dynamic from "next/dynamic";
import { css } from "@emotion/react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostDetailType } from "@/types/post";
import { media } from "@/constants/breakPoints";
import useColorMode from "@/hooks/useColorMode";
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
  const c = useColorMode();
  const postComponents = {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <Typography variant={"h1"} element={"h2"} color={c.primary}>
        {props.children}
      </Typography>
    ),
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <Typography variant={"h2"} element={"h3"} color={c.primary}>
        {props.children}
      </Typography>
    ),
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <Typography variant={"h3"} element={"h4"} color={c.primary}>
        {props.children}
      </Typography>
    ),
    p: (props: React.HTMLProps<HTMLParagraphElement>) => (
      <Typography variant={"body1"} element={"p"} color={c.secondary}>
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
      <Typography variant="body1" element="p" color={c.primary}>
        {post.intro}
      </Typography>
      <div css={S.markdown}>
        <MDXRemote
          compiledSource={compiledSource}
          scope={scope}
          frontmatter={frontmatter}
          components={postComponents}
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
    img {
      width: 100%;
      max-width: 400px;
    }
  `,
};

export default PostContent;
