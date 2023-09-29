import { colors, gray } from "@/constants/colors";
import { css } from "@emotion/react";
import Image from "next/image";
import ViewMoreButton from "./ViewMoreButton";
import Link from "next/link";
import Typography from "../common/Typography";
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
    <Link href={`/posts/${post.category}/${post.slug}`}>
      <article css={S} className={`${type}-card`}>
        <div className="text-area">
          <Typography
            variant="h4"
            element="h3"
            color={colors.white}
            className="mt-1"
          >
            {post.title}
          </Typography>
          {type === "default" && (
            <Typography
              variant="body1"
              element="p"
              color={colors.white}
              className="mt-1"
            >
              {post.description}
            </Typography>
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
