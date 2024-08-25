import { css } from "@emotion/react";
import HomeSection from "@/container/home/HomeSection";
import SectionTitle from "@/components/home/SectionTitle";
import PostList from "@/components/posts/PostList";

const RecentPosts = ({ postList }: { postList: any }) => {
  return (
    <HomeSection>
      <SectionTitle>최근 게시물</SectionTitle>
      <PostList postList={postList} propsCss={S.list} />
    </HomeSection>
  );
};

const S = {
  list: css`
    margin: 48px -24px 0;
  `,
};
export default RecentPosts;
