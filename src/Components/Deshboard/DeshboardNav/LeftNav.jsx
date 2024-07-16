export default function LeftNav() {
  return (
    <div className="w-full py-5 flex flex-col items-center">
      <div className="relative">
        <div className="w-[50px] h-[50px] rounded-full bg-gradient-bg absolute left-1"></div>
        <a className="btn btn-ghost text-xl text-gradient drop-shadow font-extrabold ">
          <span className="">Pay Path</span>
        </a>
      </div>
    </div>
  );
}
