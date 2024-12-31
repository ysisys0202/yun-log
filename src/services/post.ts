import { Category } from "@/types/post";
import { handleError } from "@/utils/error";

export const fetchPostCategories = async (): Promise<
  Category[] | undefined
> => {
  try {
    const response = await fetch("/api/categories");
    if (!response.ok) {
      handleError("카테고리 정보를 불러오는 데 실패했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    handleError("카테고리 정보를 불러오는 데 실패했습니다.");
  }
};
