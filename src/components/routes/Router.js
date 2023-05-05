import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FaQ from "../Pages/FaQ/FaQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/UserIn/Login";
import Register from "../Pages/UserIn/Register";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            
            {
            path:'/',
            element:<Home></Home>
            },
            {
            path:'/courses',
            loader:()=>fetch('https://home-school-server.vercel.app/courses'),
            element:<Courses></Courses>
            },
            {
            path:'/courses/:id',
            loader:({params})=>fetch(`https://home-school-server.vercel.app/courses/${params.id}`),
            element:<CourseDetails></CourseDetails>
            },

            {
            path:'/blog',
            loader:()=>fetch('https://home-school-server.vercel.app/courses'),
            element:<Blog></Blog>
            },
            {
            path:'/FaQ',
            element:<FaQ></FaQ>
            },
            {
            path:'/login',
            element:<Login></Login>
            },
            {
            path:'/register',
            element:<Register></Register>
            },
            {
            path:'/checkout/:id',
            loader:({params})=>fetch(`https://home-school-server.vercel.app/courses/${params.id}`),
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            


            {
            path:'/*',
            element:<div>404 sry your page is not Found !!!</div>
            }
    ]
    }
])