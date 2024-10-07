import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { media } from "@/constants/breakPoints";
import { contentSideSpacingMb, contentSideSpacingPc } from "@/constants/size";
import { PostData, Category } from "@/types/post";
import useNavCategories from "@/hooks/useNavCategories";
import useMediaQuery from "@/hooks/useMediaQuery";
import SectionTitle from "@/components/home/SectionTitle";
import PostListVertical from "@/components/posts/PostListVertical";
import CategoryTagList from "@/components/posts/CategoryTagList";
import Typography from "@/components/common/Typography";
import BackGround from "../layouts/BackGround";

const PostListContainer = ({ postList }: { postList: PostData[] }) => {
  const router = useRouter();
  const query = router.query;
  const currentCategory = (query.category ?? "전체") as string;
  const { navCategories } = useNavCategories();
  const currentCategoryPostLength = navCategories.filter(
    (category: Category) => category.name === currentCategory
  )[0]?.fileLength;
  const isMobile = !useMediaQuery(media.md);
  return (
    <div css={S.self}>
      <BackGround />
      {isMobile ? (
        <CategoryTagList
          categories={navCategories}
          currentCategory={currentCategory}
        />
      ) : (
        <SectionTitle>
          {currentCategory}

          <Typography variant="body1" as="span">
            {""} ({currentCategoryPostLength})
          </Typography>
        </SectionTitle>
      )}

      <PostListVertical
        postList={postList}
        propsCss={S.list}
        section={`posts-${currentCategory}`}
      />
    </div>
  );
};

const S = {
  self: css`
    padding: 32px ${contentSideSpacingMb}px 0;
    @media ${media.md} {
      padding: 40px ${contentSideSpacingPc}px 0;
    }
  `,
  list: css`
    margin: 16px -${contentSideSpacingMb}px 0;
    @media ${media.md} {
      margin: 24px -${contentSideSpacingPc}px 0;
    }
  `,
};
export default PostListContainer;
