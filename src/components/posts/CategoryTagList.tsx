import Link from "next/link";
import { colorVars } from "@/constants/cssVariables";
import { NavCategory } from "@/hooks/useNavCategories";
import TagList from "@/components/common/TagList";
import Tag from "@/components/common/Tag";
import TagSkeleton from "@/components/common/TagSkeleton";

type Props = {
  categories: NavCategory[];
  currentCategory: string;
};

const CategoryTagList = ({ currentCategory }: Props) => {
  const categories: any[] = [];
  return (
    <TagList>
      {categories.length === 0 && renderTagSkeletons(3)}
      {categories.length > 0 &&
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

const renderTagSkeletons = (length: number) => {
  const skeletons = [];
  for (let i = 0; i < length; i++) {
    skeletons.push(<TagSkeleton key={i} height="23px" />);
  }
  return skeletons;
};
export default CategoryTagList;
