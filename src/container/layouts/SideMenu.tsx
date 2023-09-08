import React, { useEffect, useState } from "react";
import Logo from "/public/logo/logo.svg";
import Tag from "@/components/common/Tag";
import TagList from "@/components/common/TagList";
import { css } from "@emotion/react";
import { colors, gray } from "@/constants/colors";
import { motion, useScroll, useSpring } from "framer-motion";
import CircularProgressBar from "@/components/common/CircularProgressBar";
import Link from "next/link";
import { CategoriesInfo } from "@/types/post";
import { categoriesMap } from "@/constants/category";
const SideMenu = () => {
  const [cetegoriesInfo, setCategoriesInfo] = useState<null | CategoriesInfo[]>(
    null
  );
  const { scrollYProgress } = useScroll();
  const fetchData = async () => {
    try {
      const response = await fetch("/api/getFileInfo");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCategoriesInfo(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <aside css={S}>
      <header>
        <Link href="/" className="logo">
          <Logo width="140" height="140" fill={colors.white} />
          <strong className="visually-hidden">이윤슬 개발 블로그</strong>
        </Link>
      </header>
      <TagList className="tab-list">
        {cetegoriesInfo &&
          cetegoriesInfo.map((category) => (
            <Tag key={category.name} variant="outlined" textColor="#247774">
              {categoriesMap.get(category.name)} {`(${category.fileLength})`}
            </Tag>
          ))}
      </TagList>
      <footer>
        <span className="scroll-text">
          아래로
          <br />
          스크롤 하세요
        </span>
        <CircularProgressBar
          className="mx-auto"
          size={80}
          progressPer={scrollYProgress}
          baseColor="#fff"
          progressColor="#247774"
        />
      </footer>
    </aside>
  );
};
const S = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  padding: 16px;
  background-color: #b8ddda;
  width: 20%;
  /* min-width: 220px; */
  height: 100dvh;
  border-right: 1px solid ${gray.border};
  .logo {
    svg {
      transform: translate(-24px, -24px);
    }
  }
  .tab-list {
    margin-top: auto;
  }
  footer {
    margin: 160px 0 40px;
    text-align: center;
  }

  .scroll-text {
    font-size: 16px;
    color: ${colors.white};
  }
`;
const tagList = [
  {
    label: "JavaScript",
  },
  {
    label: "HTML",
  },
  { label: "CSS" },
  { label: "Web" },
  { label: "React" },
  { label: "Next" },
];
export default SideMenu;
