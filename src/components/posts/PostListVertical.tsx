import { SerializedStyles, css } from "@emotion/react";
import { PostData } from "@/types/post";
import PostListItem from "@/components/posts/postCard/PostListItem";
import { event } from "@/lib/gTag";
type Props = {
  section?: string;
  postList: PostData[];
  propsCss?: SerializedStyles;
};

const PostListVertical = ({ section, postList, propsCss }: Props) => {
  const styles = [S.self];
  propsCss && styles.push(propsCss);
  const handlePostItemClick = (value: string) => {
    event({
      action: "click",
      category: section || "posts",
      label: "post-list-item",
      value,
    });
  };
  return (
    <ul css={styles}>
      {postList.map((post) => (
        <li key={post.slug}>
          <PostListItem
            title={post.title}
            categoryName={post.categoryName}
            createdAt={post.createdAt}
            intro={post.intro}
            thumbnail={post.thumbnail}
            slug={post.slug}
            onClick={() => {
              handlePostItemClick(post.title);
            }}
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
