import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../Data/blogposts";

const SinglePost = () => {
  const params = useParams();
  const {
    title,
    description,
    date,
    img,
    preview,
    fullText,
    tag,
  } = blogPosts.find((post) => post.title == [params.id]);
  return (
    <>
      <section className="website-pages-look-blog ">
        <div className="single-post overlay">
          <div className="single-post-info">
            <span>
              <Link to="/blog">Back to Blog</Link>
            </span>
          </div>
          <div className="single-post-wrapper">
            <img className="single-post-img" src={img} alt="" />
            <h1 className="single-post-title">{title}</h1>
            <div className="single-post-info">
              <span>{date}</span>
            </div>
            <p className="single-post-full">{fullText}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
