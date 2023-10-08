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
      <PostList postList={postList} type="vertical" />
    </HomeSection>
  );
};
const S = css`
  .post-list {
    margin: 48px -24px 0;
  }
`;

export default FeaturePosts;
