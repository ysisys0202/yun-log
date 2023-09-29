import { gray } from "@/constants/colors";
import FeaturePosts from "@/container/home/FeaturePosts";
import Profile from "@/container/home/Profile";
import RecentPosts from "@/container/home/RecentPosts";
import { css } from "@emotion/react";
import { getFeaturedPosts, getPosts } from "../../lib/posts-util";
import { media } from "@/constants/breakPoints";
import MyHead from "@/components/common/MyHead";

const Homepage = ({
  featuredPostList,
  allPostList,
}: {
  featuredPostList: any;
  allPostList: any;
}) => {
  return (
    <>
      <MyHead title="홈" />
      <h1 className="visually-hidden">이골더 블로그 메인 페이지</h1>
      <section className="top-section" css={S}>
        <Profile />
        <FeaturePosts postList={featuredPostList} />
      </section>
      <RecentPosts postList={allPostList} />
    </>
  );
};
const S = css`
  @media ${media.md} {
    display: flex;
    border-bottom: 1px solide ${gray.border};
    height: 50vh;
    min-height: 600px;
  }
`;
export function getStaticProps() {
  const featuredPostList = getFeaturedPosts();
  const allPostList = getPosts();
  return {
    props: {
      allPostList,
      featuredPostList,
    },
  };
}
export default Homepage;
