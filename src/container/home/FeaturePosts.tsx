import SectionTitle from "@/components/home/SectionTitle";
import PostList from "@/components/posts/PostList";
import { css } from "@emotion/react";
import HomeSection from "./HomeSection";
import { PostCardType } from "@/components/posts/PostCard";
import { media } from "@/constants/breakPoints";
import useMediaQuery from "@/hooks/useMediaQuery";

const FeaturePosts = ({ postList }: { postList: PostCardType[] }) => {
  const isMediaMd = useMediaQuery(media.md);
  return (
    <HomeSection SectionStyle={S}>
      <SectionTitle>주요 게시물</SectionTitle>
      <PostList postList={postList} type={isMediaMd ? "feature" : "default"} />
    </HomeSection>
  );
};
const S = css`
  .post-list {
    margin: 24px -24px 0;
  }
  @media ${media.md} {
    position: relative;
    width: 60vw;
    h2 {
      position: relative;
      z-index: 2;
    }
    .post-list {
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      width: 100%;
    }
  }
`;

export default FeaturePosts;
