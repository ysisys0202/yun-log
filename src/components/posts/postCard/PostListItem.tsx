import { SerializedStyles, css } from "@emotion/react";
import Link from "next/link";
import PostCardThumbnail from "@/components/posts/postCard/PostCardThumbnail";
import PostCardContent from "@/components/posts/postCard/PostCardContent";
import PostCardBox from "./PostCardBox";
import { PostItem } from "@/types/post";
import { media } from "@/constants/breakPoints";
import { contentSideSpacingMb, contentSideSpacingPc } from "@/constants/size";

type Props = {
  propsCss?: SerializedStyles;
  className?: string;
} & PostItem;

const PostListItem = ({
  title,
  category,
  createdAt,
  intro,
  thumbnail,
  slug,
  propsCss,
  className,
}: Props) => {
  const styles = [S.self];
  propsCss && styles.push(propsCss);
  return (
    <PostCardBox>
      <Link href={`/posts/${category}/${slug}`} css={styles}>
        <PostCardContent
          title={title}
          description={intro}
          category={category}
          createdAt={createdAt}
          propsCss={S.content}
        />
        <PostCardThumbnail
          thumbnail={thumbnail}
          title={title}
          width={260}
          height={160}
          className="thumbnail"
          propsCss={S.thumbnail}
        />
      </Link>
    </PostCardBox>
  );
};
const S = {
  self: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 16px ${contentSideSpacingMb}px;
    @media ${media.md} {
      gap: 40px;
      padding: 24px ${contentSideSpacingPc}px;
    }
  `,
  content: css`
    width: calc(100% - 220px);
    @media ${media.md} {
      width: calc(100% - 340px);
    }
  `,
  thumbnail: css`
    width: 240px;
    @media ${media.md} {
      width: 300px;
    }
  `,
};

export default PostListItem;
