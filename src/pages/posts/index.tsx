import { useEffect, useState } from "react";
import { getPosts } from "../../../libs/posts-util";
import PostListContainer from "@/container/posts/List";
import MyHead from "@/components/common/MyHead";
import { PostData } from "@/types/post";

const AllPosts = ({ allPostList }: { allPostList: PostData[] }) => {
  return (
    <>
      <MyHead
        title="모든 게시물 목록"
        description="이윤슬 개발 블로그의 모든 포스트 목록입니다."
      />
      {<PostListContainer postList={allPostList} />}
    </>
  );
};

export const getStaticProps = () => {
  const allPostList = getPosts({});
  return {
    props: {
      allPostList,
    },
  };
};
export default AllPosts;
