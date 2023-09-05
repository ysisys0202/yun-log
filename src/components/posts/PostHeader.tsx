import { css } from "@emotion/react";
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  date: string;
  headerImage?: string;
};
const PostHeader = ({ title, date, headerImage }: Props) => {
  return (
    <header css={S}>
      {headerImage && (
        <Image src={headerImage} alt={title} width={1200} height={500} />
      )}
      <div className="text-area">
        <h1>{title}</h1>
        <div className="definition-item">
          <span className="label">최종 수정일</span>
          <span className="value">2023년 2월 2일</span>
        </div>
      </div>
    </header>
  );
};
const S = css`
  position: relative;
  height: 160px;
  .text-area {
    display: flex;
    justify-content: space-between;
    align-items: end;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
  }
  h1 {
    font-size: 36px;
    line-height: 1.4;
  }
  .definition-item {
    font-size: 14px;
    line-height: 1.4;
    opacity: 0.8;
    .label {
      &::after {
        content: ":";
        margin: 0 4px;
      }
    }
  }
`;
export default PostHeader;
``;
