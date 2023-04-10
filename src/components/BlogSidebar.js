import React from 'react';
import { Link } from "react-router-dom";
import Me from '../assets/cool_Tracey_cropped.jpg' 

 const BlogSidebar = ({getBlogs}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src={Me}
          alt="me looking cool."
        />
        <p>
          Neurodivergent Mom and experienced Fullstack Software Engineer.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebarTitle">CATEGORIES</span>
          
        <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Link className="link" to="/blog?cat=Life" onClick={() => getBlogs("Life")}>
                Life
              </Link>
            </li>

            <li className="sidebar-list-item">
              <Link className="link" to="/blog?cat=Tech" onClick={() => getBlogs("Tech")}>
                Tech
              </Link>
            </li>

            <li className="sidebar-list-item">
              <Link className="link" to="/blog?cat=Travel" onClick={() => getBlogs("Travel")}>
                Travel
              </Link>
            </li>

            <li className="sidebar-list-item">
              <Link className="link" to="/blog?cat=Health" onClick={() => getBlogs("Health")}>
                Health
              </Link>
            </li>
        </ul>
            
      </div>
    </div>
  );
}

export default BlogSidebar;