import { useEffect, useState } from "react";
import { getPosts } from "../../../libs/posts-util";
import PostListContainer from "@/container/posts/List";
import MyHead from "@/components/common/AppHead";
import { PostData } from "@/types/post";
import AppContainer from "@/container/layouts/AppContainer";

const AllPosts = ({ allPostList }: { allPostList: PostData[] }) => {
  return (
    <AppContainer>
      <MyHead
        title="모든 게시글 목록"
        description="YUN 개발 블로그의 모든 게시글 목록입니다."
      />
      {<PostListContainer postList={allPostList} />}
    </AppContainer>
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
