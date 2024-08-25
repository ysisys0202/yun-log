import { css } from "@emotion/react";
import HomeSection from "@/container/home/HomeSection";
import SectionTitle from "@/components/home/SectionTitle";
import PostList from "@/components/posts/PostList";
import { PostCard } from "@/components/posts/PostCard";

const FeaturePosts = ({ postList }: { postList: PostCard[] }) => {
  return (
    <HomeSection>
      <SectionTitle>주요 게시물</SectionTitle>
      <PostList postList={postList} type="vertical" propsCss={S.list} />
    </HomeSection>
  );
};
const S = {
  list: css`
    margin: 24px -24px 0;
  `,
};

export default FeaturePosts;
