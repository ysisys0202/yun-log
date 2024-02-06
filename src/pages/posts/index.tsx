import PostList from "@/components/posts/PostList";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../../libs/posts-util";
import PostListContainer from "@/container/posts/List";
import { PostCardType } from "@/components/posts/PostCard";
import { GetStaticPropsContext } from "next";
import MyHead from "@/components/common/MyHead";

const AllPosts = ({ allPostList }: { allPostList: PostCardType[] }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      <MyHead
        title="모든 게시물 목록"
        description="이윤슬 개발 블로그의 모든 포스트 목록입니다."
      />
      {mount && <PostListContainer postList={allPostList} />}
    </>
  );
};

export function getStaticProps() {
  const allPostList = getPosts();
  return {
    props: {
      allPostList,
    },
  };
}
export default AllPosts;
