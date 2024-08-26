import { SerializedStyles, css } from "@emotion/react";
import { PostData } from "@/types/post";
import { media } from "@/constants/breakPoints";
import PostCard from "@/components/posts/postCard/PostCard";

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
        <li key={post.slug}>
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
};

export default PostListHorizontal;
