import React from 'react';
import placeholderImage from "./assets/img-placeholder.png";
import Description from"./description";
const EachBlog =()=>{
    return(
        <div className="eachBlog">
            <div className="forImage"><img src= {placeholderImage} alt="img"/> </div>
           <Description blogTitle={<div>Blog Title</div>}/>
           
        </div>
    )
}
export default EachBlog; 