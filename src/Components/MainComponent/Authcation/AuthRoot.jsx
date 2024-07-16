import { Outlet } from "react-router-dom";
import bannerPhone from "../../../image/bannerPhone.png";

export default function AuthRoot() {
  return (
    <div className="bg-gradient-bg w-full min-h-screen flex justify-center items-center pt-10 px-2 pb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 pt-10 text-white container">
        <div className="w-full flex justify-center items-center">
          <Outlet></Outlet>
          {/* <div className="w-full flex sm:justify-start justify-center">
            <button className="button !w-[200px] border border-[#00eeff80]">
              <span className="absolute text-gradient">Get The Card</span>
            </button>
          </div> */}
        </div>
        <div className="w-full flex justify-between">
          <span></span>
          <div className="w-full h-[500px] md:h-auto flex justify-center items-center relative">
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
