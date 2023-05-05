import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../contextApi/ContextProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
  const {createNewUser} = useContext(AuthContext)
  const notify = () => toast("going something Wrong !");
  const [errormessage,setErrormessage] = useState()



const handleSignUpBtn =(event)=>{
    event.preventDefault()
    let form = event.target;
    let fName = form.fName.value;
    let lName = form.lName.value;
    let name = fName + lName;
    let email = form.email.value;
    let password = form.password.value;

    createNewUser(email,password)
    .then((res) => {
      // Signed in 
      const user = res.user;
      console.log(user);
     
    })
    .catch((error) => {
      console.error(error);
      let errormessage = error.message;
      setErrormessage(errormessage)
      notify()
    });
  
}






    return (
        <div>
        <div className="hero">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Create your Acc</h1>
            </div>
            <div className="card flex-shrink-0 w-96 shadow-2xl bg-gray-200">
              <form onSubmit={handleSignUpBtn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    name='fName'
                    placeholder="First Name"
                    className="bg-white input input-success w-full max-w-xs"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    name='lName'
                    placeholder="Last Name"
                    className="bg-white input input-success w-full max-w-xs"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name='email'
                    placeholder="email"
                    className="bg-white input input-success w-full max-w-xs"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name='password'
                    placeholder="password"
                    className="input input-success bg-white "
                  />
                  <label className="label">
                    <b className="label-text-alt text-slate-600" >
                      Already have an account ?
                      <Link className="underline" to="/login"> SIGN IN</Link>
                    </b>
                  </label>
                </div>
                <div className="form-control mt-6">
                <span className="text-red-500">{errormessage}</span>
                  <button className="btn border-0 bg-orange-500 text-white">
                    Sign In
                  </button>
                </div>
  
                <div>
  
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{flex: 1,backgroundColor: "#6F38C5",height: "3px",}}/>
                    <p className="text-center" style={{ margin: "0 -20px" }}>you can also sign Up by google</p>
                    <div style={{flex: 1,backgroundColor: "#6F38C5",height: "3px",}}/>
                  </div>
  
                  <br />
                  <br />
  
  
               
                </div>
              </form>
            </div>
          </div>
        </div>

        <ToastContainer 
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />

      </div>
    );
};

export default Register;