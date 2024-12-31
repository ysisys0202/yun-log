import { useEffect, useState } from "react";
import { getPosts } from "libs/post";
import PostListContainer from "@/container/posts/List";
import MyHead from "@/components/common/AppHead";
import { PostData } from "@/types/post";
import AppContainer from "@/container/layouts/AppContainer";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import createQueryKey from "@/utils/createQueryKey";
import QUERY_KEYS from "@/react-query/queryKey";
import { usePostsQuery } from "@/react-query/queries/post";

type Props = {
  dehydratedState: DehydratedState;
};
const AllPosts = ({}: Props) => {
  const { data: allPostList } = usePostsQuery({});

  return (
    <AppContainer>
      <MyHead
        title="모든 게시글 목록"
        description="YUN 개발 블로그의 모든 게시글 목록입니다."
      />
      {<PostListContainer postList={allPostList} />}
    </AppContainer>
  );
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: createQueryKey(QUERY_KEYS.POSTS, [null, null, null, null, null]),
    queryFn: () => getPosts({}),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default AllPosts;
