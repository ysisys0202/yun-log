import { API_BASE_URL } from "@/constants/path";
import { Category, PostData } from "@/types/post";
import createQueryString from "@/utils/createQueryString";
import { handleError } from "@/utils/error";
import { GetPostsParams, getPostDataParams } from "libs/post";

export const fetchPosts = async ({
  categoryName,
  categoryId,
  sort,
  filter,
  size,
}: GetPostsParams): Promise<PostData[] | undefined> => {
  try {
    const queryString = createQueryString({
      categoryId,
      categoryName,
      sort,
      filter,
      size,
    });
    const response = await fetch(`${API_BASE_URL}/api/posts${queryString}`);
    if (!response.ok) {
      handleError("포스트 목록을 불러오는 데 실패했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    handleError("service 포스트 목록을 불러오는 데 실패했습니다.");
  }
};

export const fetchPost = async ({
  categoryName,
  categoryId,
  postId,
}: getPostDataParams): Promise<PostData | undefined> => {
  try {
    const queryString = createQueryString({
      categoryId,
      categoryName,
      postId,
    });
    const response = await fetch(
      `${API_BASE_URL}/api/posts/detail${queryString}`
    );
    if (!response.ok) {
      handleError("포스트를 불러오는 데 실패했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    handleError("포스트를 불러오는 데 실패했습니다.");
  }
};

export const fetchPostCategories = async (): Promise<
  Category[] | undefined
> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/categories`);
    if (!response.ok) {
      handleError("카테고리 정보를 불러오는 데 실패했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    handleError("카테고리 정보를 불러오는 데 실패했습니다.");
  }
};
