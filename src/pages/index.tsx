import { useState } from "react";
import { getPosts } from "../../libs/posts-util";
import { media } from "@/constants/breakPoints";
import useMediaQuery from "@/hooks/useMediaQuery";
import MyHead from "@/components/common/AppHead";
import AppContainer from "@/container/layouts/AppContainer";
import BackGround from "@/container/layouts/BackGround";
import Profile from "@/container/home/Profile";
import FeaturePostList from "@/container/home/FeaturePostList";
import RecentPostList from "@/container/home/RecentPostList";
type Props = {
  allPostList: any;
  featuredPostList: any;
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
      <Profile setHeaderHide={setHeaderHide} />
      <FeaturePostList postList={featuredPostList} />
      <RecentPostList postList={allPostList} />
    </AppContainer>
  );
};

export const getStaticProps = () => {
  const featuredPostList = getPosts({ filter: "feature" });
  const allPostList = getPosts({});
  return {
    props: {
      allPostList,
      featuredPostList,
    },
  };
};

export default Homepage;
