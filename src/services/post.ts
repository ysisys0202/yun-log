import { Category } from "@/types/post";

export const getPostCategoryList = async (): Promise<
  Category[] | undefined
> => {
  try {
    const response = await fetch("/api/getFileInfo");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
};
