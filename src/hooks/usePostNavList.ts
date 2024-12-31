import { useCallback, useEffect, useState } from "react";
import { fetchPostCategories } from "@/services/post";
import { PostNav } from "@/types/post";
import { handleError } from "@/utils/error";
import { usePostCategoriesQuery } from "@/react-query/queries/post";

const usePostNavList = () => {
  const { data } = usePostCategoriesQuery();
  if (!data) {
    return { postNavList: [] as PostNav[] };
  }
  const allPostLength = data.reduce(
    (acc, current) => acc + current.fileLength,
    0
  );

  const postNavList: PostNav[] = [
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
  ];
  return { postNavList };
};

export default usePostNavList;
