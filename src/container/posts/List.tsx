import SectionTitle from "@/components/home/SectionTitle";
import { PostCard } from "@/components/posts/PostCard";
import PostList from "@/components/posts/PostList";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

const PostListContainer = ({ postList }: { postList: PostCard[] }) => {
  const router = useRouter();
  const query = router.query;
  const currentCategory = query.category as string;
  return (
    <div css={S.self}>
      <SectionTitle>{currentCategory ?? "전체"}</SectionTitle>
      <PostList postList={postList} propsCss={S.list} />
    </div>
  );
};

const S = {
  self: css`
    padding: 40px 48px;
  `,
  list: css`
    margin: 24px -48px;
  `,
};
export default PostListContainer;
