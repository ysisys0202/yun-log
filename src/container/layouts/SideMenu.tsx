import React from "react";
import Logo from "/public/logo/logo.svg";
import Tag from "@/components/common/Tag";
import TagList from "@/components/common/TagList";
import { css } from "@emotion/react";
import { colors, gray } from "@/constants/colors";
const SideMenu = () => {
  return (
    <aside css={S}>
      <header>
        <div className="logo">
          <Logo width="100" height="100" fill={colors.white} />
          <strong className="visually-hidden">이윤슬 개발 블로그</strong>
        </div>
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
  svg {
    transform: translateX(-12px);
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
