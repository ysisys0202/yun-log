import { PostNav } from "@/types/post";
import { useCallback, useEffect, useState } from "react";
import { fetchPostCategories } from "@/services/post";

const usePostNavList = () => {
  const [postNavList, setPostNavList] = useState<PostNav[] | undefined>();
  const [fetchStatus, setFetchStatus] = useState<
    "isLoading" | "isSuccess" | "isFail"
  >("isLoading");

  const initPostNavList = useCallback(async () => {
    try {
      const data = await fetchPostCategories();
      if (!data) {
        setPostNavList([]);
        setFetchStatus("isFail");
        return;
      }
      setFetchStatus("isSuccess");
      const allPostLength = data.reduce(
        (acc, current) => acc + current.fileLength,
        0
      );
      setPostNavList([
        {
          id: "all",
          name: "전체",
          fileLength: allPostLength,
          link: "/posts",
        },
        ...data.map(({ id, name, fileLength }) => ({
          id,
          name,
          fileLength,
          link: `/posts/${name}`,
        })),
      ]);
    } catch (error) {
      setFetchStatus("isFail");
    }
  }, []);

  useEffect(() => {
    initPostNavList();
  }, []);

  return { postNavList, fetchStatus };
};

export default usePostNavList;
