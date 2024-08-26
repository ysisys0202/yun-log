import Link from "next/link";
import { colorVars } from "@/constants/cssVariables";
import { NavCategory } from "@/hooks/useNavCategories";
import TagList from "@/components/common/TagList";
import Tag from "@/components/common/Tag";

type Props = {
  categories: NavCategory[];
  currentCategory: string;
};

const CategoryTagList = ({ categories, currentCategory }: Props) => {
  return (
    <TagList>
      {categories.map((category) => {
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

export default CategoryTagList;
