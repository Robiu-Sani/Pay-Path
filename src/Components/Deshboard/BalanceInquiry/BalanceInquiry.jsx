import useGetHistory from "../../CustomHooks/useGetHistory";
import useUsers from "../../CustomHooks/useUsers";
import DeshboardBAnner from "../../SheaireComponent/DeshboardBAnner";

export default function BalanceInquiry() {
  const { history } = useGetHistory();
  const { users } = useUsers();
  const LogedUser = localStorage.getItem("UserLogedIn");
  const userHistory = history.filter(
    (item) => item.email == LogedUser || item.number == users.number
  );

  return (
    <div className="w-full !scrollNone overflow-y-auto  max-h-[calc(100vh-50px)] p-4">
      <DeshboardBAnner></DeshboardBAnner>
      <div className="w-full mt-5 overflow-auto">
        <div className="min-w-[1000px] flex flex-col gap-2">
          <div className="w-full grid grid-cols-7 border border-[#cfb46b3b] rounded bg-gradient-bg">
            <div className="w-full border-r border-[rgba(207,180,107,0.23)] p-3 flex justify-center items-center bg-none ">
              <p className="text-gradient">Date</p>
            </div>
            <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
              <p className="text-gradient">Number</p>
            </div>
            <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
              <p className="text-gradient">Email</p>
            </div>
            <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
              <p className="text-gradient">Type</p>
            </div>
            <div className="w-full p-3 flex border-r border-[#cfb46b3b] justify-center items-center bg-none ">
              <p className="text-gradient">Pre: bala:</p>
            </div>
            <div className="w-full p-3 flex border-r border-[#cfb46b3b] justify-center items-center bg-none ">
              <p className="text-gradient">Curr: Bala:</p>
            </div>
            <div className="w-full p-3 flex justify-center items-center bg-none ">
              <p className="text-gradient">Amount</p>
            </div>
          </div>
          {userHistory?.map((item, idx) => (
            <div
              key={idx}
              className="w-full grid grid-cols-7 border border-[#ffd04e3b] rounded bg-gradient-bg"
            >
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                <p className="text-gradient">{item.date ? item.date : null}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                <p className="text-gradient">{item.number}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                <p className="text-gradient">{item.email}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                <p className="text-gradient">{item.type}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                <p className="text-gradient">{item.prevBalance}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                <p className="text-gradient">{item.currentBalance}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                <p className="text-gradient">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
