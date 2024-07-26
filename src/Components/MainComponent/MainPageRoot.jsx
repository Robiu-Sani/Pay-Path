import { Outlet } from "react-router-dom";
import NavBar from "../DefaultComponent/NavBar";
import Footer from "../DefaultComponent/Footer";

export default function MainPageRoot() {
  return (
    <div className="relative">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
