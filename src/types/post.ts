export type PostCardVariantType = "vertical" | "horizontal";
export type PostDetailType = {
  title: string;
  subTitle: string;
  intro: string;
  thumbNailImage: string;
  isFeatured: boolean;
  createdAt: string;
  content: string;
  category: string;
  slug: string;
};

export type CategoriesInfo = {
  name: string;
  fileLength: number;
};
