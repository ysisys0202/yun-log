import dynamic from "next/dynamic";
import { css } from "@emotion/react";
import { media } from "@/constants/breakPoints";
import { PostDetailType } from "@/types/post";
import PostHeader from "./PostHeader";
import useColorMode from "@/hooks/useColorMode";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Typography from "../common/Typography";

const PostImage = dynamic(() => import("@/components/posts/PostImage"));
const Codeblock = dynamic(() => import("@/components/posts/Codeblock"));
type Props = {
  post: PostDetailType;
  mdx: MDXRemoteSerializeResult;
};
const PostContent = ({ post, mdx }: Props) => {
  const c = useColorMode();
  const postComponents = {
    h1: (props: any) => (
      <Typography variant={"h1"} element={"h2"} color={c.primary}>
        {props.children}
      </Typography>
    ),
    h2: (props: any) => (
      <Typography variant={"h2"} element={"h3"} color={c.primary}>
        {props.children}
      </Typography>
    ),
    h3: (props: any) => (
      <Typography variant={"h3"} element={"h4"} color={c.primary}>
        {props.children}
      </Typography>
    ),
    p: (props: any) => (
      <Typography variant={"body1"} element={"p"} color={c.secondary}>
        {props.children}
      </Typography>
    ),
    PostImage,
    Codeblock,
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
      <MDXRemote
        compiledSource={mdx.compiledSource}
        scope={mdx.scope}
        frontmatter={mdx.frontmatter}
        components={postComponents}
      />
    </article>
  );
};
const S = css`
  padding: 24px;
  max-width: 860px;
  .post-markdown {
    img {
      width: 100%;
      max-width: 400px;
    }
  }
  @media ${media.md} {
    margin: 32px;
  }
`;
export default PostContent;
