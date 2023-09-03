import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesShowingCard from './CoursesShowingCard';

const Courses = () => {
    
    const coursesData = useLoaderData()

    return (
        <div className='flex flex-wrap'>
            {
                coursesData.map(course => 
                    <CoursesShowingCard
                    key={course.id}
                     course={course}
                     >
                     </CoursesShowingCard>
                )
            }
        </div>
    );
};

export default Courses;