import { gray } from "@/constants/colors";
import FeaturePosts from "@/container/home/FeaturePosts";
import Profile from "@/container/home/Profile";
import RecentPosts from "@/container/home/RecentPosts";
import { css } from "@emotion/react";
import React from "react";
import { getAllPosts, getFeaturedPosts } from "../../lib/posts-util";

const Homepage = ({
  featuredPostList,
  allPostList,
}: {
  featuredPostList: any;
  allPostList: any;
}) => {
  return (
    <>
      <h1 className="visually-hidden">이윤슬 블로그 메인 페이지</h1>
      <section className="top-section" css={S}>
        <Profile />
        <FeaturePosts postList={featuredPostList} />
      </section>
      <RecentPosts postList={allPostList} />
    </>
  );
};
const S = css`
  display: flex;
  border-bottom: 1px solide ${gray.border};
  height: 50vh;
  min-height: 600px;
`;
export function getStaticProps() {
  const featuredPostList = getFeaturedPosts();
  const allPostList = getAllPosts();
  return {
    props: {
      allPostList,
      featuredPostList,
    },
  };
}
export default Homepage;
