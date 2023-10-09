import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getCategories() {
  return fs.readdirSync(postsDirectory);
}

export function getPostFiles(category: string) {
  const files = fs.readdirSync(`${postsDirectory}/${category}`);
  return files.map((file) => {
    {
      return {
        fileName: file,
        category,
      };
    }
  });
}
export function getPostAllFiles(): any[] {
  const categories = getCategories();
  const allPosts = categories.map((category) => getPostFiles(category));
  return allPosts.flat();
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

export function getPosts(category?: string) {
  const postFiles = category ? getPostFiles(category) : getPostAllFiles();
  const posts = postFiles.map((post: any) =>
    getPostData(post.category, post.fileName)
  );
  return posts;
}

export function getFeaturedPosts() {
  const allPosts = getPosts();
  const featuredPosts = allPosts.filter((post: any) => post.isFeatured);

  return featuredPosts;
}
