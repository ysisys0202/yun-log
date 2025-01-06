import Link from "next/link";
import { colorVars } from "@/constants/cssVariables";
import { PostNav } from "@/types/post";
import TagList from "@/components/common/TagList";
import Tag from "@/components/common/Tag";
import TagSkeleton from "@/components/common/TagSkeleton";

type Props = {
  categories?: PostNav[];
  currentCategory: string;
};

const CategoryTagList = ({ categories, currentCategory }: Props) => {
  return (
    <TagList>
      {!categories && <LoadingComponent size={10} />}
      {categories &&
        categories.map((category) => {
          const isActive = currentCategory === category.name;
          return (
            <Link href={category.link} key={category.name}>
              <Tag
                variant="outlined"
                size="md"
                textColor={isActive ? colorVars.primary : colorVars.tertiary}
                backgroundColor={
                  isActive
                    ? colorVars.backgroundElement
                    : colorVars.backgroundGlobal
                }
                borderColor={isActive ? colorVars.primary : colorVars.tertiary}
              >
                {category.name} ({category.fileLength})
              </Tag>
            </Link>
          );
        })}
    </TagList>
  );
};

const LoadingComponent = ({ size }: { size: number }) => {
  return Array.from({ length: size }, (_, index) => (
    <TagSkeleton key={index} height="23px" />
  ));
};

export default CategoryTagList;
