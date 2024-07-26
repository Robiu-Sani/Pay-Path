export default function SerVicesSection({ image, title, desc }) {
  return (
    <div className="w-full">
      <div className="container mx-auto px-2 flex flex-col gap-5 justify-start sm:justify-center items-start sm:items-center relative">
        <div className="w-[5px] left-[15px] sm:left-[calc(50%-2px)] h-full absolute bg-gradient-bg"></div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full pl-6 sm:pl-0 grid grid-cols-1 sm:grid-cols-2 gap-10 relative">
            {image ? (
              <img
                src={image}
                alt="section image"
                className="max-w-full rounded-md mt-5"
              />
            ) : (
              <span></span>
            )}

            {title ? (
              <div className="w-[20px] h-[20px] rounded-full bg-gradient-bg absolute left-0 sm:left-[calc(50%-10px)]"></div>
            ) : null}
          </div>
          <div className="w-full pl-6 sm:pl-0 grid grid-cols-1 sm:grid-cols-2 gap-10 relative">
            <span></span>
            {title ? (
              <div className="w-full mt-7 p-3 rounded-md border bg-gradient-bg">
                <h3 className="text-2xl text-gradient font-bold mb-3">
                  {title}
                </h3>
                <p className="text-gradient">{desc}</p>
              </div>
            ) : (
              <span></span>
            )}
            <div
              className={`w-[20px] h-[20px] ${
                title ? "top-0" : "bottom-0"
              } rounded-full bg-gradient-bg absolute left-0 sm:left-[calc(50%-10px)]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
