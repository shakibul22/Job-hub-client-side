import { createBrowserRouter,  } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home/Home";
import About from "../Home/Home/About";
import Login from "../Login/Login";
import Register from "../Register/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
       
      ]
    },
  ]);