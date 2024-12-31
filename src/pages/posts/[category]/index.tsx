import { GetStaticPropsContext } from "next";
import { getCategories, getPosts } from "libs/post";
import AppContainer from "@/container/layouts/AppContainer";
import PostListContainer from "@/container/posts/List";
import MyHead from "@/components/common/AppHead";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import createQueryKey from "@/utils/createQueryKey";
import QUERY_KEYS from "@/react-query/queryKey";
import { usePostsQuery } from "@/react-query/queries/post";

type Props = {
  dehydratedState: DehydratedState;
  categoryName: string;
  categoryId: string;
};

const FilteredPostList = ({ categoryName, categoryId }: Props) => {
  const { data: postList } = usePostsQuery({ categoryName, categoryId });

  return (
    <AppContainer>
      <MyHead
        title={`${categoryName} 게시글 목록`}
        description={`${categoryName} 게시글 목록입니다.`}
      />
      <PostListContainer postList={postList} />
    </AppContainer>
  );
};

export const getStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categories.map((category) => `/posts/${category?.name}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const categories = await getCategories();
  const categoryName = context.params?.category as string;
  const categoryId = categories.filter(
    (compareCategory) =>
      compareCategory && compareCategory.name === categoryName
  )[0]?.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: createQueryKey(QUERY_KEYS.POSTS, [
      categoryName,
      categoryId,
      null,
      null,
      null,
    ]),
    queryFn: () => getPosts({}),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      categoryName,
      categoryId,
    },
  };
};

export default FilteredPostList;
