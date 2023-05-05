import React from "react";
import 'animate.css';

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white animate__animated animate__bounceInDown">You are Welcome to <span className="text-red-600">HOMESCHOOL</span></h1>
            <p className="mb-5 animate__animated animate__fadeInRight">
            Online courses teach students how to manage their time better.As a result, students not only gain knowledge from the coursework, but they also sharpen their time management skills.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
