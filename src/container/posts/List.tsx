import { LinkTag } from "@/components/common/Tag";
import TagList from "@/components/common/TagList";
import SectionTitle from "@/components/home/SectionTitle";
import { PostCardType } from "@/components/posts/PostCard";
import PostList from "@/components/posts/PostList";
import { categoriesMap } from "@/constants/category";
import { green } from "@/constants/colors";
import useColorMode from "@/hooks/useColorMode";
import { categories } from "@/store/categories";
import { CategoriesInfo } from "@/types/post";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

const PostListContainer = ({ postList }: { postList: PostCardType[] }) => {
  const router = useRouter();
  const query = router.query;
  const currentCategory = query.category as string;
  const postCategories = useRecoilValue(categories);
  const c = useColorMode();
  return (
    <div>
      <SectionTitle className="p-4">
        <Link href="/posts">전체 게시물</Link>
      </SectionTitle>
      <div className="px-4 mb-4">
        <TagList className="tab-list">
          {postCategories &&
            postCategories.map((category: CategoriesInfo) => (
              <LinkTag
                key={category.name}
                variant="outlined"
                textColor={c.green_primary}
                borderColor={c.green_border}
                backgroundColor={
                  currentCategory === category.name
                    ? c.green_background
                    : "transparent"
                }
                href={`/posts/${category.name}`}
              >
                {categoriesMap.get(category.name)} {`(${category.fileLength})`}
              </LinkTag>
            ))}
        </TagList>
      </div>
      <PostList postList={postList} />
    </div>
  );
};

export default PostListContainer;
