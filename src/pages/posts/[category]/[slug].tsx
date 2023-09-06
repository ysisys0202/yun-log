import { useRouter } from "next/router";
import React, { useReducer } from "react";
import { getPostData, getPostFiles } from "../../../../lib/posts-util";
import { GetStaticPropsContext } from "next";
import PostContent from "@/components/posts/PostContent";
import Content from "@/container/layouts/Content";

const PostDetail = ({ post }: { post: any }) => {
  return (
    <Content>
      <PostContent post={post} />
    </Content>
  );
};

export function getStaticPaths() {
  // const postFiles = getPostFiles();
  // const slugs = postFiles.map(
  //   (postFile: any) => postFile.name && postFile.name.replace(/\.md$/, "")
  // );
  return {
    paths: [],
    // paths: slugs.map((slug: string) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
export function getStaticProps(context: GetStaticPropsContext) {
  if (!context || !context.params) {
    return;
  }
  const category = context.params.category;
  const slug = context.params.slug;
  if (typeof category !== "string" || typeof slug !== "string") {
    return;
  }
  const postData = getPostData(category, slug);
  return {
    props: {
      post: postData,
    },
  };
}

export default PostDetail;
