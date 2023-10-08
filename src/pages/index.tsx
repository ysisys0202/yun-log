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
      <Profile />
      <FeaturePosts postList={featuredPostList} />
      <RecentPosts postList={allPostList} />
    </>
  );
};

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
