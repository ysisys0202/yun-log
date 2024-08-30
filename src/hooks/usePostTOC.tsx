import { useEffect, useState } from "react";

export type Heading = {
  level: number;
  title: string;
  id: string;
};

export const generateTitleId = (title: string) => {
  return title
    .replace(/[^\p{L}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

const extractHeadings = (postContent: string) => {
  const content = postContent.split("\n");
  const headings = content
    .filter((text) => text[0] === "#")
    .map((heading) => {
      const splitedHeading = heading.split(" ");
      return {
        level: splitedHeading[0].length,
        title: splitedHeading.slice(1).join(" "),
        id: generateTitleId(splitedHeading.slice(1).join(" ")),
      };
    });
  return headings;
};

const usePostTOC = (postContent: string) => {
  const [TOC, setTOC] = useState<Heading[]>([]);
  useEffect(() => {
    setTOC(extractHeadings(postContent));
  }, []);

  return { TOC };
};

export default usePostTOC;
