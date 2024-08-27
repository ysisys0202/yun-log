import PostListContainer from "@/container/posts/List";
import React, { useEffect, useState } from "react";
import { getCategories, getPosts } from "../../../../libs/posts-util";
import { GetStaticPropsContext } from "next";
import MyHead from "@/components/common/AppHead";
import { Category } from "@/types/category";
import { PostData } from "@/types/post";
import AppContainer from "@/container/layouts/AppContainer";

const FilteredPostList = ({
  postList,
  category,
}: {
  postList: PostData[];
  category: Category;
}) => {
  return (
    <AppContainer>
      <MyHead
        title={`${category} 게시글 목록`}
        description={`${category} 게시글 목록입니다.`}
      />
      <PostListContainer postList={postList} />
    </AppContainer>
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
