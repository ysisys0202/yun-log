import SectionTitle from "@/components/home/SectionTitle";
import { media } from "@/constants/breakPoints";
import { contentSideSpacingMb, contentSideSpacingPc } from "@/constants/size";
import { PostData } from "@/types/post";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import PostListVertical from "@/components/posts/PostListVertical";

const PostListContainer = ({ postList }: { postList: PostData[] }) => {
  const router = useRouter();
  const query = router.query;
  const currentCategory = query.category as string;
  return (
    <div css={S.self}>
      <SectionTitle>{currentCategory ?? "전체"}</SectionTitle>
      <PostListVertical postList={postList} propsCss={S.list} />
    </div>
  );
};

const S = {
  self: css`
    padding: 32px ${contentSideSpacingMb}px;
    @media ${media.md} {
      padding: 40px ${contentSideSpacingPc}px;
    }
  `,
  list: css`
    margin: 16px -${contentSideSpacingMb}px;
    @media ${media.md} {
      margin: 24px -${contentSideSpacingPc}px;
    }
  `,
};
export default PostListContainer;
