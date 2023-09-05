import React from "react";
import Logo from "/public/logo/logo.svg";
import Tag from "@/components/common/Tag";
import TagList from "@/components/common/TagList";
import { css } from "@emotion/react";
import { colors, gray } from "@/constants/colors";
import { motion, useScroll } from "framer-motion";
import CircularProgressBar from "@/components/common/CircularProgressBar";
import Link from "next/link";
const SideMenu = () => {
  const { scrollYProgress } = useScroll();
  return (
    <aside css={S}>
      <header>
        <Link href="/" className="logo">
          <Logo width="140" height="140" fill={colors.white} />
          <strong className="visually-hidden">이윤슬 개발 블로그</strong>
        </Link>
      </header>
      <TagList className="tab-list">
        {tagList.map((tagItem) => (
          <Tag key={tagItem.label} variant="outlined" textColor="#247774">
            #{tagItem.label}
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
