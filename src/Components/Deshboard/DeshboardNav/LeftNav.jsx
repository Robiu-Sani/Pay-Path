import { useNavigate } from "react-router-dom";
import LogOut from "../../MainComponent/Authcation/LogOut";
import { FaBalanceScale, FaCcMastercard, FaHome } from "react-icons/fa";
import { GiCash, GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineHistoryEdu } from "react-icons/md";

export default function LeftNav() {
  const navigate = useNavigate();
  return (
    <div className="w-full relative h-full py-5 flex flex-col items-center">
      <div className="w-full">
        <div className="relative w-[150px] mb-8 mx-auto">
          <div className="w-[50px] h-[50px] rounded-full bg-gradient-bg absolute left-1"></div>
          <a className="btn btn-ghost text-xl text-gradient drop-shadow font-extrabold ">
            <span className="">Pay Path</span>
          </a>
        </div>
        <button
          onClick={() => navigate("/DeshboardHome")}
          className="flex hover:pl-4 justify-start items-center gap-2 font-bold p-2 border text-left text-md rounded-md border-[#cfb46b1e] mb-1 w-full text-gradient "
        >
          <FaHome className="text-[#cfb56b]" />
          Home
        </button>
        <button
          onClick={() => navigate("/send_money")}
          className="flex hover:pl-4 justify-start items-center gap-2 font-bold p-2 border text-left text-md rounded-md border-[#cfb46b1e] mb-1 w-full text-gradient "
        >
          <GiTakeMyMoney className="text-[#cfb56b]" />
          Send money
        </button>
        <button
          onClick={() => navigate("/cash_out")}
          className="flex hover:pl-4 justify-start items-center gap-2 font-bold p-2 border text-left text-md rounded-md border-[#cfb46b1e] mb-1 w-full text-gradient "
        >
          <GiCash className="text-[#cfb56b]" />
          Cash Out
        </button>
        <button
          onClick={() => navigate("/cash_in")}
          className="flex hover:pl-4 justify-start items-center gap-2 font-bold p-2 border text-left text-md rounded-md border-[#cfb46b1e] mb-1 w-full text-gradient "
        >
          <GiMoneyStack className="text-[#cfb56b]" />
          Cash in
        </button>
        <button
          onClick={() => navigate("/balance_inquiry")}
          className="flex hover:pl-4 justify-start items-center gap-2 font-bold p-2 border text-left text-md rounded-md border-[#cfb46b1e] mb-1 w-full text-gradient "
        >
          <FaBalanceScale className="text-[#cfb56b]" />
          Inquiry
        </button>
        <button
          onClick={() => navigate("/balance_history")}
          className="flex hover:pl-4 justify-start items-center gap-2 font-bold p-2 border text-left text-md rounded-md border-[#cfb46b1e] mb-1 w-full text-gradient "
        >
          <MdOutlineHistoryEdu className="text-[#cfb56b]" />
          History
        </button>
        <button
          onClick={() => navigate("/get_the_card")}
          className="flex hover:pl-4 justify-start items-center gap-2 font-bold p-2 border text-left text-md rounded-md border-[#cfb46b1e] mb-1 w-full text-gradient "
        >
          <FaCcMastercard className="text-[#cfb56b]" />
          Get Card
        </button>
      </div>
      <LogOut></LogOut>
    </div>
  );
}
