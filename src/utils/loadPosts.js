import matter from "front-matter"; // front-matter, not gray-matter

const loadPosts = async () => {
  const files = [
    "full-stack-app-notes.md",
    "programming-hints.md",
    "react-components-lifecycle.md",
    "tailwind-css-hints.md",
  ];

  const posts = await Promise.all(
    files.map(async (file) => {
      const res = await fetch(`/blogs/${file}`);
      const text = await res.text();
      const { attributes, body } = matter(text);
      return { ...attributes, body };
    })
  );

  return posts;
};

export default loadPosts;
