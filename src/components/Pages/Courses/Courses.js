import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesShowingCard from './CoursesShowingCard';

const Courses = () => {
    const coursesData = useLoaderData()
    // console.log(coursesData);
    return (
        <div className='flex flex-wrap'>
            {
                coursesData.map(scourse => 
                    <CoursesShowingCard
                    key={scourse.id}
                     course={scourse}
                     >
                     </CoursesShowingCard>
                )
            }
        </div>
    );
};

export default Courses;