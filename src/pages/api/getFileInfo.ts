import { NextApiRequest, NextApiResponse } from "next";
import { getCategories } from "../../../libs/posts-util";

const getCategoriesInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const categories = getCategories();
      res.status(200).json(categories);
    } else {
      // 요청 메소드가 GET이 아닐 경우 처리
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.error("Error in categoriesInfo API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getCategoriesInfo;
