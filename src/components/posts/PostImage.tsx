import Image from "next/image";
import { css } from "@emotion/react";
import CaptionText from "@/components/posts/CaptionText";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

const PostImage = ({ src, alt, width, height, caption }: Props) => {
  return (
    <div>
      <Image {...{ src, alt, width, height }} css={S.image} />
      {!!caption && <CaptionText>{caption}</CaptionText>}
    </div>
  );
};
const S = {
  image: css`
    max-width: 100%;
    height: auto;
  `,
};
export default PostImage;
