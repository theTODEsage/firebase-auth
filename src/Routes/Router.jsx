import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/", // Home pages
    element: <HomeLayout />,
    children: [
      { path: "", element: <Home /> } // default child
    ]
  },
  {
    path: "auth", // Auth pages wrapper
    element: <AuthLayout />, // Navbar included here
    children: [
      { path: "login", element: <Login /> },     // /auth/login
      { path: "register", element: <Register /> } // /auth/register
    ]
  }
]);

export default router;
