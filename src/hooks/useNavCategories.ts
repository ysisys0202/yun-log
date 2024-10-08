import { useState, useEffect } from "react";
import { getPostCategoryList } from "@/services/post";
import { Category } from "@/types/post";

export type NavCategory = {
  link: string;
} & Category;

const useNavCategories = () => {
  const [navCategories, setNavCategories] = useState<NavCategory[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await getPostCategoryList();
        if (fetchedCategories) {
          const allCategoryLength = fetchedCategories.reduce(
            (acc, current) => acc + current.fileLength,
            0
          );
          const navCategories = [
            {
              id: "all",
              name: "전체",
              fileLength: allCategoryLength,
              link: "/posts",
            },
            ...fetchedCategories.map(({ id, name, fileLength }) => ({
              id,
              name,
              fileLength,
              link: `/posts/${name}`,
            })),
          ];

          setNavCategories(navCategories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    loadCategories();
  }, []);

  return { navCategories };
};

export default useNavCategories;
