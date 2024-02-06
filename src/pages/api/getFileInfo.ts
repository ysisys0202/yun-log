import { getCategories, getPostFiles } from "../../../libs/posts-util";

export default async function categoriesInfo(req: any, res: any) {
  try {
    if (req.method === "GET") {
      const categories = getCategories();
      const categoriesInfo = categories.map((category) => {
        const postFiles = getPostFiles(category);
        return {
          name: category,
          fileLength: postFiles.length,
        };
      });
      res.status(200).json(categoriesInfo);
    } else {
      // 요청 메소드가 GET이 아닐 경우 처리
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.error("Error in categoriesInfo API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
