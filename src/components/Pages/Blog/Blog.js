import React from 'react';
import { useLoaderData } from 'react-router';
import BlogCard from './BlogCard';

const Blog = () => {
  const courseDetails = useLoaderData();
    return (
      <div className='grid grid-cols-2'>
       {
        courseDetails.map(sCard =>
            <BlogCard key={sCard.id} blog={sCard}></BlogCard>
          )
       }
        
      </div>
    );
};

export default Blog;