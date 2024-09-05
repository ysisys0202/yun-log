import useColorTheme from "@/hooks/useColorTheme";
import { css } from "@emotion/react";
import Giscus from "@giscus/react";

const PostComment = () => {
  const { colorTheme } = useColorTheme();
  const isDark = colorTheme === "dark";
  const theme = isDark ? "noborder_gray" : "light_high_contrast";
  const giscusRepoName = process.env.NEXT_PUBLIC_GISCUS_REPO_NAME ?? "";
  const giscusRepoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID ?? "";
  const giscusCategoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? "";
  console.log(giscusRepoName);
  return (
    <div css={S.self} id="post-comments-wrapper">
      <Giscus
        id="post-comments"
        repo={giscusRepoName as `${string}/${string}`}
        repoId={giscusRepoId}
        category="Announcements"
        categoryId={giscusCategoryId}
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
