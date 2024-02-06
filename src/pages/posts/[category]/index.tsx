import PostListContainer from "@/container/posts/List";
import React, { useEffect, useState } from "react";
import { getCategories, getPosts } from "../../../../libs/posts-util";
import { GetStaticPropsContext } from "next";
import { PostCardType } from "@/components/posts/PostCard";
import MyHead from "@/components/common/MyHead";
import { categoriesMap } from "@/constants/category";

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
  return (
    <>
      <MyHead
        title={`${categoriesMap.get(category)} 카테고리 게시물 목록`}
        description={`이윤슬 개발 블로그의 ${categoriesMap.get(
          category
        )} 카테고리 게시물 목록입니다.`}
      />
      {mount && <PostListContainer postList={postList} />}
    </>
  );
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
