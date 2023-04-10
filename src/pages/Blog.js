import React, {useState} from 'react';
import BlogSidebar from '../components/BlogSidebar';
import PageTitleBanner from '../components/PageTitleBanner';
import {RiCloseFill} from "react-icons/ri";
import { blogPosts } from '../Data/blogposts';
import Post from '../components/Post';
import {Link} from 'react-router-dom';

const Blog = () => {
    const [isFiltered, setIsFiltered] = useState(() => {
        const currentFilterState = localStorage.getItem("isFiltered")
        const initialFilteredState = JSON.parse(currentFilterState)
        return initialFilteredState || false
    })
    const [blogs, setBlogs] = useState(blogPosts);
    const [blogsFiltered, setBlogsFiltered] = useState(() => {
        const filteredBlogs = localStorage.getItem("blogsByTag");
        const initialFilteredValue = JSON.parse(filteredBlogs)
        return initialFilteredValue || JSON.stringify([]);
    })


    const clearBlogsFilter = () => {
        // setBlogsFiltered(JSON.stringify([]))
        localStorage.setItem("blogsByTag", JSON.stringify([]))
        setBlogs(blogPosts)
        localStorage.setItem("isFiltered", false)
        setIsFiltered(false)
    }

    const getBlogsByTag = tag => {
        const blogsByTag = blogPosts.filter(blog => blog.tag === tag);
        localStorage.setItem("blogsByTag", JSON.stringify(blogsByTag))
        setBlogsFiltered(blogsByTag)
        localStorage.setItem("isFiltered", true)
        setIsFiltered(true)
    }
    return (
    <section className="website-pages-look-blog"> 
        <div className="blog-page-overlay blog">
            {JSON.parse(localStorage.getItem("isFiltered")) === true &&
                <>
                    <p>clear filter</p>
                    <Link to="/blog" >
                        <button onClick={clearBlogsFilter}>
                            <RiCloseFill />
                            
                        </button>  
                    </Link>
                </>
            }
            <PageTitleBanner titleName="Mfstat" />
            <div className="blog-home">
                <div className="posts">                       
                     {isFiltered === true
                     ? blogsFiltered.map((post, index) => 
                        <Post key={index} index={index} post={post} />) 
                    : blogs.map((post, index) => 
                        <Post key={index} index={index} post={post} />)
                    }
                                    
                </div>
                <BlogSidebar getBlogs={getBlogsByTag}/>
            </div>
        </div>
    </section>
    );
};

 
export default Blog;
