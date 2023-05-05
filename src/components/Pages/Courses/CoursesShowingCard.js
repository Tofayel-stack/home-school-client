import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const CoursesShowingCard = ({course}) => {
    // console.log(course);

    const {id,coursesTitle,photo_URL} = course;
    return (
        
            <div className=" card card-compact w-96 bg-base-100 shadow-xl m-10 animate__animated animate__fadeIn">
                <figure><img className='max-h-52 ' src={photo_URL} alt="photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{coursesTitle}</h2>
                    
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/courses/${id}`}>Course details</Link></button>
                    </div>
                </div>
                </div>
       
    );
};

export default CoursesShowingCard;