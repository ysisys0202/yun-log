import { useCallback, useEffect, useState } from "react";
import { getPostCategoryList } from "@/services/post";
import { PostNav } from "@/types/post";

const usePostNavList = () => {
  const [postNavList, setPostNavList] = useState<PostNav[] | undefined>();

  const initPostCategoryList = useCallback(async () => {
    try {
      const postCategoryList = await getPostCategoryList();
      if (!postCategoryList) {
        return;
      }
      const allCategoryLength = postCategoryList.reduce(
        (acc, current) => acc + current.fileLength,
        0
      );
      setPostNavList([
        {
          id: "all",
          name: "전체",
          fileLength: allCategoryLength,
          link: "/posts",
        },
        ...postCategoryList.map(({ id, name, fileLength }) => ({
          id,
          name,
          fileLength,
          link: `/posts/${name}`,
        })),
      ]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  useEffect(() => {
    initPostCategoryList();
  }, []);

  return { postNavList };
};

export default usePostNavList;
