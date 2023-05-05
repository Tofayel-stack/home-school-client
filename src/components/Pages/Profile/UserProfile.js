import React, { useContext } from 'react';
import { AuthContext } from '../../../contextApi/ContextProvider';
import './userProfile.css'

const UserProfile = () => {

    const {user} = useContext(AuthContext)
    // console.log(user);
  
  
  
    return (
        <div>
               

               
                    <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                        <div className="flex items-center justify-between">
                           
                        </div>
                        <div className="mt-6 w-fit mx-auto ">
                            <img className='rounded-full' src={user?.photoURL} alt="userPhoto"/>
                        </div>

                        <div className="mt-8 ">
                            <h2 className="text-white font-bold text-2xl tracking-wide uppercase">{user?.displayName}</h2>
                        </div>
                        <div className="text-emerald-400 font-semibold mt-2.5" >
                            {
                                user?.emailVerified? <div>Email verified : True </div> : <div>Email verified : False </div>
                            }
                            
                        </div>

                        <div className="h-1 w-full bg-black mt-8 rounded-full">
                            <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
                        </div>
                        <div className="mt-3 text-white text-sm">
                            <span className="text-gray-400 font-semibold">Profile complete : </span>
                            <span> 40%</span>
                        </div>
                        <div className="mt-3 text-white text-sm">
                            <span className="text-gray-400 font-semibold">Email ID: </span>
                            <span>{user?.email} </span>
                        </div>
                        <div className="mt-3 text-white text-sm">
                            <span className="text-gray-400 font-semibold">Phone No: </span>
                            <span>{user?.phoneNumber} </span>
                        </div>
                        <div className="mt-3 text-white text-sm">
                            <span className="text-gray-400 font-semibold">User Type: </span>
                            <span>Premium </span>
                        </div>

                    </section>


             
        </div>

    );
};

export default UserProfile;