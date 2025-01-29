import { GetPostsParams, getPostDataParams } from "libs/post";
import { Category, PostData } from "@/types/post";
import fetcher from "@/utils/fetcher";
import createQueryString from "@/utils/createQueryString";

export const fetchPosts = async ({
  categoryName,
  categoryId,
  sort,
  filter,
  size,
}: GetPostsParams): Promise<PostData[] | undefined> => {
  const queryString = createQueryString({
    categoryId,
    categoryName,
    sort,
    filter,
    size,
  });
  return fetcher(`/posts${queryString}`);
};

export const fetchPost = async ({
  categoryName,
  categoryId,
  postId,
}: getPostDataParams): Promise<PostData | undefined> => {
  const queryString = createQueryString({
    categoryId,
    categoryName,
    postId,
  });
  return fetcher(`/posts/detail${queryString}`);
};

export const fetchPostCategories = async (): Promise<
  Category[] | undefined
> => {
  return fetcher("/categories");
};
