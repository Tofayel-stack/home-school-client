import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../sharePage/Footer';
import Header from '../sharePage/Header';
import SideNav from '../sharePage/SideNav';
import './main.css'

const Main = () => {
    return (
        <div>
            <div className='sticky top-0 z-30'><Header></Header></div>
            <div className='flex'>
               <div className='customBackground flex-auto z-0'><Outlet></Outlet></div>
               <div className='bg-gray-700 flex-initial w-1/4 h-fit custom'><SideNav></SideNav></div>
            </div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Main;

