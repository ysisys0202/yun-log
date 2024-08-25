import { useState, useEffect } from "react";
import { fetchCategories } from "@/services/categories";
import { Category } from "@/types/category";
import { useRouter } from "next/router";

type NavCategory = {
  link: string;
} & Category;

const useNavCategories = () => {
  const [navCategories, setNavCategories] = useState<NavCategory[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        if (fetchedCategories) {
          const allCategoryLength = fetchedCategories.reduce(
            (acc, current) => acc + current.fileLength,
            0
          );
          const navCategories = [
            {
              name: "전체",
              fileLength: allCategoryLength,
              link: "/posts",
            },
            ...fetchedCategories.map(({ name, fileLength }) => ({
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
