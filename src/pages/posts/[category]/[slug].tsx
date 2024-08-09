import { GetStaticPropsContext } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getPostData, getPosts } from "../../../../libs/posts-util";
import { PostDetailType } from "@/types/post";
import MyHead from "@/components/common/MyHead";
import PostContent from "@/components/posts/PostContent";
import remarkGfm from "remark-gfm";

type Props = {
  post: PostDetailType;
  mdx: MDXRemoteSerializeResult;
};

const PostDetail = ({ post, mdx }: Props) => {
  console.log(mdx);
  return (
    <>
      <MyHead
        title={post.title}
        description={post.createdAt}
        ogImage={post.thumbNailImage}
      />
      <PostContent {...{ post, mdx }} />
    </>
  );
};

export const getStaticPaths = async () => {
  const postFiles = getPosts();

  return {
    paths: postFiles.map((post: any) => `/posts/${post.category}/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const category = context.params?.category as string;
  const slug = context.params?.slug as string;
  const postData = getPostData(category, slug);
  const { content } = postData;

  const mdx = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      post: postData,
      mdx,
    },
  };
};

export default PostDetail;
