import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-300 text-base-content">
  <div>
    <span className="footer-title">Our provided skills</span> 
    <a className="link link-hover">Language </a> 
    <a className="link link-hover">Fitness training</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Job Hunting</a>
    <a className="link link-hover">StartUp Helping</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
        <div className='text-xl'><a target="_blank" href='https://www.facebook.com/mdtofayelhossain69'><BsFacebook></BsFacebook></a></div>
        <div className='text-xl'><a target="_blank" href='https://www.youtube.com/'><IoLogoYoutube></IoLogoYoutube></a></div>
        <div className='text-xl'><a target="_blank" href='https://www.linkedin.com/in/tofayel-hossain-472a31216/'><BsLinkedin></BsLinkedin></a></div>
    </div>

    
  </div>


  <div className="stat customStyleForPhoto">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-20 rounded-full photoHover">
          <img src="https://raw.githubusercontent.com/Tofayel-stack/auth-design-by-daysiUI/main/smallPropic.jpeg" alt='tofayel'/>
        </div>
      </div>
    </div>
    
    <div className="stat-title font-bold">Devloped & Designed</div>
    <div className="font-extrabold text-white text-lg">By Tofayel</div>
  </div>




</footer>
        </div>
    );
};

export default Footer;