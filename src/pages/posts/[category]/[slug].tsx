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
        <p css={S.feedback}>
          게시글의 오류 지적, 내용 보충, 질문 등의 피드백은 언제나 환영입니다.
          <br />
          아래 댓글창 혹은
          {""} <a href="mailto:ysisys0202@gmail.com">ysisys0202@gmail.com</a>
          으로 남겨주세요.
        </p>
        <PostComment />
      </div>
    </AppContainer>
  );
};

const S = {
  self: css`
    padding: 32px 24px 80px;
    max-width: 860px;
    @media ${media.md} {
      padding: 48px 56px 80px;
    }
  `,
  feedback: css`
    margin-top: 48px;
    font-size: 14px;
    color: ${colorVars.tertiary};
    text-align: center;
    a {
      text-decoration: underline;
    }
    @media ${media.md} {
      margin-top: 120px;
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
