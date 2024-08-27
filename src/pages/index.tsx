import { getPosts } from "../../libs/posts-util";
import MyHead from "@/components/common/AppHead";
import Profile from "@/container/home/Profile";
import FeaturePostList from "@/container/home/FeaturePostList";
import RecentPostList from "@/container/home/RecentPostList";
import AppContainer from "@/container/layouts/AppContainer";
import { useState } from "react";

type Props = {
  allPostList: any;
  featuredPostList: any;
};

const Homepage = ({ allPostList, featuredPostList }: Props) => {
  const [headerHide, setHeaderHide] = useState<boolean>(true);
  return (
    <AppContainer headerHide={headerHide}>
      <MyHead title="홈" />
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
