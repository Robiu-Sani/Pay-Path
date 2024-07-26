import { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { MdArrowBack, MdWorkHistory } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function TopNav() {
  const [callHistory, setCallHistory] = useState(false);
  const [checkBalance, setCheckBalance] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full  p-3 bg-gradient-bg flex justify-between items-center border-[#cfb46b85] border-b">
      <span className="text-gradient ml-7 font-bold">Pay Path</span>
      <div
        onClick={() => setCheckBalance(!checkBalance)}
        className="w-[150px] cursor-pointer h-[25px] relative bg-gradient-bg border-[#cfb46b85] border rounded-full overflow-hidden flex justify-center items-center"
      >
        <span className="text-gradient font-bold">200.00</span>
        <div
          className={`w-full h-full rounded-full absolute top-0 ${
            checkBalance ? "-left-[125px]" : "left-0"
          }  bg-gradient-bg flex justify-center items-center`}
        >
          <span className="text-gradient font-bold">Balance</span>
          <div className="w-[19px] h-[19px] rounded-full bg-[#cfb56b] absolute right-[2px]"></div>
        </div>
      </div>
      <div className="flex gap-5">
        <MdArrowBack
          onClick={() => navigate("/")}
          className="text-2xl text-[#cfb56b] cursor-pointer"
        />
        <MdWorkHistory
          onClick={() => setCallHistory(!callHistory)}
          className="text-2xl text-[#cfb56b] cursor-pointer"
        />
      </div>
      <div
        className={`w-[calc(100%-16px)] rounded-md bg-gradient-bg overscroll-y-auto border-[#cfb46b85]  z-20 sm:w-[400px] h-[calc(100vh-68px)] border absolute top-[60px] ${
          callHistory ? "right-2" : "-right-[105%]"
        }`}
      >
        <div className="w-full border-[#cfb46b85] border-b p-2 flex justify-start items-center">
          <FaHistory className="text-[#cfb56b] text-xl mr-3" />
          <span className="text-gradient font-bold">History</span>
        </div>
      </div>
    </div>
  );
}
