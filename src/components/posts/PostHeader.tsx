import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { colorVars } from "@/constants/cssVariables";
import Typography from "@/components/common/Typography";
import Tag from "@/components/common/Tag";
import DefinitionItem from "@/components/common/DefinitionItem";

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
    <header css={S.self}>
      {headerImage && (
        <Image
          src={headerImage}
          alt={title}
          width={1200}
          height={500}
          css={S.headerImage}
        />
      )}
      <div>
        <Link href={`/posts/${category}`}>
          <Tag
            variant="outlined"
            borderColor={colorVars.primary}
            textColor={colorVars.primary}
            size="sm"
          >
            {category}
          </Tag>
        </Link>
        <Typography
          variant="h1"
          element="h1"
          color={colorVars.primary}
          css={S.title}
        >
          {title}
        </Typography>
        {subTitle && (
          <Typography
            variant="subtitle1"
            element="p"
            color={colorVars.primary}
            css={S.subTitle}
          >
            {subTitle}
          </Typography>
        )}
        <DefinitionItem
          label="최종 수정일"
          value={formattedDate}
          color={colorVars.tertiary}
          css={S.postInfo}
        />
      </div>
    </header>
  );
};

const S = {
  self: css`
    padding-bottom: 48px;
  `,
  headerImage: css`
    margin-bottom: 24px;
    width: 100%;
    height: 240px;
    object-fit: cover;
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
