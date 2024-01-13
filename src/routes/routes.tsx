import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayout from "../components/lyaout/AdminLayout";

const router=createBrowserRouter([
      {
            path:'/',
            element:<App/>,
            children:[
                  {
                        index:true,
                        element:<Home/>
                  },
                  {
                        path:'about',
                        element:<About/>
                  }
            ]
      },
      {
            path:'/admin',
            element:<AdminLayout></AdminLayout>,
            children:[
                  {
                        path:'home',
                        element:<h1>This is admin home page</h1>
                  },
                  {
                        path:'about',
                        element:<h1>This is admin about page</h1>
                  },
            ]
      }
])
export default router;