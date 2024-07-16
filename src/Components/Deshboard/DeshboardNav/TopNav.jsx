import { MdWorkHistory } from "react-icons/md";

export default function TopNav() {
  return (
    <div className="w-full p-3 bg-gradient-bg flex justify-between items-center border-[#cfb46b85] border-b">
      <span></span>
      <div className="">
        <MdWorkHistory className="text-2xl text-gray-400" />
      </div>
    </div>
  );
}
