import DeshboardBAnner from "../../SheaireComponent/DeshboardBAnner";
import image from "../../../image/card.png";
import CardApplyForm from "./CardApplyForm";

export default function GetTheCard() {
  return (
    <div className="w-full !scrollNone overflow-y-auto  max-h-[calc(100vh-50px)] p-4">
      <DeshboardBAnner></DeshboardBAnner>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h1 className="text-2xl hidden sm:block text-gradient font-bold">
            Get the card
          </h1>
          <img
            src={image}
            alt="Get the card"
            className="w-[450px] sm:w-[250px]"
          />
          <h1 className="text-2xl sm:hidden block text-gradient font-bold">
            Get the card
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <CardApplyForm></CardApplyForm>
        </div>
      </div>
    </div>
  );
}
