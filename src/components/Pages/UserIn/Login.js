import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AuthContext } from "../../../contextApi/ContextProvider";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

  const {loginuser,logInbyGoogle,logInbyFacebook} = useContext(AuthContext)
  const notify = () => toast("going something Wrong !");
  const [errormessage,setErrormessage] = useState()

  const handleLoginBtn =(event)=>{
    event.preventDefault()
    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;

    loginuser(email,password)
    .then((res) => {
      // Signed in 
      const user = res.user;
      console.log(user);
      
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      notify()
      console.error(error);
      setErrormessage(errorMessage)
    });

  }


  const handleloginByGoogle = ()=> {
    logInbyGoogle()
    .then((result) => {
      const user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
   
      const errorMessage = error.message;
      notify()
      setErrormessage(errorMessage)
      console.error(error);
    });
  }

  const hancleloginByFacebook = ()=> {
    logInbyFacebook()
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log(user);
  

  
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      notify()
      const errorMessage = error.message;
      setErrormessage(errorMessage)
     
    });
  }







  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-96 shadow-2xl bg-gray-200">
            <form onSubmit={handleLoginBtn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="bg-white input input-success w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-success bg-white "
                />
                <label className="label">
                  <b className="label-text-alt text-slate-600">
                    Need An Account ?
                    <Link className="underline" to='/register'> SIGN UP</Link>
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


            {/* this line is for design perpose */}

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{flex: 1,backgroundColor: "#6F38C5",height: "3px",}}/>
                  <p className="text-center" style={{ margin: "0 -20px" }}>you can also sign Up by</p>
                  <div style={{flex: 1,backgroundColor: "#6F38C5",height: "3px",}}/>
                </div>

                <br />
                <br />


                <div className="flex justify-center	">
                  <span onClick={handleloginByGoogle} className="border-2  border-red-700 rounded-full p-2 mx-3 text-xl text-red-700">
                    <Link>
                      <FaGoogle />
                    </Link>
                  </span>
                  <span onClick={hancleloginByFacebook} className="border-2  border-blue-600 rounded-full p-2 mx-3 text-xl text-blue-600">
                    <Link>
                      <BsFacebook />
                    </Link>
                  </span>
                  <span className="border-2  border-blue-400 rounded-full p-2 mx-3 text-xl text-blue-400">
                    <Link>
                      <BsTwitter />
                    </Link>
                  </span>
                </div>
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

export default Login;
