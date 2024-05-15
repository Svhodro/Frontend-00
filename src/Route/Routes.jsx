import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

const routs = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>,
        }
      ]
    },
  ])  

  export default routs