import useColorTheme from "@/hooks/useColorTheme";
import { css } from "@emotion/react";
import Giscus from "@giscus/react";
import { envConfig } from "../../../env.config";

const PostComment = () => {
  const { colorTheme } = useColorTheme();
  const isDark = colorTheme === "dark";
  const theme = isDark ? "noborder_gray" : "light_high_contrast";

  return (
    <div css={S.self} id="post-comments-wrapper">
      <Giscus
        id="post-comments"
        repo={envConfig.giscus.repoName as `${string}/${string}`}
        repoId={envConfig.giscus.repoId as string}
        category="Announcements"
        categoryId={envConfig.giscus.categoryId as string}
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={theme}
        lang="ko"
        loading="lazy"
      />
    </div>
  );
};

const S = {
  self: css`
    margin-top: 80px;
  `,
};
export default PostComment;
