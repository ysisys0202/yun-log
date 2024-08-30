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
      <Image {...{ src, alt, width, height }} />
      {!!caption && <CaptionText>{caption}</CaptionText>}
    </div>
  );
};

export default PostImage;
