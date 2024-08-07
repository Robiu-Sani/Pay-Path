import { FaMobileAlt, FaApple, FaGooglePay } from "react-icons/fa";
import image from "../../../image/carousel3.jpg";

export default function MobilePayments() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Mobile Payments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Main Feature Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          <FaMobileAlt className="text-blue-600 text-6xl mb-4" />
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            On-the-Go Transactions
          </h3>
          <p className="text-gray-700 text-lg text-center mb-6">
            Enable quick and secure payments through mobile devices. Our system
            supports various mobile payment options for your convenience.
          </p>
          <div className="flex space-x-4">
            <FaApple className="text-black text-4xl" />
            <FaGooglePay className="text-black text-4xl" />
          </div>
        </div>

        {/* Mobile Payment Illustration */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={image}
            alt="Mobile Payments"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
