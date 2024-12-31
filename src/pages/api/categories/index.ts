import { NextApiRequest, NextApiResponse } from "next";
import { getCategories } from "libs/post";
import convertSeconds from "@/utils/convertSeconds";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const categories = await getCategories();
      res.setHeader(
        "Cache-Control",
        `public, max-age=${convertSeconds({ minutes: 30 })}`
      );
      res.status(200).json(categories);
    } else {
      // NOTE: 요청 메소드가 GET이 아닐 경우 처리
      res.status(405).end();
    }
  } catch (error) {
    console.error("카테고리 목록을 불러오는 데 실패했습니다.", error);
    res
      .status(500)
      .json({ error: "카테고리 목록을 불러오는 데 실패했습니다." });
  }
};

export default handler;
