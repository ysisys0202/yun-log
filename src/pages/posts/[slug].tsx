import { useRouter } from "next/router";
import React, { useReducer } from "react";
import { getPostData, getPostsFiles } from "../../../lib/posts-util";
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
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((postFileName: string) =>
    postFileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug: string) => ({ params: { slug: slug } })),
    fallback: true,
  };
}
export function getStaticProps(context: GetStaticPropsContext) {
  if (!context || !context.params) {
    return;
  }
  const slug = context.params.slug;
  if (typeof slug !== "string") {
    return;
  }
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
  };
}

export default PostDetail;
