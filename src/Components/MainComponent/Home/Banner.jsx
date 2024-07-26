import bannerPhone from "../../../image/bannerPhone.png";
export default function Banner() {
  return (
    <div className="bg-gradient-bg w-full min-h-screen flex justify-center items-center pt-10 px-2 pb-5">
      <div className="grid grid-cols-1  md:grid-cols-2 items-center justify-center gap-10 pt-10 text-white container">
        <div className="w-full pt-20 sm:pt-0">
          <h1 className="text-gradient text-center text-4xl sm:text-6xl md:text-[70px] md:text-left font-bold ">
            EMPOWER YOUR FINANCES
          </h1>
          <p className="text-gradient font-bold my-5 text-center md:text-left">
            PayPath simplifies financial transactions with secure, real-time
            payments. Manage your money effortlessly, from sending funds to
            tracking expenses. Experience fast, reliable, and secure digital
            payments with PayPath. Join us today!
          </p>
          <div className="w-full flex sm:justify-start justify-center">
            <button className="button !w-[200px] border border-[#00eeff80]">
              <span className="absolute text-gradient">Get The Card</span>
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="max-w-full h-[500px] md:h-auto flex justify-center items-center relative">
            <div className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-bg"></div>
            <img
              src={bannerPhone}
              className="max-w-[300px] sm:min-w-[400px] bannerImageStyle absolute top-[50%]"
              alt="banner iconic mobile phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
