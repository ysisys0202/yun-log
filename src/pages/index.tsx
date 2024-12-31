import { useState } from "react";
import { media } from "@/constants/breakPoints";
import useMediaQuery from "@/hooks/useMediaQuery";
import MyHead from "@/components/common/AppHead";
import AppContainer from "@/container/layouts/AppContainer";
import BackGround from "@/container/layouts/BackGround";
import Hero from "@/container/home/Hero";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import QUERY_KEYS from "@/react-query/queryKey";
import { fetchPosts } from "@/services/post";
import { usePostsQuery } from "@/react-query/queries/post";
import FeaturePostList from "@/container/home/FeaturePostList";
import RecentPostList from "@/container/home/RecentPostList";
import createQueryKey from "@/utils/createQueryKey";
type Props = {
  dehydratedState: DehydratedState;
};

const Homepage = ({}: Props) => {
  const isMobile = !useMediaQuery(media.md);
  const [headerHide, setHeaderHide] = useState<boolean>(
    isMobile ? false : true
  );
  const { data: featuredPostList } = usePostsQuery({
    filter: "feature",
    size: 8,
  });
  const { data: allPostList } = usePostsQuery({
    size: 10,
  });

  return (
    <AppContainer headerHide={headerHide}>
      <MyHead title="홈" />
      <BackGround />
      <Hero setHeaderHide={setHeaderHide} />
      <FeaturePostList postList={featuredPostList} />
      <RecentPostList postList={allPostList} />
    </AppContainer>
  );
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: createQueryKey(QUERY_KEYS.POSTS, [
      null,
      null,
      null,
      "feature",
      8,
    ]),
    queryFn: () => fetchPosts({ filter: "feature", size: 8 }),
  });

  await queryClient.prefetchQuery({
    queryKey: createQueryKey(QUERY_KEYS.POSTS, [null, null, null, null, 8]),
    queryFn: () => fetchPosts({ size: 10 }),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Homepage;
