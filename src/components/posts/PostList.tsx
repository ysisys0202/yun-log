import { SerializedStyles, css } from "@emotion/react";
import { media } from "@/constants/breakPoints";
import { PostCardVariantType } from "@/types/post";
import PostCard from "@/components/posts/PostCard";

type Props = {
  postList: any;
  type?: PostCardVariantType;
  propsCss?: SerializedStyles;
};

const PostList = ({ postList, type = "horizontal", propsCss }: Props) => {
  const styles = [S.type[type]];
  propsCss && styles.push(propsCss);
  return (
    <ul css={styles}>
      {postList.map((post: any) => (
        <li key={post.slug}>
          <PostCard post={post} type={type} />
        </li>
      ))}
    </ul>
  );
};

const S = {
  type: {
    vertical: css`
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
    `,
    horizontal: css`
      li {
        margin: 0 -1px;
        &:not(:first-of-type) {
          margin-top: -1px;
        }
      }
    `,
  },
};

export default PostList;
