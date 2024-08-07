import { css } from "@emotion/react";
import Image from "next/image";
import useColorMode from "@/hooks/useColorMode";
import Typography from "@/components/common/Typography";
import DefinitionItem from "@/components/common/DefinitionItem";
import { LinkTag } from "@/components/common/Tag";

type Props = {
  title: string;
  subTitle?: string;
  createdAt: string;
  headerImage?: string;
  category: string;
};

const PostHeader = ({
  title,
  subTitle,
  createdAt,
  headerImage,
  category,
}: Props) => {
  const c = useColorMode();
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(createdAt).toLocaleDateString(
    "ko-KR",
    dateOptions
  );

  return (
    <header>
      {headerImage && (
        <Image
          src={headerImage}
          alt={title}
          width={1200}
          height={500}
          css={S.headerImage}
        />
      )}
      <div css={S.titleBox}>
        <LinkTag
          variant="outlined"
          borderColor={c.primary}
          textColor={c.primary}
          size="sm"
          href={`/posts/${category}`}
        >
          {category}
        </LinkTag>
        <Typography variant="h1" element="h1" color={c.primary} css={S.title}>
          {title}
        </Typography>
        {subTitle && (
          <Typography
            variant="subtitle1"
            element="p"
            color={c.primary}
            css={S.subTitle}
          >
            {subTitle}
          </Typography>
        )}
        <DefinitionItem
          label="최종 수정일"
          value={formattedDate}
          color={c.primary}
          css={S.postInfo}
        />
      </div>
    </header>
  );
};

const S = {
  headerImage: css`
    width: 100%;
    height: 240px;
    object-fit: cover;
  `,
  titleBox: css`
    padding: 24px 0;
  `,
  title: css`
    margin-top: 8px;
  `,
  subTitle: css`
    margin-top: 4px;
  `,
  postInfo: css`
    margin-top: 4px;
  `,
};

export default PostHeader;
