export type PostCardVariantType = "vertical" | "horizontal";
export type PostData = {
  title: string;
  subTitle: string;
  intro: string;
  thumbnail: string;
  isFeatured: boolean;
  createdAt: string;
  fileContent: string;
  content: string;
  category: string;
  slug: string;
};

export type PostItem = {
  title: string;
  category: string;
  createdAt: string;
  intro: string;
  thumbnail: string;
  slug: string;
};
