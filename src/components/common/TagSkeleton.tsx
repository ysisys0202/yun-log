import Skeleton from "@/components/common/Skeleton";
import Tag, { TagProps } from "@/components/common//Tag";
import { css } from "@emotion/react";
import { colorVars } from "@/constants/cssVariables";

type Props = Omit<TagProps, "children">;

const TagSkeleton = ({ size }: Props) => {
  return (
    <Tag
      size={size}
      variant="outlined"
      borderColor={colorVars.border}
      propsCss={S.tag}
    >
      <Skeleton propsCss={S.skeleton} />
    </Tag>
  );
};

const S = {
  tag: css`
    position: relative;
    overflow: hidden;
    width: 70px;
  `,
  skeleton: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
};

export default TagSkeleton;
