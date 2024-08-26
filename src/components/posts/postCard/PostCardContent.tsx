import { colorVars } from "@/constants/cssVariables";
import Typography from "@/components/common/Typography";
import Tag from "@/components/common/Tag";
import ViewMoreButton from "@/components/posts/ViewMoreButton";
import { SerializedStyles, css } from "@emotion/react";
import { media } from "@/constants/breakPoints";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  title: string;
  description?: string;
  category: string;
  createdAt: string;
  propsCss?: SerializedStyles;
  titleLineLength?: number;
  descriptionLineLength?: number;
};

const PostCardContent = ({
  title,
  description,
  category,
  createdAt,
  propsCss,
  titleLineLength = 1,
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
        {category}
      </Tag>
      <Typography
        variant="subtitle1"
        element="h3"
        color={colorVars.primary}
        css={[
          S.title,
          css`
            -webkit-line-clamp: ${titleLineLength};
          `,
        ]}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body1"
          element="p"
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
        element="p"
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
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
