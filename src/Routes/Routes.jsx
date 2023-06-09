import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheakOut from "../pages/CheakOut/CheakOut";
import Booking from "../pages/Booking/Booking";
import PrivateRouter from "./PrivateRouter";



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
          element:<PrivateRouter><CheakOut></CheakOut></PrivateRouter>,
          loader:({params})=>fetch(`https://doctor-car-server-69-70.vercel.app/cars/${params.id}`)
        }
        ,
        {
          path:'out',
          element:<PrivateRouter><Booking></Booking></PrivateRouter>
        }
      ]
    },
  ]);
  
  export default router;