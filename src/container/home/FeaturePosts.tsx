import Content from "../layouts/Content";
import SectionTitle from "@/components/home/SectionTitle";
import PostList from "@/components/posts/PostList";
import { css } from "@emotion/react";
import HomeSection from "./HomeSection";

const FeaturePosts = () => {
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
const postList = [
  {
    id: "123",
    title: "var 쓰지마..., 그게 뭔데",
    link: "/",
    category: "javascript",
    modifiedDate: "2023년 09월 03일",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus.",
    thumbNailImage: "/images/home/profile.jpg",
  },
  {
    id: "123",
    title: "var 쓰지마..., 그게 뭔데",
    link: "/",
    category: "javascript",
    modifiedDate: "2023년 09월 03일",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus.",
    thumbNailImage: "/images/home/profile.jpg",
  },
  {
    id: "123",
    title: "var 쓰지마..., 그게 뭔데",
    link: "/",
    category: "javascript",
    modifiedDate: "2023년 09월 03일",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus.",
    thumbNailImage: "/images/home/profile.jpg",
  },
  {
    id: "123",
    title: "var 쓰지마..., 그게 뭔데",
    link: "/",
    category: "javascript",
    modifiedDate: "2023년 09월 03일",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus.",
    thumbNailImage: "/images/home/profile.jpg",
  },
];
export default FeaturePosts;
