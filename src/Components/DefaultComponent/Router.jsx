import { createBrowserRouter } from "react-router-dom";
import MainPageRoot from "../MainComponent/MainPageRoot";
import ErrorPage from "./ErrorPage";
import Home from "../MainComponent/Home/Home";

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
]);
