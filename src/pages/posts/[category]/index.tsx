import { GetStaticPropsContext } from "next";
import { getCategories, getPosts } from "libs/post";
import { PostData } from "@/types/post";
import AppContainer from "@/container/layouts/AppContainer";
import PostListContainer from "@/container/posts/List";
import MyHead from "@/components/common/AppHead";
import { handleError } from "@/utils/error";

type Props = {
  postList: PostData[];
  categoryName: string;
};

const FilteredPostList = ({ postList, categoryName }: Props) => {
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
  const currentCategoryName = context.params?.category as string;
  const currentCategroryId = categories.filter(
    (category) => category && category.name === currentCategoryName
  )[0]?.id;
  if (!currentCategroryId) {
    handleError("카테고리를 찾을 수 없습니다.");
  }
  const postList = await getPosts({
    categoryId: currentCategroryId,
    categoryName: currentCategoryName,
  });
  return {
    props: {
      postList,
      categoryName: currentCategoryName,
    },
  };
};

export default FilteredPostList;
