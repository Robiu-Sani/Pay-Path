import DeshboardBAnner from "../../SheaireComponent/DeshboardBAnner";
import image from "../../../image/cashout.png";
import CashoutForm from "./CashoutForm";

export default function CashOut() {
  return (
    <div className="w-full !scrollNone overflow-y-auto  max-h-[calc(100vh-50px)] p-4">
      <DeshboardBAnner></DeshboardBAnner>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h1 className="text-2xl hidden sm:block text-gradient font-bold">
            Cash out
          </h1>
          <img
            src={image}
            alt="send money"
            className="w-[450px] sm:w-[250px]"
          />
          <h1 className="text-2xl sm:hidden block text-gradient font-bold">
            Cash out
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <CashoutForm></CashoutForm>
        </div>
      </div>
    </div>
  );
}
