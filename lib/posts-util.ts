import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getCategories() {
  return fs.readdirSync(postsDirectory);
}

export function getPostFiles(): any[] {
  const categories = getCategories();
  const allPosts = categories.map((category) => {
    return {
      category,
      files: fs.readdirSync(`${postsDirectory}/${category}`),
    };
  });
  return allPosts;
}

export function getPostData(category: string, postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, category, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = {
    category,
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();
  const allPosts = postFiles
    .map((posts) =>
      posts.files.map((file: string) => getPostData(posts.category, file))
    )
    .flat();
  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post: any) => post.isFeatured);

  return featuredPosts;
}
