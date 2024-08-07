import useUsers from "../../CustomHooks/useUsers";
import DeshboardBAnner from "../../SheaireComponent/DeshboardBAnner";

export default function AllAgent() {
  const { users } = useUsers();

  return (
    <div className="w-full !scrollNone overflow-y-auto  max-h-[calc(100vh-50px)] p-4">
      <DeshboardBAnner></DeshboardBAnner>
      <div className="w-full mt-5 overflow-auto">
        <div className="min-w-[1000px] flex flex-col gap-2">
          <div className="w-full grid grid-cols-3 border border-[#cfb46b3b] rounded bg-gradient-bg">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
