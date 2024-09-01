export type PostCardVariantType = "vertical" | "horizontal";

export type PostItem = {
  title: string;
  categoryName: string;
  createdAt: string;
  intro: string;
  thumbnail: string;
  slug: string;
};

export type PostFrontMatter = {
  title: string;
  subTitle?: string;
  intro: string;
  createdAt: string;
  thumbnail: string;
  order?: number;
  isFeatured?: boolean;
};

export type PostData = PostFrontMatter & {
  categoryId: string;
  categoryName: string;
  slug: string;
  content: string;
};

export type Category = {
  id: string;
  name: string;
  fileLength: number;
};
