import { getPosts } from "../../libs/posts-util";
import MyHead from "@/components/common/MyHead";
import Profile from "@/container/home/Profile";
import FeaturePostList from "@/container/home/FeaturePostList";
import RecentPostList from "@/container/home/RecentPostList";

type Props = {
  allPostList: any;
  featuredPostList: any;
};

const Homepage = ({ allPostList, featuredPostList }: Props) => {
  return (
    <>
      <MyHead title="홈" />
      <Profile />
      <FeaturePostList postList={featuredPostList} />
      <RecentPostList postList={allPostList} />
    </>
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
