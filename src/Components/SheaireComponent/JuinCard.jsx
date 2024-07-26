export default function JuinCard() {
  return (
    <div className="w-full py-10 px-2">
      <div className="max-w-[1000px] py-10 px-3 mx-auto sm:px-10 flex flex-col gap-5 justify-center items-center bg-gradient-bg rounded-md">
        <h1 className="text-3xl text-gradient text-center font-bold">
          Lorem, ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-center text-gradient">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus explicabo natus possimus expedita, qui impedit.
        </p>
        <div className="relative">
          <div className="w-[50px] h-[50px] rounded-full bg-gradient-bg absolute left-1"></div>
          <a className="btn btn-ghost text-xl text-gradient drop-shadow font-extrabold ">
            <span className="">PayPath</span>
          </a>
        </div>
        <button className="button !w-[200px] !h-[50px] border !rounded-md border-[#00eeff80]">
          <span className="absolute text-gradient text-2xl font-bold">
            Juin with us
          </span>
        </button>
      </div>
    </div>
  );
}
