import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { PostData, PostFrontMatter } from "@/types/post";

export type PostFile = {
  fileName: string;
  categoryId: string;
  categoryName: string;
};

type PostFilter = "feature";

type PostSort = "latest" | "order";

const postsDirectory = path.join(process.cwd(), "posts");

export const getCategories = () => {
  const categories = fs.readdirSync(postsDirectory);
  return categories.map((category) => {
    const categoryPath = path.join(postsDirectory, category);
    const files = fs.readdirSync(categoryPath);
    const [id, name] = category.split(".");
    return {
      id,
      name,
      fileLength: files.length,
    };
  });
};

export const getPostFiles = (categoryId: string, categoryName: string) => {
  const files = fs.readdirSync(
    `${postsDirectory}/${`${categoryId}.${categoryName}`}`
  );
  return files.map((file) => ({ fileName: file, categoryId, categoryName }));
};

export const getPostAllFiles = (): PostFile[] => {
  const categories = getCategories();
  const allPosts = categories.map((category) =>
    getPostFiles(category.id, category.name)
  );
  return allPosts.flat();
};

export const getPostData = (
  categoryId: string,
  categoryName: string,
  postIdentifier: string
): PostData => {
  const postSlug = postIdentifier.replace(/\.mdx$/, "");
  const filePath = path.join(
    postsDirectory,
    `${categoryId}.${categoryName}`,
    `${postSlug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = {
    categoryId,
    categoryName,
    slug: postSlug,
    content,
    ...(data as PostFrontMatter),
  };

  return postData;
};

export const sortPosts = ({
  posts,
  sort,
}: {
  posts: PostData[];
  sort: PostSort;
}) => {
  switch (sort) {
    case "latest":
      posts.sort(
        (current, next) =>
          new Date(next.createdAt).getTime() -
          new Date(current.createdAt).getTime()
      );
      break;
    case "order":
      posts.sort((current, next) => {
        const currentOrder = current.order ?? 0;
        const nextOrder = next.order ?? 0;
        return currentOrder - nextOrder;
      });
      break;
  }
};

export const filterPosts = ({
  posts,
  filter,
}: {
  posts: PostData[];
  filter: PostFilter;
}) => {
  let filterdPosts;
  switch (filter) {
    case "feature":
      filterdPosts = posts = posts.filter((post) => post.isFeatured);
      break;
  }
  return filterdPosts;
};

export const getPosts = ({
  categoryId,
  categoryName,
  sort = "latest",
  filter,
}: {
  categoryId?: string;
  categoryName?: string;
  sort?: PostSort;
  filter?: PostFilter;
}) => {
  const postFiles = categoryName
    ? getPostFiles(categoryId as string, categoryName)
    : getPostAllFiles();
  const posts = postFiles.map((post) =>
    getPostData(post.categoryId, post.categoryName, post.fileName)
  );
  let filteredPosts;
  if (sort) {
    sortPosts({ posts, sort });
  }
  if (filter) {
    filteredPosts = filterPosts({ posts, filter });
  }

  return filteredPosts ?? posts;
};
