import matter from "gray-matter";
//loadPosts.js
const loadPosts = async () => {
  const files = import.meta.glob("../blogs/*.md", { as: "raw" });
  const posts = [];

  for (const path in files) {
    const raw = await files[path]();
    const { data, content } = matter(raw);
    posts.push({ ...data, body: content });
  }

  return posts;
};
export default loadPosts