import DeshboardBAnner from "../../SheaireComponent/DeshboardBAnner";
import image from "../../../image/card1.png";
import useGetHistory from "../../CustomHooks/useGetHistory";
import useUsers from "../../CustomHooks/useUsers";

export default function BalanceHistory() {
  const { history } = useGetHistory();
  const { users } = useUsers();
  const LogedUser = localStorage.getItem("UserLogedIn");
  const userHistory = history.filter(
    (item) => item.email == LogedUser || item.number == users.number
  );

  return (
    <div className="w-full !scrollNone overflow-y-auto  max-h-[calc(100vh-50px)] p-4">
      <DeshboardBAnner></DeshboardBAnner>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h1 className="text-2xl hidden sm:block text-gradient font-bold">
            Transactions history
          </h1>
          <img
            src={image}
            alt="Transactions history"
            className="w-[450px] sm:w-[250px]"
          />
          <h1 className="text-2xl sm:hidden block text-gradient font-bold">
            Transactions history
          </h1>
        </div>
        <div className="w-full gap-2 overflow-auto ">
          <div className="min-w-[500px] flex justify-center flex-col gap-2 items-center">
            <div className="w-full grid grid-cols-3 bg-gradient-bg rounded border border-[#cfb46b3b]">
              <div className="w-full border-r text-gradient font-bold flex justify-center items-center border-[#cfb46b3b] p-2">
                Number
              </div>
              <div className="w-full border-r text-gradient font-bold flex justify-center items-center border-[#cfb46b3b] p-2">
                Type
              </div>
              <div className="w-full text-gradient font-bold flex justify-center items-center p-2">
                Amount
              </div>
            </div>
            {userHistory?.map((item, idx) => (
              <div
                key={idx}
                className="w-full grid grid-cols-3 bg-gradient-bg rounded border border-[#cfb46b3b]"
              >
                <div className="w-full border-r text-gradient font-bold flex justify-center items-center border-[#cfb46b3b] p-2">
                  {item.number}
                </div>
                <div className="w-full border-r text-gradient font-bold flex justify-center items-center border-[#cfb46b3b] p-2">
                  {item.type}
                </div>
                <div className="w-full text-gradient font-bold flex justify-center items-center p-2">
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
