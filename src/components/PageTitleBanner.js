import React from 'react';
import banner from '../assets/women_silhouette_banner.png';

const PageTitleBanner = ({titleName}) => {
    
    return ( 
    <section>
        <div className="blog-header ">
            <div className="header-titles">
            <span className="header-title-lg">{titleName}</span>
            </div> 
        </div>
        <img
          className="header-img"
          src={banner}
          alt=""
        />
    </section>
    
     );
}
 
export default PageTitleBanner;


