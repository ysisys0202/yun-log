import { colorVars } from "@/constants/cssVariables";
import { SerializedStyles, css } from "@emotion/react";
import Image from "next/image";

type Props = {
  thumbnail: string;
  title: string;
  width: number;
  height: number;
  propsCss?: SerializedStyles;
  className?: string;
};

const PostCardThumbnail = ({
  thumbnail,
  title,
  width,
  height,
  propsCss,
  className,
}: Props) => {
  const styles = [S.self, propsCss];
  propsCss && styles.push(propsCss);
  return (
    <div css={styles} {...(className && { className: className })}>
      <Image src={thumbnail} alt={title} width={width} height={height} />
    </div>
  );
};
const S = {
  self: css`
    aspect-ratio: 400/300;
    overflow: hidden;
    border: 1px solid ${colorVars.border};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 200ms ease-in-out;
    }
  `,
};
export default PostCardThumbnail;
