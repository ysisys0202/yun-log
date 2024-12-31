import type { NextApiRequest, NextApiResponse } from "next";
import { PostFilter, PostSort, getPosts } from "libs/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { categoryId, categoryName, sort, filter, size } = req.query;
    const posts = await getPosts({
      categoryId: categoryId as string,
      categoryName: categoryName as string,
      sort: sort as PostSort | undefined,
      filter: filter as PostFilter | undefined,
      size: size as number | undefined,
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "포스트 목록을 불러오는데 실패했습니다." });
  }
}
