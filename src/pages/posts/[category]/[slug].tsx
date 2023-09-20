import { useRouter } from "next/router";
import React, { useReducer } from "react";
import {
  getCategories,
  getPostData,
  getPostFiles,
  getPosts,
} from "../../../../lib/posts-util";
import { GetStaticPropsContext } from "next";
import PostContent from "@/components/posts/PostContent";

const PostDetail = ({ post }: { post: any }) => {
  return <PostContent post={post} />;
};

export function getStaticPaths() {
  const postFiles = getPosts();

  return {
    paths: postFiles.map((post: any) => `/posts/${post.category}/${post.slug}`),
    fallback: false,
  };
}
export function getStaticProps(context: GetStaticPropsContext) {
  const category = context.params?.category as string;
  const slug = context.params?.slug as string;

  const postData = getPostData(category, slug);
  return {
    props: {
      post: postData,
    },
  };
}

export default PostDetail;
