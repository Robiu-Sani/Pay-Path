import {
  FaCreditCard,
  FaShieldAlt,
  FaMobileAlt,
  FaReceipt,
  FaExchangeAlt,
  FaStar,
} from "react-icons/fa";

export default function PaymentProcessing() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Payment Processing
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main Feature Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <FaCreditCard className="text-blue-800 text-6xl mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Streamlined Transactions
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Secure and swift processing for credit cards and digital wallets.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <FaShieldAlt className="text-blue-600 text-5xl mb-4" />
          <h4 className="text-xl font-semibold mb-4 text-gray-800">
            Top-Notch Security
          </h4>
          <p className="text-gray-700 text-center">
            Advanced encryption and fraud detection to protect every
            transaction.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <FaMobileAlt className="text-blue-600 text-5xl mb-4" />
          <h4 className="text-xl font-semibold mb-4 text-gray-800">
            Mobile Compatibility
          </h4>
          <p className="text-gray-700 text-center">
            Accept payments from any device, ensuring a seamless mobile
            experience.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <FaReceipt className="text-blue-600 text-5xl mb-4" />
          <h4 className="text-xl font-semibold mb-4 text-gray-800">
            Instant Receipts
          </h4>
          <p className="text-gray-700 text-center">
            Provide immediate receipts to customers for a hassle-free
            experience.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <FaExchangeAlt className="text-blue-600 text-5xl mb-4" />
          <h4 className="text-xl font-semibold mb-4 text-gray-800">
            Flexible Payment Methods
          </h4>
          <p className="text-gray-700 text-center">
            Support for credit cards, digital wallets, and other payment
            methods.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <FaStar className="text-yellow-600 text-5xl mb-4" />
          <h4 className="text-xl font-semibold mb-4 text-gray-800">
            Outstanding Support
          </h4>
          <p className="text-gray-700 text-center">
            Dedicated customer support to ensure smooth transactions and resolve
            any issues.
          </p>
        </div>
      </div>
    </div>
  );
}
