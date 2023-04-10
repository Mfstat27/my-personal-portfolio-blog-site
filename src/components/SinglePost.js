import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({post: {title, description, date, img, preview, fullText}}) => {
  return (
    <>
      <section className="website-pages-look-blog ">
        <div className="single-post overlay">
        <div className="single-post-info">
          <span><Link to="/blog">Back to Blog</Link></span>
        </div>
          <div className="single-post-wrapper">
            <img
              className="single-post-img"
              src={img}
              alt=""
            />
            <h1 className="single-post-title">
              {title}
            </h1>
            <div className="single-post-info">
              <span>{date}</span>
            </div>
            <p className="single-post-full">
              {fullText}
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

export default SinglePost;