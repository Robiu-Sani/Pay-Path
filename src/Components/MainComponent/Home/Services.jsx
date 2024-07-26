import image1 from "../../../image/pin.png";
import image2 from "../../../image/card.png";
import image3 from "../../../image/history.png";
export default function Services() {
  return (
    <div className="container pt-10 pb-2 px-2 mx-auto">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full py-5 "></div>
        <div className="w-full py-5 flex justify-center items-center max-h-[450px]">
          <img
            src={image1}
            alt="mobile pin image"
            className="max-h-full max-w-full"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full py-5 flex justify-center items-center max-h-[450px]">
          <img
            src={image2}
            alt="mobile pin image"
            className="max-h-full max-w-full"
          />
        </div>
        <div className="w-full py-5 "></div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full py-5 "></div>
        <div className="w-full py-5 flex justify-center items-center max-h-[450px]">
          <img
            src={image3}
            alt="mobile pin image"
            className="max-h-full max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
