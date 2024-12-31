import { useQuery } from "@tanstack/react-query";
import { GetPostsParams, getPostDataParams } from "libs/post";
import { fetchPost, fetchPostCategories, fetchPosts } from "@/services/post";
import QUERY_KEYS from "@/react-query/queryKey";
import convertSeconds from "@/utils/convertSeconds";

export const usePostsQuery = ({
  categoryName,
  categoryId,
  sort,
  filter,
  size,
}: GetPostsParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS, categoryName, categoryId, sort, filter, size],
    queryFn: () => {
      return fetchPosts({ categoryName, categoryId, sort, filter });
    },
  });
};

export const usePostQuery = ({
  categoryName,
  categoryId,
  postId,
}: getPostDataParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POST, categoryName, postId],
    queryFn: () => {
      return fetchPost({ categoryName, categoryId, postId });
    },
  });
};

export const usePostCategoriesQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.POST_CATEGORIES],
    queryFn: () => {
      return fetchPostCategories();
    },
    staleTime: convertSeconds({ minutes: 5 }) * 1000,
  });
};
