import React from 'react';
import { useLoaderData } from 'react-router';
import 'animate.css';
import { Link } from 'react-router-dom';
import pdfFile from '../../../Assets/Communication_Skills.pdf';



const CourseDetails = () => {
    const courseData = useLoaderData()
    console.log(courseData);



   // Function will execute on click of button
   const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(pdfFile).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = {pdfFile}
            alink.click();
        })
    })
}









    const {blog,classes,coursesTitle,fee,photo_URL,student} = courseData
    return (
      <div className=" animate__animated animate__bounceIn">
        <p className="container ml-10 mb-5 text-5xl font-bold tracking-tight text-stone-200 underline  decoration-solid underline-offset-8">
          Know Every Thing About Course
        </p>
        <div className="card card-compact mx-auto w-4/5 bg-base-100 shadow-xl">
          <figure>
            <img className="max-h-96" src={photo_URL} alt="coursePhoto" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-green-500">
              {coursesTitle}
            </h2>
            <p>{blog}</p>
            <div className="card-actions  justify-between">
              <div className="flex">
                <div className="badge badge-lg mx-1.5">
                  <span>Total Classes : {classes}</span>
                </div>
                <div className="badge badge-lg mx-1.5">
                  <span>Course Fee : {fee}</span>
                </div>
                <div className="badge badge-lg mx-1.5">
                  <span>Admitted Student : {student}</span>
                </div>
              </div>
              <div className="flex">
                <div>
                  <button className="btn btn-primary mx-4">
                    <Link to={`/checkout/${courseData.id}`}>Premium Access</Link>
                  </button>
                </div>
                <div>
                  <button onClick={onButtonClick} className="btn btn-primary mx-4">Download PDF</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;