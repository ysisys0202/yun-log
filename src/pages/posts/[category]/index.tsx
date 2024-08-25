import PostListContainer from "@/container/posts/List";
import React, { useEffect, useState } from "react";
import { getCategories, getPosts } from "../../../../libs/posts-util";
import { GetStaticPropsContext } from "next";
import { PostCard } from "@/components/posts/PostCard";
import MyHead from "@/components/common/MyHead";
import { Category } from "@/types/category";

const FilteredPostList = ({
  postList,
  category,
}: {
  postList: PostCard[];
  category: Category;
}) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      <MyHead
        title={`${category} 게시글 목록`}
        description={`${category} 게시글 목록입니다.`}
      />
      {mount && <PostListContainer postList={postList} />}
    </>
  );
};

export const getStaticPaths = () => {
  const categories = getCategories();
  const paths = categories.map((category) => `/posts/${category.name}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context: GetStaticPropsContext) => {
  const category = context.params?.category as string;
  const postList = getPosts({ category });
  return {
    props: {
      postList,
      category,
    },
  };
};
export default FilteredPostList;
