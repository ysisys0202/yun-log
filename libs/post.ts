import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { PostData, PostFrontMatter } from "@/types/post";
import { handleError } from "@/utils/error";

export type PostFile = {
  fileName: string;
  categoryId: string;
  categoryName: string;
};

export type PostFilter = "feature";

export type PostSort = "latest" | "order";

export type GetPostsParams = {
  categoryId?: string;
  categoryName?: string;
  sort?: PostSort;
  filter?: PostFilter;
  size?: number;
};

export type getPostDataParams = {
  categoryId: string;
  categoryName: string;
  postId: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export const getCategories = async () => {
  try {
    const categories = await fs.promises.readdir(postsDirectory);
    return await Promise.all(
      categories.map(async (category) => {
        try {
          const categoryPath = path.join(postsDirectory, category);
          const files = await fs.promises.readdir(categoryPath);
          const [id, name] = category.split(".");
          return {
            id,
            name,
            fileLength: files.length,
          };
        } catch (error) {
          console.error(`${category} 카테고리를 불러오는 데 실패했습니다.`);
        }
      })
    );
  } catch (error) {
    console.error("카테고리 목록을 불러오는 데 실패했습니다.", error);
    throw new Error("카테고리 목록을 불러오는 데 실패했습니다.");
  }
};

export const getPostFiles = async (
  categoryId: string,
  categoryName: string
) => {
  const files = await fs.promises.readdir(
    `${postsDirectory}/${`${categoryId}.${categoryName}`}`
  );
  return files.map((file) => ({ fileName: file, categoryId, categoryName }));
};

export const getPostAllFiles = async (): Promise<PostFile[]> => {
  const categories = await getCategories();

  const allPosts = await Promise.all(
    categories.map(async (category) => {
      try {
        if (!category) {
          return [];
        }
        return await getPostFiles(category.id, category.name);
      } catch (error) {
        console.error(
          `${category?.name} 카테고리의 포스트를 불러오는 데 실패했습니다.`,
          error
        );
        return [];
      }
    })
  );

  return allPosts.flat();
};

export const getPostData = async ({
  categoryId,
  categoryName,
  postId,
}: getPostDataParams): Promise<PostData> => {
  const postSlug = postId.replace(/\.mdx$/, "");
  const filePath = path.join(
    postsDirectory,
    `${categoryId}.${categoryName}`,
    `${postSlug}.mdx`
  );
  try {
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const postData = {
      categoryId,
      categoryName,
      slug: postSlug,
      content,
      ...(data as PostFrontMatter),
    };

    return postData;
  } catch (error) {
    console.error(`${filePath} 포스트 데이터를 가져오는 데 실패했습니다.`);
    throw new Error(`${filePath}포스트 데이터를 가져오는 데 실패했습니다.`);
  }
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

export const getPosts = async ({
  categoryId,
  categoryName,
  sort = "latest",
  filter,
  size,
}: GetPostsParams) => {
  let postFiles = [];
  try {
    postFiles = await (categoryName
      ? getPostFiles(categoryId as string, categoryName)
      : getPostAllFiles());
  } catch (error) {
    console.error(error);
    throw new Error("포스트 목록을 불러오는 데 실패했습니다.");
  }
  let posts = [];
  try {
    posts = await Promise.all(
      postFiles.map(
        async ({ categoryId, categoryName, fileName: postId }) =>
          await getPostData({ categoryId, categoryName, postId })
      )
    );
  } catch (error) {
    console.error(error);
    throw new Error("포스트 목록 데이터를 불러오는 데 실패했습니다.");
  }
  let result = posts;
  if (sort) {
    sortPosts({ posts, sort });
  }
  if (filter) {
    result = filterPosts({ posts, filter });
  }
  if (size) {
    result = result.slice(0, size);
  }

  return result;
};
