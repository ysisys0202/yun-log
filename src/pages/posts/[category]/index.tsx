import PostListContainer from "@/container/posts/List";
import React, { useEffect, useState } from "react";
import { getCategories, getPosts } from "../../../../lib/posts-util";
import { GetStaticPropsContext } from "next";
import { PostCardType } from "@/components/posts/PostCard";

const FilteredPostList = ({
  postList,
  category,
}: {
  postList: PostCardType[];
  category: any;
}) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  return mount && <PostListContainer postList={postList} />;
};

export function getStaticPaths() {
  const categories = getCategories();
  const paths = categories.map((category) => `/posts/${category}`);

  return {
    paths,
    fallback: false,
  };
}
export function getStaticProps(context: GetStaticPropsContext) {
  const category = context.params?.category as string;
  const postList = getPosts(category);
  return {
    props: {
      postList,
      category,
    },
  };
}
export default FilteredPostList;
