import React from 'react';
import { Link } from "react-router-dom";
import { PostConsumer } from '../context.js';



const Post = ( {post: { title, description,
        date, img, preview, fullText }, index}) => {
          return (        
        <div className="post">
        <img
          className="post-img"
          src={img}
          alt=""
        />
        <div className="post-info">     
          <span className="post-title">
            <PostConsumer>
              {(value) => {
                return (
                <div onClick={() => value.getPost(index)}>
                  <Link to={`/posts/${title}`} className="link" >
                    {title}
                  </Link>
                </div>
                )
              }}
            </PostConsumer>
          </span>
          <hr />
          <span className="post-date">{date}</span>
        </div>
        <p className="post-preview">
            {preview}
        </p>
      </div>
     );

}
 
export default Post;


// const Post = ({ post: { title, description,
//     imgUrl, preview }, index }) => {
// return ( 
   
//         <div className='leftcolumn'>
//             <div className="card">
//                 <img className="blog-img" src={imgUrl} height={300} width={300} alt="post" />
//             </div>

//             <div className="card post-data">
//                 <a href="#"><h1 >{title}</h1></a>
//                 <h5 >{description}</h5>
//                 <p >{preview}</p>
//             </div>   
        
              
//     </div>
//  );
// }


// <div className="postCats">
//             <span className="postCat">
//               <Link className="link" to="/my_first_post">
//                 Music
//               </Link>
//             </span>
//             <span className="postCat">
//               <Link className="link" to="/posts?cat=Music">
//                 Life
//               </Link>
//             </span>
//           </div>