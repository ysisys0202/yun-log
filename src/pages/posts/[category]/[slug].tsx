import { GetStaticPropsContext } from "next";
import { css } from "@emotion/react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import {
  getCategories,
  getPostData,
  getPosts,
} from "../../../../libs/posts-util";
import { PostData } from "@/types/post";
import MyHead from "@/components/common/AppHead";
import AppContainer from "@/container/layouts/AppContainer";
import PostContent from "@/components/posts/PostContent";
import PostComment from "@/components/posts/PostComment";
import { media } from "@/constants/breakPoints";
import { colorVars } from "@/constants/cssVariables";
import usePostTOC from "@/hooks/usePostTOC";
import PostTOC from "@/components/posts/PostTOC";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  postData: PostData;
  mdx: MDXRemoteSerializeResult;
};

const PostDetail = ({ postData, mdx }: Props) => {
  const isMobile = !useMediaQuery(media.md);
  const { TOC } = usePostTOC(postData.content);
  return (
    <AppContainer>
      <MyHead
        title={postData.title}
        description={postData.createdAt}
        ogImage={postData.thumbnail}
        keywords={postData.keywords}
      />
      <div id="post-container" css={S.self}>
        <PostContent {...{ postData, mdx }} />
        <p css={S.feedback}>
          게시글의 오류 지적, 내용 보충, 질문 등의 피드백은 언제나 환영입니다.
          <br />
          아래 댓글창 혹은
          {""} <a href="mailto:ysisys0202@gmail.com">ysisys0202@gmail.com</a>
          으로 남겨주세요.
        </p>
        <PostComment />
      </div>
      {!isMobile && <PostTOC TOC={TOC} />}
    </AppContainer>
  );
};

const S = {
  self: css`
    padding: 32px 24px 80px;
    @media ${media.md} {
      padding: 48px 24px 80px;
      width: 80%;
      max-width: calc(100% - 230px);
    }
    @media ${media.lg} {
      padding: 48px 56px 80px;
      max-width: 860px;
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
    paths: postFiles.map((post) => `/posts/${post.categoryName}/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const categories = getCategories();
  const currentCategoryName = context.params?.category as string;
  const currentCategroryId = categories.filter(
    (category) => category.name === currentCategoryName
  )[0]?.id;
  if (!currentCategroryId) {
    throw new Error("카테고리를 찾을 수 없습니다.");
  }
  const slug = context.params?.slug as string;
  const postData = getPostData(currentCategroryId, currentCategoryName, slug);
  const { content } = postData;
  const mdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      postData: postData,
      mdx,
    },
  };
};

export default PostDetail;
