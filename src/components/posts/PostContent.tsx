import { css } from "@emotion/react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { media } from "@/constants/breakPoints";
import { PostData } from "@/types/post";
import PostHeader from "@/components/posts/PostHeader";
import PostMarkdown from "@/components/posts/PostMarkdown";

type Props = {
  post: PostData;
  mdx: MDXRemoteSerializeResult;
};

const PostContent = ({ post, mdx }: Props) => {
  const { title, createdAt, thumbnail, subTitle, category } = post;

  return (
    <article css={S.self}>
      <PostHeader
        title={title}
        createdAt={createdAt}
        subTitle={subTitle}
        category={category}
      />
      <PostMarkdown mdx={mdx} />
    </article>
  );
};

const S = {
  self: css`
    margin-top: 24px;
    @media ${media.md} {
      margin-top: 32px;
    }
  `,
};

export default PostContent;
