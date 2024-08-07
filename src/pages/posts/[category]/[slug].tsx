import { GetStaticPropsContext } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getPostData, getPosts } from "../../../../libs/posts-util";
import { PostDetailType } from "@/types/post";
import MyHead from "@/components/common/MyHead";
import PostContent from "@/components/posts/PostContent";

type Props = {
  post: PostDetailType;
  mdx: MDXRemoteSerializeResult;
};
const PostDetail = ({ post, mdx }: Props) => {
  return (
    <>
      <MyHead
        title={post.title}
        description={post.intro}
        ogImage={post.thumbNailImage}
      />
      <PostContent {...{ post, mdx }} />
    </>
  );
};

export function getStaticPaths() {
  const postFiles = getPosts();

  return {
    paths: postFiles.map((post: any) => `/posts/${post.category}/${post.slug}`),
    fallback: false,
  };
}
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const category = context.params?.category as string;
  const slug = context.params?.slug as string;
  const postData = getPostData(category, slug);
  const mdx = await serialize(postData.content, {
    parseFrontmatter: true,
  });

  return {
    props: {
      post: postData,
      mdx,
    },
  };
};

export default PostDetail;
