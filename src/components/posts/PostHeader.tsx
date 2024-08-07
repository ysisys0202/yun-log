import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import Typography from "../common/Typography";
import { gray } from "@/constants/colors";
import DefinitionItem from "../common/DefinitionItem";
import { LinkTag } from "../common/Tag";
import useColorMode from "@/hooks/useColorMode";

type Props = {
  title: string;
  subTitle?: string;
  date: string;
  headerImage?: string;
  category: string;
};

const PostHeader = ({
  title,
  subTitle,
  date,
  headerImage,
  category,
}: Props) => {
  const c = useColorMode();
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString("ko-KR", dateOptions);

  return (
    <header css={S}>
      {headerImage && (
        <Image src={headerImage} alt={title} width={1200} height={500} />
      )}
      <div className="text-area">
        <LinkTag
          variant="outlined"
          borderColor={c.primary}
          textColor={c.primary}
          size="sm"
          href={`/posts/${category}`}
        >
          {category}
        </LinkTag>
        <Typography
          variant="h1"
          element="h1"
          color={c.primary}
          className="mt-2"
        >
          {title}
        </Typography>
        {subTitle && (
          <Typography
            variant="subtitle1"
            element="p"
            color={c.primary}
            className="mt-1"
          >
            {subTitle}
          </Typography>
        )}
        <DefinitionItem
          label="최종 수정일"
          value={formattedDate}
          color={c.primary}
          className="mt-1"
        />
      </div>
    </header>
  );
};
const S = css`
  position: relative;
  padding: 64px 16px 16px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
  .text-area {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;

    height: 100%;
    a {
      margin-top: auto;
    }
  }
`;
export default PostHeader;
``;
