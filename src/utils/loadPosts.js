import matter from "front-matter"; 

const loadPosts = async () => {
  const files = [
    "full-stack-app-notes.md",
    "tailwind-css-hints.md",
    "programming-hints.md",
    "react-components-lifecycle.md",
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
