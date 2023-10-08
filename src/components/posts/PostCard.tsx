import { colors, gray, green } from "@/constants/colors";
import { css } from "@emotion/react";
import Image from "next/image";
import ViewMoreButton from "./ViewMoreButton";
import Link from "next/link";
import Typography from "../common/Typography";
import { PostCardVariantType, PostDetailType } from "@/types/post";
import Tag from "../common/Tag";
import { categoriesMap } from "@/constants/category";
import { media } from "@/constants/breakPoints";
type Props = {
  type: PostCardVariantType;
  post: PostDetailType;
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
      <article css={type === "vertical" ? VerticalStyle : HorizontalStyle}>
        <div className="text-area">
          <Tag variant="outlined" borderColor={gray.border} size="sm">
            {categoriesMap.get(post.category)}
          </Tag>
          <Typography variant="subtitle1" element="h3" color={gray.primary}>
            {post.title}
          </Typography>
          <Typography variant="body1" element="p" color={gray.secondary}>
            {post.excerpt}
          </Typography>
          <ViewMoreButton className={`view-more-button`} />
        </div>
        <div className="image-area">
          <Image
            src="/images/home/profile.jpg"
            alt="aa"
            width="300"
            height="220"
          />
        </div>
      </article>
    </Link>
  );
};

const VerticalStyle = css`
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
  position: relative;
  padding: 16px 16px 32px;
  background-color: ${colors.white};
  border: 1px solid ${gray.background};
  height: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background-color: transparent;
    transition: background-color 200ms ease-in-out;
  }
  &:hover {
    &::after {
      background-color: ${green.primary};
    }
    .image-area {
      img {
        transform: scale(1.08);
      }
    }
    .view-more-button {
      svg {
        transform: translateX(4px);
      }
    }
  }
  .image-area {
    margin-top: 16px;
    aspect-ratio: 400/300;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 200ms ease-in-out;
    }
  }
  .text-area {
    margin-top: 16px;
    h3 {
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p {
      margin-top: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  .view-more-button {
    margin-top: 16px;
    svg {
      transition: transform 200ms ease-in-out;
    }
  }
`;
const HorizontalStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 32px 16px;
  background-color: ${colors.white};
  border: 1px solid ${gray.background};
  .text-area {
    width: calc(100% - 190px);
    h3 {
      margin-top: 8px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p {
      margin-top: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .image-area {
    aspect-ratio: 400/300;
    margin-left: 16px;
    min-width: 160px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 200ms ease-in-out;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background-color: transparent;
    transition: background-color 200ms ease-in-out;
  }
  &:hover {
    &::after {
      background-color: ${green.primary};
    }
    .image-area {
      img {
        transform: scale(1.08);
      }
    }
    .view-more-button {
      svg {
        transform: translateX(4px);
      }
    }
  }
  .view-more-button {
    margin-top: 16px;
    svg {
      transition: transform 200ms ease-in-out;
    }
  }
  @media ${media.md} {
    .text-area {
      width: calc(100% - 216px);
    }
    .image-area {
      max-width: 200px;
    }
  }
`;

export default PostCard;
