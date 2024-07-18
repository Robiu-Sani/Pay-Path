// import profile from "../../../image/user.webp";
import sendmoney from "../../../image/sendmoney.png";
import cashout from "../../../image/cashout.png";
import cashin from "../../../image/cash-in.png";
import BalanceInquiry from "../../../image/Balance Inquiry.webp";
import TransactionsHistory from "../../../image/TransactionsHistory.webp";
import card from "../../../image/card.png";
import { useNavigate } from "react-router-dom";
import DeshboardBAnner from "../../SheaireComponent/DeshboardBAnner";

export default function DeshboardHome() {
  const navigate = useNavigate();
  return (
    <div className="w-full !scrollNone overflow-y-auto  max-h-[calc(100vh-50px)] p-4 ">
      <div className="w-full">
        <DeshboardBAnner></DeshboardBAnner>
      </div>
      <div
        className="max-w-full grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
      >
        <div
          onClick={() => navigate("/send_money")}
          className="w-full bg-gradient-bg p-4 cursor-pointer  hover:scale-105 border-[#cfb46b85] border flex items-center gap-5 rounded-md"
        >
          <img src={sendmoney} alt="send money" className="h-[100px]" />
          <div className="">
            <h1 className="text-2xl text-gradient font-bold">Send Money</h1>
            <p className="text-gradient text-sm">
              Modern Money Transfers: Sending Funds in the Digital Age{" "}
            </p>
          </div>
        </div>
        <div
          onClick={() => navigate("/cash_out")}
          className="w-full bg-gradient-bg p-4 cursor-pointer  hover:scale-105 border-[#cfb46b85] border flex items-center gap-5 rounded-md"
        >
          <img src={cashout} alt="send money" className="h-[100px]" />
          <div className="">
            <h1 className="text-2xl text-gradient font-bold">Cash out</h1>
            <p className="text-gradient text-sm">
              Cash Out with Confidence: Your Guide to Smooth Transactions{" "}
            </p>
          </div>
        </div>
        <div
          onClick={() => navigate("/cash_in")}
          className="w-full bg-gradient-bg p-4 cursor-pointer  hover:scale-105 border-[#cfb46b85] border flex items-center gap-5 rounded-md"
        >
          <img src={cashin} alt="send money" className="h-[100px]" />
          <div className="">
            <h1 className="text-2xl text-gradient font-bold">Cash-In</h1>
            <p className="text-gradient text-sm">
              Modern Cash In: Efficient and Secure Ways to Deposit Money
            </p>
          </div>
        </div>
        <div
          onClick={() => navigate("/balance_inquiry")}
          className="w-full bg-gradient-bg p-4 cursor-pointer  hover:scale-105 border-[#cfb46b85] border flex items-center gap-5 rounded-md"
        >
          <img src={BalanceInquiry} alt="send money" className="h-[100px]" />
          <div className="">
            <h1 className="text-2xl text-gradient font-bold">
              Balance inquiry
            </h1>
            <p className="text-gradient text-sm">
              Monitor Your Funds: Quick and Accurate Balance Checks
            </p>
          </div>
        </div>
        <div
          onClick={() => navigate("/balance_history")}
          className="w-full bg-gradient-bg p-4 cursor-pointer  hover:scale-105 border-[#cfb46b85] border flex items-center gap-5 rounded-md"
        >
          <img
            src={TransactionsHistory}
            alt="send money"
            className="h-[100px]"
          />
          <div className="">
            <h1 className="text-2xl text-gradient font-bold">
              Transactions History
            </h1>
            <p className="text-gradient text-sm">
              Monitor Your Money: The Importance of Transaction History
            </p>
          </div>
        </div>
        <div
          onClick={() => navigate("/get_the_card")}
          className="w-full bg-gradient-bg p-4 cursor-pointer  hover:scale-105 border-[#cfb46b85] border flex items-center gap-5 rounded-md"
        >
          <img src={card} alt="send money" className="h-[100px]" />
          <div className="">
            <h1 className="text-2xl text-gradient font-bold">Get the card</h1>
            <p className="text-gradient text-sm">
              Managing Your Card: Best Practices for Security and Convenience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
