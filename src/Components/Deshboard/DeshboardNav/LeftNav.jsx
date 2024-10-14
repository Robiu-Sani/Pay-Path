import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LogOut from "../../MainComponent/Authcation/LogOut";
import { FaBalanceScale, FaCcMastercard, FaHome } from "react-icons/fa";
import { GiCash, GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineHistoryEdu, MdRequestPage } from "react-icons/md";
import { FaUsersBetweenLines, FaUsersLine } from "react-icons/fa6";
import useAxiosSource from "../../CustomHooks/useAxiousSorce";

export default function LeftNav() {
  const [logedUser, setLogedUser] = useState(null); // Initializing with null
  const navigate = useNavigate();
  const { axiosSource } = useAxiosSource();
  const userLogedIn = localStorage.getItem("UserLogedIn");

  // Fetch user data based on logged-in email
  useEffect(() => {
    if (userLogedIn) {
      axiosSource
        .get(`/useremail/${userLogedIn}`)
        .then((result) => setLogedUser(result.data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [userLogedIn, axiosSource]);

  // If the user data is not yet loaded, we can show a loader or return null
  if (!logedUser) {
    return <div>Loading...</div>; // Optional loader during fetch
  }

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
        <button
          onClick={() => navigate("/AllAgents")}
          className="flex hover:pl-4 justify-start items-center gap-2 font-bold p-2 border text-left text-md rounded-md border-[#cfb46b1e] mb-1 w-full text-gradient "
        >
          <FaUsersLine className="text-[#cfb56b]" />
          All Agents
        </button>
        {/* Conditional rendering for agent */}
        {logedUser.status === "agent" && (
          <button
            onClick={() => navigate("/cashinRequest")}
            className="flex hover:pl-4 justify-start items-center gap-2 font-bold p-2 border text-left text-md rounded-md border-[#cfb46b1e] mb-1 w-full text-gradient "
          >
            <MdRequestPage className="text-[#cfb56b]" />
            Agent Request
          </button>
        )}
        {/* Conditional rendering for admin */}
        {logedUser.status === "admin" && (
          <button
            onClick={() => navigate("/Allusers")}
            className="flex hover:pl-4 mb-20 justify-start items-center gap-2 font-bold p-2 border text-left text-md rounded-md border-[#cfb46b1e] w-full text-gradient "
          >
            <FaUsersBetweenLines className="text-[#cfb56b]" />
            All Users
          </button>
        )}
      </div>
      <LogOut />
    </div>
  );
}
