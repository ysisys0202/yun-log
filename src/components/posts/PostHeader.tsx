import { css } from "@emotion/react";
import Image from "next/image";
import Typography from "@/components/common/Typography";
import DefinitionItem from "@/components/common/DefinitionItem";
import { LinkTag } from "@/components/common/Tag";
import { colorVars } from "@/constants/cssVariables";
import Divider from "@/components/common/Divider";

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
      <div>
        <LinkTag
          variant="outlined"
          borderColor={colorVars.primary}
          textColor={colorVars.primary}
          size="sm"
          href={`/posts/${category}`}
        >
          {category}
        </LinkTag>
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
      <Divider height="2px" style={S.divider} />
    </header>
  );
};

const S = {
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
  divider: css`
    margin: 24px 0 48px;
  `,
};

export default PostHeader;
