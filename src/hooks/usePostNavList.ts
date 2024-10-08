import { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { postNavListState } from "@/store/postState";
import { getPostCategoryList } from "@/services/post";

const usePostNavList = () => {
  const [postNavList, setPostNavList] = useRecoilState(postNavListState);

  const initPostCategoryList = async () => {
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
  };

  useEffect(() => {
    if (postNavList) {
      return;
    }
    initPostCategoryList();
  }, []);

  return { postNavList };
};

export default usePostNavList;
