import { BiSolidError } from "react-icons/bi";
import { TbError404 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-bg flex justify-center items-center p-2 relative">
      <div className="flex flex-col justify-center items-center">
        <TbError404 className="text-[150px] text-red-600" />
        <span className="text-5xl text-center text-gradient2 font-bold my-5 flex gap-5">
          <BiSolidError className="text-red-800" /> Your Page is Not Found
        </span>
        <small className="text-center text-gradient">
          From this page! you can not do anythig whatever you want. Thatswhy you
          must have to go home page{" "}
        </small>
        <button
          onClick={() => navigate("/")}
          className="border !rounded-md mt-5 !w-[200px] border-[#00eeff80] button"
        >
          <span className="absolute text-gradient">Go Home</span>
        </button>
      </div>
    </div>
  );
}
