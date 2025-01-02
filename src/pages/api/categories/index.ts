import { NextApiRequest, NextApiResponse } from "next";
import { getCategories } from "libs/post";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const categories = await getCategories();
      res.status(200).json(categories);
    }
  } catch (error) {
    console.error("카테고리 목록을 불러오는 데 실패했습니다.", error);
    res
      .status(500)
      .json({ error: "카테고리 목록을 불러오는 데 실패했습니다." });
  }
};

export default handler;
