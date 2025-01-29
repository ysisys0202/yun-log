import type { NextApiRequest, NextApiResponse } from "next";
import { getPostData } from "libs/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { categoryId, categoryName, postId } = req.query;
    const post = await getPostData({
      categoryId: categoryId as string,
      categoryName: categoryName as string,
      postId: postId as string,
    });
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Post 데이터를 불러오는데 실패했습니다." });
  }
}
