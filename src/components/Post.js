import React from "react";
import { Link } from "react-router-dom";
import { PostConsumer } from "../context.js";

const Post = ({
  post: { title, description, date, img, preview, fullText },
  index,
}) => {
  return (
    <div className="post">
      <img className="post-img" src={img} alt="" />
      <div className="post-info">
        <span className="post-title">
          <PostConsumer>
            {(value) => {
              return (
                <div onClick={() => value.getPost(index)}>
                  <Link to={`/posts/${title}`} className="link">
                    {title}
                  </Link>
                </div>
              );
            }}
          </PostConsumer>
        </span>
        <hr />
        <span className="post-date">{date}</span>
      </div>
      <p className="post-desc">{description}</p>
      <p className="post-preview">{preview}</p>
    </div>
  );
};

export default Post;
