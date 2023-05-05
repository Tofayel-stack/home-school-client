import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contextApi/ContextProvider';
import CarouselItem from '../carousel/CarouselItem';

const SideNav = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <h1 className='text-2xl text-center m-5'>Category</h1>
            <ul className="menu m-5 text-center bg-base-100  p-2 rounded-box">
            <li><Link to="/">Home</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/FaQ'>FaQ</Link></li>

            <li><button disabled={user}><Link to='/login'>Sign In</Link></button></li>

            </ul>


            <div>
                <CarouselItem></CarouselItem>
            </div>
        </div>
    );
};

export default SideNav;