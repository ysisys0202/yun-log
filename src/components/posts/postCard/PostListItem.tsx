import { SerializedStyles, css } from "@emotion/react";
import Link from "next/link";
import PostCardThumbnail from "@/components/posts/postCard/PostCardThumbnail";
import PostCardContent from "@/components/posts/postCard/PostCardContent";
import PostCardBox from "./PostCardBox";
import { PostItem } from "@/types/post";
import { media } from "@/constants/breakPoints";
import { contentSideSpacingMb, contentSideSpacingPc } from "@/constants/size";
import useMediaQuery from "@/hooks/useMediaQuery";
import { HTMLAttributes } from "react";

type Props = {
  propsCss?: SerializedStyles;
  className?: string;
} & PostItem &
  HTMLAttributes<HTMLElement>;

const PostListItem = ({
  title,
  categoryName,
  createdAt,
  intro,
  thumbnail,
  slug,
  propsCss,
  ...rest
}: Props) => {
  const styles = [S.self];
  propsCss && styles.push(propsCss);
  const isMobile = !useMediaQuery(media.sm);
  return (
    <PostCardBox css={styles} {...rest}>
      <Link href={`/posts/${categoryName}/${slug}`} css={S.cardInner}>
        <PostCardContent
          title={title}
          description={isMobile ? "" : intro}
          categoryName={categoryName}
          createdAt={createdAt}
          propsCss={S.content}
          descriptionLineLength={2}
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
    border-left: none;
    border-right: none;
  `,
  cardInner: css`
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
    width: calc(100% - 140px);
    @media ${media.sm} {
      width: calc(100% - 200px);
    }
    @media ${media.md} {
      width: calc(100% - 340px);
    }
  `,
  thumbnail: css`
    width: 120px;
    @media ${media.sm} {
      width: 180px;
    }
    @media ${media.md} {
      width: 300px;
    }
  `,
};

export default PostListItem;
