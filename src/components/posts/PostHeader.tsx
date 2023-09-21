import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subTitle?: string;
  date: string;
  headerImage?: string;
  category: string;
};

const PostHeader = ({
  title,
  subTitle,
  date,
  headerImage,
  category,
}: Props) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString("ko-KR", dateOptions);

  return (
    <header css={S}>
      {headerImage && (
        <Image src={headerImage} alt={title} width={1200} height={500} />
      )}
      <div className="text-area">
        <Link href={`/posts/${category}`}>{category}</Link>
        <h1>{title}</h1>
        {subTitle && <h2>{subTitle}</h2>}
        <div className="definition-item">
          <span className="label">최종 수정일</span>
          <span className="value">{formattedDate}</span>
        </div>
      </div>
    </header>
  );
};
const S = css`
  position: relative;
  padding: 8px 16px;
  height: 160px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
  .text-area {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;
    height: 100%;
  }
  h1 {
    margin-top: auto;
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
