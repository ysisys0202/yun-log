import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

type PostMetaData = {
  title: string;
  subTitle?: string;
  intro: string;
  createdAt: string;
  isFeatured?: boolean;
  thumbnail: string;
  order?: number;
};

type PostData = PostMetaData & {
  category: string;
  slug: string;
  content: string;
  fileContent: string;
};

type PostFile = {
  fileName: string;
  category: string;
};

type PostFilter = "feature";

type PostSort = "latest" | "order";

const postsDirectory = path.join(process.cwd(), "posts");

export const getCategories = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostFiles = (category: string) => {
  const files = fs.readdirSync(`${postsDirectory}/${category}`);
  return files.map((file) => ({ fileName: file, category }));
};

export const getPostAllFiles = (): PostFile[] => {
  const categories = getCategories();
  const allPosts = categories.map((category) => getPostFiles(category));
  return allPosts.flat();
};

export const getPostData = (
  category: string,
  postIdentifier: string
): PostData => {
  const postSlug = postIdentifier.replace(/\.mdx$/, "");
  const filePath = path.join(postsDirectory, category, `${postSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = {
    category,
    slug: postSlug,
    content,
    fileContent,
    ...(data as PostMetaData),
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
  category,
  sort = "latest",
  filter,
}: {
  category?: string;
  sort?: PostSort;
  filter?: PostFilter;
}) => {
  const postFiles = category ? getPostFiles(category) : getPostAllFiles();
  const posts = postFiles.map((post) =>
    getPostData(post.category, post.fileName)
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
