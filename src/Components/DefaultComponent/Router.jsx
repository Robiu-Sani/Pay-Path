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
import GetTheCard from "../Deshboard/GetTheCard/GetTheCard";
import BalanceHistory from "../Deshboard/BalanceHistory/BalanceHistory";
import BalanceInquiry from "../Deshboard/BalanceInquiry/BalanceInquiry";
import CashIn from "../Deshboard/CashIn/CashIn";
import CashOut from "../Deshboard/CashOut/CashOut";
import SendMoney from "../Deshboard/SendMoney/SendMoney";

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
        path: "/send_money",
        element: (
          <Private>
            <SendMoney></SendMoney>
          </Private>
        ),
      },
      {
        path: "/cash_out",
        element: (
          <Private>
            <CashOut></CashOut>
          </Private>
        ),
      },
      {
        path: "/cash_in",
        element: (
          <Private>
            <CashIn></CashIn>
          </Private>
        ),
      },
      {
        path: "/balance_inquiry",
        element: (
          <Private>
            <BalanceInquiry></BalanceInquiry>
          </Private>
        ),
      },
      {
        path: "/balance_history",
        element: (
          <Private>
            <BalanceHistory></BalanceHistory>
          </Private>
        ),
      },
      {
        path: "/get_the_card",
        element: (
          <Private>
            <GetTheCard></GetTheCard>
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
