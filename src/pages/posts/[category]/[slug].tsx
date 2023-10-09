import { getPostData, getPosts } from "../../../../lib/posts-util";
import { GetStaticPropsContext } from "next";
import PostContent from "@/components/posts/PostContent";
import MyHead from "@/components/common/MyHead";
import { PostDetailType } from "@/types/post";

const PostDetail = ({ post }: { post: PostDetailType }) => {
  return (
    <>
      <MyHead
        title={post.title}
        description={post.excerpt}
        ogImage={post.thumbNailImage}
      />
      <PostContent post={post} />;
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
