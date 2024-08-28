import { css } from "@emotion/react";
import HomeSection from "@/container/home/HomeSection";
import SectionTitle from "@/components/home/SectionTitle";
import { contentSideSpacingMb, contentSideSpacingPc } from "@/constants/size";
import { media } from "@/constants/breakPoints";
import PostListHorizontal from "@/components/posts/PostListHorizontal";
import { PostData } from "@/types/post";

const FeaturePosts = ({ postList }: { postList: PostData[] }) => {
  return (
    <HomeSection>
      <SectionTitle>주요 게시글</SectionTitle>
      <PostListHorizontal postList={postList} propsCss={S.list} />
    </HomeSection>
  );
};
const S = {
  list: css`
    margin: 16px -${contentSideSpacingMb}px 0;
    @media ${media.md} {
      margin: 32px -${contentSideSpacingPc}px 0;
    }
  `,
};

export default FeaturePosts;
