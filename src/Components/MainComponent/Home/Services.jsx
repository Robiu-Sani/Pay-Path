import { FaMapPin, FaCreditCard, FaHistory } from "react-icons/fa";
import image1 from "../../../image/pin.png";
import image2 from "../../../image/card.png";
import image3 from "../../../image/history.png";

export default function Services() {
  return (
    <div className="container pt-12 pb-8 px-4 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Services
      </h2>
      <div className="space-y-12">
        {/* Section 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center bg-blue-50 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 sm:h-[300px] flex flex-col justify-center  p-8 text-center md:text-left">
            <FaMapPin className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Location Services
            </h3>
            <p className="text-gray-700 text-lg">
              Our advanced location services offer precise and reliable
              navigation, ensuring you reach your destination with ease.
              Utilizing the latest technology, we provide real-time updates and
              insights for a seamless experience.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-10  sm:h-[300px] flex  justify-center items-center flex-col">
            <img src={image1} alt="Location Pin" className="h-full" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center bg-green-50 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-10 sm:h-[300px] flex justify-center items-center flex-col">
            <img src={image2} alt="Card Payment" className="h-full" />
          </div>
          <div className="w-full md:w-1/2 sm:h-[300px] flex flex-col justify-center  p-8 text-center md:text-left">
            <FaCreditCard className="text-green-600 text-5xl mb-4" />
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Secure Payments
            </h3>
            <p className="text-gray-700 text-lg">
              Experience the ultimate in payment security with our
              state-of-the-art systems. We prioritize your safety by using
              advanced encryption and fraud prevention measures to ensure your
              transactions are protected.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col-reverse md:flex-row items-center bg-yellow-50 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 sm:h-[300px] flex flex-col justify-center  p-8 text-center md:text-left">
            <FaHistory className="text-yellow-600 text-5xl mb-4" />
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Comprehensive History
            </h3>
            <p className="text-gray-700 text-lg">
              Dive deep into your data with our detailed history and analytics
              tools. Our platform provides an in-depth overview of your
              activities and trends, empowering you with the insights needed to
              make informed decisions.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-10 sm:h-[300px] flex justify-center items-center flex-col">
            <img src={image3} alt="History" className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
