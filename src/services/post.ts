import { Category } from "@/types/post";
import { handleError } from "@/utils/error";

export const getPostCategoryList = async (): Promise<
  Category[] | undefined
> => {
  try {
    const response = await fetch("/api/post/category");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    handleError("카테고리 정보를 불러오는 데 실패했습니다.");
    return undefined;
  }
};
