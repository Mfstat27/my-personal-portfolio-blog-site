import React, { useEffect, useState } from "react";
import Me from "../assets/cool_Tracey_cropped.jpg";
import PageTitleBanner from "../components/PageTitleBanner";
import { RiCloseFill } from "react-icons/ri";
import { blogPosts } from "../Data/blogposts";
import Post from "../components/Post";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
  const categories = ["Life", "Tech", "Travel", "Health"];
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFiltered, setIsFiltered] = useState(() => {
    const currentFilterState = localStorage.getItem("isFiltered");
    const initialFilteredState = JSON.parse(currentFilterState);
    return initialFilteredState || false;
  });
  const [blogs, setBlogs] = useState(blogPosts);
  const [blogsFiltered, setBlogsFiltered] = useState(() => {
    const filteredBlogs = localStorage.getItem("blogsByTag");
    const initialFilteredValue = JSON.parse(filteredBlogs);
    return initialFilteredValue || JSON.stringify([]);
  });

  const clearBlogsFilter = () => {
    setBlogs(blogPosts);
    localStorage.setItem("blogsByTag", JSON.stringify([]));
    localStorage.setItem("isFiltered", false);
    setIsFiltered(false);
  };

  const getBlogsByTag = (tag) => {
    const blogsByTag = blogPosts.filter((blog) => blog.tag === tag);
    localStorage.setItem("blogsByTag", JSON.stringify(blogsByTag));
    setBlogsFiltered(blogsByTag);
    localStorage.setItem("isFiltered", true);
    setIsFiltered(true);
  };

  return (
    <section className="website-pages-look-blog">
      <div className="blog-page-overlay blog">
        {JSON.parse(localStorage.getItem("isFiltered")) === true && (
          <>
            <p>clear filter</p>
            <Link to="/blog">
              <button onClick={clearBlogsFilter}>
                <RiCloseFill />
              </button>
            </Link>
          </>
        )}
        <PageTitleBanner titleName="Mfstat" />
        <div className="blog-home">
          <div className="posts">
            {isFiltered === true
              ? blogsFiltered.map((post, index) => (
                  <Post key={index} index={index} post={post} />
                ))
              : blogs.map((post, index) => (
                  <Post key={index} index={index} post={post} />
                ))}
          </div>
          <div className="sidebar">
            <div className="sidebar-item">
              <span className="sidebar-title">ABOUT ME</span>
              <img src={Me} alt="me looking cool." />
              <p>
                Neurodivergent Mom and experienced Fullstack Software Engineer.
              </p>
            </div>
            <div className="sidebar-item">
              <span className="sidebarTitle">CATEGORIES</span>

              <ul className="sidebar-list">
                {categories.map((cat) => {
                  return (
                    <li className="sidebar-list-item">
                      <Link
                        className="link"
                        to={`/blog?cat=${cat}`}
                        onClick={() => getBlogsByTag(cat)}
                      >
                        {cat}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
