import { useNavigate } from "react-router-dom";
import logout from "../../../image/logout.png";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function LogOut() {
  const navigate = useNavigate();

  const HandleLogOut = async () => {
    Cookies.remove("token");
    localStorage.removeItem("UserLogedIn");
    localStorage.removeItem("userPin");
    navigate("/");
    Swal.fire({
      icon: "success",
      title: "LogOut Seccessfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="w-[190px] absolute sm:fixed sm:left-3 bottom-0 sm:bottom-3 rounded-md h-[50px] flex justify-center items-center cursor-pointer border-[#cfb46b85] border bg-gradient-bg">
      <button
        className="w-full  text-gradient  font-bold p-3 flex justify-center items-center gap-2 "
        onClick={HandleLogOut}
      >
        <img src={logout} alt="logout image" className="h-[40px]" />
        LogOut
      </button>
    </div>
  );
}
