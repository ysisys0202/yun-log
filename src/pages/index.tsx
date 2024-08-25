import { getPosts } from "../../libs/posts-util";
import FeaturePosts from "@/container/home/FeaturePosts";
import Profile from "@/container/home/Profile";
import RecentPosts from "@/container/home/RecentPosts";
import MyHead from "@/components/common/MyHead";

type Props = {
  allPostList: any;
  featuredPostList: any;
};

const Homepage = ({ allPostList, featuredPostList }: Props) => {
  return (
    <>
      <MyHead title="홈" />
      <Profile />
      <FeaturePosts postList={featuredPostList} />
      <RecentPosts postList={allPostList} />
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
