import { Outlet } from "react-router-dom";
import LeftNav from "./DeshboardNav/LeftNav";
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { ImCross } from "react-icons/im";

export default function DeshboardRoot() {
  const [callNav, setCallNev] = useState(false);
  return (
    <div className="w-full h-screen bg-gradient-bg flex relative">
      {callNav ? null : (
        <div
          onClick={() => setCallNev(!callNav)}
          className={`flex justify-center items-center w-[30px]  h-[30px]  sm:hidden absolute top-2 left-2`}
        >
          <IoReorderThree className="text-2xl text-white " />
        </div>
      )}
      <div
        className={`w-[250px] bg-gradient-bg p-3 absolute sm:static border-[#cfb46b85] shadow top-0 ${
          callNav ? "left-0" : "-left-[250px]"
        } h-screen border-r overflow-y-auto`}
      >
        {callNav ? (
          <div
            onClick={() => setCallNev(!callNav)}
            className={`flex justify-center items-center w-[30px] h-[30px]  sm:hidden absolute top-2 right-2`}
          >
            <ImCross className="text-xl text-white " />
          </div>
        ) : null}
        <LeftNav></LeftNav>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
