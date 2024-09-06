import { SerializedStyles, css } from "@emotion/react";
import { media } from "@/constants/breakPoints";
import { contentSideSpacingMb, contentSideSpacingPc } from "@/constants/size";
import { PostData } from "@/types/post";
import HomeSection from "@/container/home/HomeSection";
import SectionTitle from "@/components/home/SectionTitle";
import PostListVertical from "@/components/posts/PostListVertical";

type Props = {
  postList: PostData[];
};

const RecentPosts = ({ postList }: Props) => {
  return (
    <HomeSection css={S.self} data-test-id="recent-post-list">
      <SectionTitle>최근 게시글</SectionTitle>
      <PostListVertical
        postList={postList}
        propsCss={S.list}
        section="home-recent-posts"
      />
    </HomeSection>
  );
};

const S = {
  self: css`
    padding-bottom: 0;
    @media ${media.md} {
      padding-bottom: 0;
    }
  `,
  list: css`
    margin: 16px -${contentSideSpacingMb}px 0;
    @media ${media.md} {
      margin: 32px -${contentSideSpacingPc}px 0;
    }
  `,
};
export default RecentPosts;
