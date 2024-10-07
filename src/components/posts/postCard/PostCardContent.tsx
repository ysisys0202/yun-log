import { colorVars } from "@/constants/cssVariables";
import Typography from "@/components/common/Typography";
import Tag from "@/components/common/Tag";
import { SerializedStyles, css } from "@emotion/react";
import { media } from "@/constants/breakPoints";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  title: string;
  description?: string;
  categoryName: string;
  createdAt: string;
  propsCss?: SerializedStyles;
  descriptionLineLength?: number;
};

const PostCardContent = ({
  title,
  description,
  categoryName,
  createdAt,
  propsCss,
  descriptionLineLength = 3,
}: Props) => {
  const styles = [];
  propsCss && styles.push(propsCss);
  const isMobile = !useMediaQuery(media.md);
  return (
    <div css={styles}>
      <Tag
        variant="outlined"
        borderColor={colorVars.border}
        textColor={colorVars.tertiary}
        size={isMobile ? "sm" : "md"}
      >
        {categoryName}
      </Tag>
      <Typography
        variant="subtitle1"
        as="h3"
        color={colorVars.primary}
        className="post-card-title"
        css={S.title}
      >
        <span css={[S.titleInner]}> {title}</span>
      </Typography>
      {description && (
        <Typography
          variant="body1"
          as="p"
          color={colorVars.secondary}
          css={[
            S.description,
            css`
              -webkit-line-clamp: ${descriptionLineLength};
            `,
          ]}
        >
          {description}
        </Typography>
      )}
      <Typography
        variant="body2"
        as="p"
        color={colorVars.tertiary}
        css={S.createdAt}
      >
        {createdAt.replaceAll("-", ".")}
      </Typography>
    </div>
  );
};
const S = {
  title: css`
    margin-top: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  titleInner: css`
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: ${colorVars.secondary};
      transition: width 200ms ease-in-out;
    }
  `,
  description: css`
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `,
  bottom: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  createdAt: css`
    margin-top: 8px;
    @media ${media.md} {
      margin-top: 12px;
    }
  `,
};

export default PostCardContent;
