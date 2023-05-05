import React from 'react';
import 'animate.css';

const BlogCard = ({blog}) => {

    // console.log(blog);
    return (
        
            <div className="card w-11/12 m-6 bg-emerald-900 shadow-xl">
          <div className="card-body animate__animated animate__fadeIn">
            <h2 className="card-title text-white">{blog.coursesTitle}</h2>
            <p>{blog.blog}</p>
          </div>
        </div>
       
    );
};

export default BlogCard;