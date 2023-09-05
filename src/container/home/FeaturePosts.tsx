import SectionTitle from "@/components/home/SectionTitle";
import PostList from "@/components/posts/PostList";
import { css } from "@emotion/react";
import HomeSection from "./HomeSection";
import { getAllPosts } from "../../../lib/posts-util";
import { PostCardType } from "@/components/posts/PostCard";

const FeaturePosts = ({ postList }: { postList: PostCardType[] }) => {
  return (
    <HomeSection SectionStyle={S}>
      <SectionTitle>주요 게시물</SectionTitle>
      <PostList postList={postList} type="feature" />
    </HomeSection>
  );
};
const S = css`
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
    width: 100%;
  }
`;

export default FeaturePosts;
