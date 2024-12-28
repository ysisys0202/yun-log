import { useState } from "react";
import { getPosts } from "libs/post";
import { media } from "@/constants/breakPoints";
import useMediaQuery from "@/hooks/useMediaQuery";
import MyHead from "@/components/common/AppHead";
import AppContainer from "@/container/layouts/AppContainer";
import BackGround from "@/container/layouts/BackGround";
import Hero from "@/container/home/Hero";
import FeaturePostList from "@/container/home/FeaturePostList";
import RecentPostList from "@/container/home/RecentPostList";
import { PostData } from "@/types/post";
type Props = {
  allPostList: PostData[];
  featuredPostList: PostData[];
};

const Homepage = ({ allPostList, featuredPostList }: Props) => {
  const isMobile = !useMediaQuery(media.md);
  const [headerHide, setHeaderHide] = useState<boolean>(
    isMobile ? false : true
  );
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
  const featuredPostList = await getPosts({ filter: "feature" });
  const allPostList = await getPosts({});
  return {
    props: {
      allPostList,
      featuredPostList,
    },
  };
};

export default Homepage;
