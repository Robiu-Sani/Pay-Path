import { createBrowserRouter } from "react-router-dom";
import MainPageRoot from "../MainComponent/MainPageRoot";
import ErrorPage from "./ErrorPage";
import Home from "../MainComponent/Home/Home";
import AuthRoot from "../MainComponent/Authcation/AuthRoot";
import Login from "../MainComponent/Authcation/Login";
import Signup from "../MainComponent/Authcation/Signup";
import DeshboardRoot from "../Deshboard/DeshboardRoot";
import DeshboardHome from "../Deshboard/DeshboardHome/DeshboardHome";
import Private from "./Private";
import AllUsers from "../Deshboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageRoot></MainPageRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthRoot></AuthRoot>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/",
    element: <DeshboardRoot></DeshboardRoot>,
    children: [
      {
        path: "/DeshboardHome",
        element: (
          <Private>
            <DeshboardHome></DeshboardHome>
          </Private>
        ),
      },
      {
        path: "/Allusers",
        element: (
          <Private>
            <AllUsers></AllUsers>
          </Private>
        ),
      },
    ],
  },
]);
