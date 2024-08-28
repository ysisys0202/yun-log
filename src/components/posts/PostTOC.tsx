import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { colorVars } from "@/constants/cssVariables";
import { gnbHeightPc } from "@/constants/size";
import throttle from "@/utils/throttle";
import { Heading } from "@/hooks/usePostTOC";
import Typography from "@/components/common/Typography";
import PostTOCItem from "@/components/posts/PostTOCItem";

type Props = {
  TOC: Heading[];
};

export const scrollTopSpacing = 40;

const PostTOC = ({ TOC }: Props) => {
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  const handleScroll = throttle(() => {
    const headings = document.querySelectorAll("#post-container h2, h3, h4");

    headings?.forEach((heading) => {
      const headingRectTop =
        heading.getBoundingClientRect().top - gnbHeightPc - scrollTopSpacing;
      if (headingRectTop <= 0) {
        setActiveHeadingId(heading.id);
      }
    });
  }, 200);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav css={S.self}>
      <div css={S.toc}>
        <Typography variant={"subtitle1"} element={"strong"}>
          목차
        </Typography>
        <ol>
          {TOC.map((heading) => (
            <PostTOCItem
              key={heading.id}
              heading={heading}
              isActive={activeHeadingId === heading.id}
            />
          ))}
        </ol>
      </div>
    </nav>
  );
};
const S = {
  self: css`
    position: fixed;
    top: ${gnbHeightPc}px;
    right: 0;
    width: 20%;
    min-width: 230px;
    height: calc(100dvh - ${gnbHeightPc}px);
    border-left: 1px solid ${colorVars.border};
  `,
  toc: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-70% - ${gnbHeightPc}px));
    width: calc(100% - 48px);
    margin-top: 1em;
  `,
};
export default PostTOC;
