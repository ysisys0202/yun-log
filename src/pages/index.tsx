import Profile from "@/container/home/Profile";
import Content from "@/container/layouts/Content";
import React from "react";

const Homepage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content>
      <h1 className="visually-hidden">이윤슬 블로그 메인 페이지</h1>
      <Profile />
      {/* 소개 섹션 */}
      {/* 주요 게시물 */}
      {/* 모든 게시물  */}
    </Content>
  );
};

export default Homepage;
