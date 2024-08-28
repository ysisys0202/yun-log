import { css } from "@emotion/react";
import HomeSection from "@/container/home/HomeSection";
import SectionTitle from "@/components/home/SectionTitle";
import { media } from "@/constants/breakPoints";
import { contentSideSpacingMb, contentSideSpacingPc } from "@/constants/size";
import PostListVertical from "@/components/posts/PostListVertical";

const RecentPosts = ({ postList }: { postList: any }) => {
  return (
    <HomeSection>
      <SectionTitle>최근 게시글</SectionTitle>
      <PostListVertical postList={postList} propsCss={S.list} />
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
export default RecentPosts;
