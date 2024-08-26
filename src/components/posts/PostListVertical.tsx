import { SerializedStyles, css } from "@emotion/react";
import { PostData } from "@/types/post";
import PostListItem from "@/components/posts/postCard/PostListItem";

type Props = {
  postList: PostData[];
  propsCss?: SerializedStyles;
};

const PostListVertical = ({ postList, propsCss }: Props) => {
  const styles = [S.self];
  propsCss && styles.push(propsCss);
  return (
    <ul css={styles}>
      {postList.map((post) => (
        <li key={post.slug}>
          <PostListItem
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
    li {
      &:not(:first-of-type) {
        margin-top: -1px;
      }
    }
  `,
};

export default PostListVertical;
