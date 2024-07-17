import { useNavigate } from "react-router-dom";
import logout from "../../../image/logout.png";
import Cookies from "js-cookie";

export default function LogOut() {
  const navigate = useNavigate();

  const HandleLogOut = async () => {
    Cookies.remove("token");
    localStorage.removeItem("UserLogedIn");
    navigate("/");
  };

  return (
    <div
      className="w-full absolute bottom-0 h-[50px] text-gradient rounded-md font-bold p-3 flex justify-center items-center gap-2 cursor-pointer border-[#cfb46b85] border bg-gradient-bg"
      onClick={HandleLogOut}
    >
      <img src={logout} alt="logout image" className="h-[40px]" />
      LogOut
    </div>
  );
}
