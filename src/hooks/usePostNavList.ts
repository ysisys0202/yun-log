import { useCallback, useEffect, useState } from "react";
import { getPostCategoryList } from "@/services/post";
import { PostNav } from "@/types/post";
import { handleError } from "@/utils/error";

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
      handleError("네이게이션 정보를 불러오는 데 실패했습니다.");
    }
  }, []);

  useEffect(() => {
    initPostCategoryList();
  }, []);

  return { postNavList };
};

export default usePostNavList;
