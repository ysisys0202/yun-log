import { css } from "@emotion/react";
import PostCard, { PostCardType } from "./PostCard";
import { gray } from "@/constants/colors";
import Link from "next/link";
import { PostCardVariantType } from "@/types/post";
import { media } from "@/constants/breakPoints";

type Props = {
  postList: any;
  type?: PostCardVariantType;
};

const PostList = ({ postList, type = "horizontal" }: Props) => {
  return (
    <ul className={`post-list ${type}`} css={S}>
      {postList.map((post: any) => (
        <li key={post.slug}>
          <PostCard post={post} type={type} />
        </li>
      ))}
    </ul>
  );
};

const S = css`
  &.vertical {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    li {
      margin-left: -1px;
      width: calc(50% + 1px);
      &:nth-of-type(2) ~ li {
        margin-top: -1px;
      }
    }
    @media ${media.sm} {
      li {
        margin-left: -1px;
        width: calc(25% + 1px);
        &:nth-of-type(2) ~ li {
          margin-top: 0px;
        }
      }
    }
  }
  &.horizontal {
    li {
      margin: 0 -1px;
      &:not(:first-of-type) {
        margin-top: -1px;
      }
    }
  }
`;
export default PostList;
