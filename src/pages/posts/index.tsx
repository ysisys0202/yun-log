import PostList from "@/components/posts/PostList";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../../lib/posts-util";
import PostListContainer from "@/container/posts/List";
import { PostCardType } from "@/components/posts/PostCard";
import { GetStaticPropsContext } from "next";

const AllPosts = ({ allPostList }: { allPostList: PostCardType[] }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  return mount && <PostListContainer postList={allPostList} />;
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
