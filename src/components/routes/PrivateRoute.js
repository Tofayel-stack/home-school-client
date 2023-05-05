import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../../contextApi/ContextProvider';
import { RotatingLines } from 'react-loader-spinner'

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    if(loading === true){
        return <div className='h-screen flex justify-center place-content-center'><RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      /></div>
    }
  
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>


};

export default PrivateRoute;