import { colors, gray } from "@/constants/colors";
import { css } from "@emotion/react";
import Image from "next/image";
import ViewMoreButton from "./ViewMoreButton";
import Link from "next/link";
type Props = {
  type: "default" | "feature";
  post: any;
};
export type PostCardType = {
  id: string;
  title: string;
  link: string;
  category: string;
  modifiedDate: string;
  description: string;
  thumbNailImage: string;
};
const PostCard = ({ post, type }: Props) => {
  return (
    <Link href={`posts/${post.category}/${post.slug}`}>
      <article css={S} className={`${type}-card`}>
        <div className="text-area">
          <div className="definition-item">
            <span className="label">최종 수정일</span>
            <span className="value">2023년 2월 2일</span>
          </div>
          <h3 className="post-title ">{post.title}</h3>
          {type === "default" && (
            <p className="post-description">{post.description}</p>
          )}
          <ViewMoreButton
            className={`mt-2 ${type === "feature" ? "justify-end" : ""}`}
          />
        </div>
        {type === "default" && (
          <Image
            src="/images/home/profile.jpg"
            alt="aa"
            width="300"
            height="220"
          />
        )}
      </article>
    </Link>
  );
};
const S = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px;
  color: ${colors.white};
  transition: all 200ms ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
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
  .post-title {
    margin-top: 4px;
    font-size: 24px;
    line-height: 1.4;
  }
  .post-description {
    margin-top: 4px;
    font-size: 20px;
    line-height: 1.4;
  }
  img {
    width: 160px;
    height: 160px;
    object-fit: cover;
  }
  &.feature-card {
    padding: 80px 16px;
    .text-area {
      margin-left: auto;
      text-align: right;
    }
  }
`;

export default PostCard;
