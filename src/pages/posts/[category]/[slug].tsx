import { GetStaticPropsContext } from "next";
import { css } from "@emotion/react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import { getPostData, getPosts } from "../../../../libs/posts-util";
import { PostData } from "@/types/post";
import MyHead from "@/components/common/AppHead";
import AppContainer from "@/container/layouts/AppContainer";
import PostContent from "@/components/posts/PostContent";
import PostComment from "@/components/posts/PostComment";
import { contentSideSpacingMb, contentSideSpacingPc } from "@/constants/size";
import { media } from "@/constants/breakPoints";
import Typography from "@/components/common/Typography";
import { colorVars } from "@/constants/cssVariables";

type Props = {
  post: PostData;
  mdx: MDXRemoteSerializeResult;
};

const PostDetail = ({ post, mdx }: Props) => {
  return (
    <AppContainer>
      <MyHead
        title={post.title}
        description={post.createdAt}
        ogImage={post.thumbnail}
      />
      <div css={S.self}>
        <PostContent {...{ post, mdx }} />
        <PostComment />
      </div>
    </AppContainer>
  );
};

const S = {
  self: css`
    padding: 32px 48px 80px;
    max-width: 860px;
    @media ${media.md} {
      padding: 48px 56px 80px;
    }
  `,
};

export const getStaticPaths = async () => {
  const postFiles = getPosts({});

  return {
    paths: postFiles.map((post: any) => `/posts/${post.category}/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const category = context.params?.category as string;
  const slug = context.params?.slug as string;
  const postData = getPostData(category, slug);
  const { fileContent } = postData;
  const mdx = await serialize(fileContent, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkFrontmatter],
    },
  });

  return {
    props: {
      post: postData,
      mdx,
    },
  };
};

export default PostDetail;
