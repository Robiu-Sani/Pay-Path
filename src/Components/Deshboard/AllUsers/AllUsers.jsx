import Swal from "sweetalert2";
import useUsers from "../../CustomHooks/useUsers";
import DeshboardBAnner from "../../SheaireComponent/DeshboardBAnner";
import { MdDelete } from "react-icons/md";
import { FaMagento } from "react-icons/fa";
import useAxiosSource from "../../CustomHooks/useAxiousSorce";

export default function AllUsers() {
  const { users, refetch } = useUsers();
  const { axiosSource } = useAxiosSource();

  const handleDeleteuser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSource
          .delete(`/users/:${id}`)
          .then(
            (res) => console.log(res),
            refetch(),
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            })
          )
          .then((err) => console.log(err));
      }
    });
  };

  const handleBlockuser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You yoou can solve this any time!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#ff9d4e",
      confirmButtonText: "Yes, Make it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSource
          .patch(`/users/:${id}`)
          .then(
            (res) => console.log(res),
            refetch(),
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            })
          )
          .then((err) => console.log(err));
      }
    });
  };

  return (
    <div className="w-full !scrollNone overflow-y-auto  max-h-[calc(100vh-50px)] p-4">
      <DeshboardBAnner></DeshboardBAnner>
      <div className="w-full mt-5 overflow-auto">
        <div className="min-w-[1000px] flex flex-col gap-2">
          <div className="w-full grid grid-cols-5 border border-[#cfb46b3b] rounded bg-gradient-bg">
            <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
              {" "}
              <p className="text-gradient">Name</p>
            </div>
            <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
              {" "}
              <p className="text-gradient">Email</p>
            </div>
            <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
              {" "}
              <p className="text-gradient">Number</p>
            </div>
            <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
              {" "}
              <p className="text-gradient">Status</p>
            </div>
            <div className="w-full p-3 flex justify-center items-center bg-none ">
              {" "}
              <p className="text-gradient">Action</p>
            </div>
          </div>
          {users?.map((item, idx) => (
            <div
              key={idx}
              className="w-full grid grid-cols-5 border border-[#ffd04e3b] rounded bg-gradient-bg"
            >
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                {" "}
                <p className="text-gradient">{item.fullname}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                {" "}
                <p className="text-gradient">{item.email}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                {" "}
                <p className="text-gradient">{item.number}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                {" "}
                <p className="text-gradient">{item.status}</p>
              </div>
              <div className="w-full grid grid-cols-2 bg-none ">
                <div className="w-full flex border-r border-[#cfb46b3b] justify-center items-center bg-none">
                  <FaMagento
                    onClick={() => handleBlockuser(item._id)}
                    className="text-[#ca8f37] text-xl cursor-pointer"
                  />
                </div>
                <div className="w-full flex justify-center items-center bg-none">
                  <MdDelete
                    onClick={() => handleDeleteuser(item._id)}
                    className="text-[#fd19199c] text-2xl cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
