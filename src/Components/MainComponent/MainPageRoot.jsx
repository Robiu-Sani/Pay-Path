import { Outlet } from "react-router-dom";
import NavBar from "../DefaultComponent/NavBar";

export default function MainPageRoot() {
  return (
    <div className="relative">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}
