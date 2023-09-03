import { gray } from "@/constants/colors";
import FeaturePosts from "@/container/home/FeaturePosts";
import Profile from "@/container/home/Profile";
import RecentPosts from "@/container/home/RecentPosts";
import Content from "@/container/layouts/Content";
import { css } from "@emotion/react";
import React from "react";

const Homepage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content>
      <h1 className="visually-hidden">이윤슬 블로그 메인 페이지</h1>
      <section className="top-section" css={S}>
        <Profile />
        <FeaturePosts />
      </section>
      <RecentPosts />
    </Content>
  );
};
const S = css`
  display: flex;
  border-bottom: 1px solide ${gray.border};
  height: 50vh;
  min-height: 600px;
`;
export default Homepage;
