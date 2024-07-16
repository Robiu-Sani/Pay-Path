import { Outlet } from "react-router-dom";
import bannerPhone from "../../../image/bannerPhone.png";

export default function AuthRoot() {
  return (
    <div className="bg-gradient-bg w-full min-h-screen flex justify-center items-center pt-10 px-2 pb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 pt-10 text-white container">
        <div className="w-full flex justify-center items-center">
          <Outlet></Outlet>
        </div>
        <div className="w-full flex justify-between">
          <span></span>
          <div className="w-full h-[500px] md:h-auto hidden sm:flex justify-center items-center relative">
            <div className="w-[300px] sm:w-[400px] h-[300px sm:h-[400px] rounded-full bg-gradient-bg"></div>
            <img
              src={bannerPhone}
              className="max-w-[350px] sm:w-[450px] bannerImageStyle absolute top-[50%]"
              alt="banner iconic mobile phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
