import React, {useState} from "react";
import { blogPosts } from "./Data/blogposts";
const PostContext = React.createContext();


const PostProvider = (props) => {
    const [currentPost, setCurrentPost] = useState(() => {
        const savedPost = localStorage.getItem("foundPost");
        const initialValue = JSON.parse(savedPost)
        return initialValue || JSON.stringify({});
    });


    const getPost = id => {
        const foundPost = blogPosts.at(id);
        setCurrentPost(foundPost);
        localStorage.setItem("foundPost", JSON.stringify(foundPost));
        return foundPost
    }

 
    return (
        <PostContext.Provider value={{
            getPost,
            currentPost
            
        }}>
            {props.children}
        </PostContext.Provider>
    )
};

const PostConsumer = PostContext.Consumer;

export {PostProvider, PostConsumer}