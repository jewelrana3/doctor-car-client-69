import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheakOut from "../pages/CheakOut/CheakOut";
import Booking from "../pages/Booking/Booking";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'cheakout/:id',
          element:<CheakOut></CheakOut>,
          loader:({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
        }
        ,
        {
          path:'booking',
          element:<Booking></Booking>
        }
      ]
    },
  ]);
  
  export default router;