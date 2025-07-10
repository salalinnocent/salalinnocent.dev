import { useEffect, useRef, useState } from "react";
import loadPosts from "../utils/loadPosts";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
//Blogs.jsx
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [activeBlog, setActiveBlog] = useState(null);
  const blogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (blogRef.current && !blogRef.current.contains(e.target))
        setActiveBlog(null)
    }
    if (activeBlog) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeBlog])

  useEffect(() => {
    loadPosts().then(setBlogs);
  }, []);

  return (
    <section id="blogs" className="max-container bg-black mt-[100px] text-white">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="font-tertiary text-xl sm:text-2xl md:text-3xl lg:text-4xl  border-b-4 border-red-700 pb-2">Blogs</h1>
        <ul className="w-full max-w-2xl divide-y divide-red-900">
          {blogs.map((blog) => (
            <li
              key={blog.slug}
              className="cursor-pointer py-4 hover:bg-gray-800 transition-all px-4 rounded"
              onClick={() => setActiveBlog(blog)}
            >
              <div className="flex items-center gap-3 w-full">
                {/* Icon */}
                <img
                  alt="blog icons"
                  src={blog.icon}
                  className="h-12 w-12 sm:h-14 sm:w-14 bg-gray-600 rounded-lg object-cover"
                />

                {/* Text */}
                <div className="flex flex-col">
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-blog text-white leading-tight">
                    {blog.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400">{blog.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for Blog Preview */}
      {activeBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-2 sm:px-4">
          <div
            className="bg-white text-black w-full max-w-3xl p-4 sm:p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]"
            ref={blogRef}
          >
            <button className="mb-4 text-red-600 font-semibold sm:font-bold text-sm sm:text-base" onClick={() => setActiveBlog(null)}>
              Close
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{activeBlog.title}</h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">{activeBlog.date}</p>
            <div className="font-blog text-black text-base sm:text-lg space-y-3 mt-4">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {activeBlog.body}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default Blogs;
