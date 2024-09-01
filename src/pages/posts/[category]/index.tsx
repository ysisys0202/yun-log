import PostListContainer from "@/container/posts/List";
import React, { useEffect, useState } from "react";
import { getCategories, getPosts } from "../../../../libs/posts-util";
import { GetStaticPropsContext } from "next";
import MyHead from "@/components/common/AppHead";
import { PostData, Category } from "@/types/post";
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
  const categories = getCategories();
  const currentCategoryName = context.params?.category as string;
  const currentCategroryId = categories.filter(
    (category) => category.name === currentCategoryName
  )[0].id;
  if (!currentCategroryId) {
    throw new Error("카테고리를 찾을 수 없습니다.");
  }
  const postList = getPosts({
    categoryId: currentCategroryId,
    categoryName: currentCategoryName,
  });
  return {
    props: {
      postList,
      currentCategoryName,
    },
  };
};
export default FilteredPostList;
