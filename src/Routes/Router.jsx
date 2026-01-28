import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element:<HomeLayout/>,
        children:[
            {
                path:'',
                element:<Home/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
])

export default router