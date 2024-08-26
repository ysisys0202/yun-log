import { SerializedStyles, css } from "@emotion/react";
import { PostData } from "@/types/post";
import { media } from "@/constants/breakPoints";
import PostCard from "@/components/posts/postCard/PostCard";
import { colorVars } from "@/constants/cssVariables";

type Props = {
  postList: PostData[];
  propsCss?: SerializedStyles;
};

const PostListHorizontal = ({ postList, propsCss }: Props) => {
  const styles = [S.self];
  propsCss && styles.push(propsCss);
  return (
    <ul css={styles}>
      {postList.map((post) => (
        <li key={post.slug} css={S.postItem}>
          <PostCard
            title={post.title}
            category={post.category}
            createdAt={post.createdAt}
            intro={post.intro}
            thumbnail={post.thumbnail}
            slug={post.slug}
          />
        </li>
      ))}
    </ul>
  );
};

const S = {
  self: css`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    @media ${media.sm} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media ${media.md} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  `,
  postItem: css`
    margin-left: -1px;
    article {
      border-right: none;
    }
    &:nth-of-type(1) ~ li {
      margin-top: -1px;
    }
    @media ${media.sm} {
      article {
        border-right: 1px solid ${colorVars.tertiary};
      }
      &:nth-of-type(2n) {
        article {
          border-right: none;
        }
      }
      &:nth-of-type(2) {
        margin-top: 0 !important;
      }
    }
    @media ${media.md} {
      &:nth-of-type(2n) {
        article {
          border-right: 1px solid ${colorVars.tertiary};
        }
      }
      &:nth-of-type(4n) {
        article {
          border-right: none;
        }
      }
      &:nth-of-type(3),
      &:nth-of-type(4) {
        margin-top: 0 !important;
      }
    }
  `,
};

export default PostListHorizontal;
