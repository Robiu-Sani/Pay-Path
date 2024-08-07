import {
  FaShieldAlt,
  FaLock,
  FaRobot,
  FaCheckCircle,
  FaExclamationTriangle,
  FaChartLine,
} from "react-icons/fa";

export default function FraudProtection() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Fraud Protection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main Feature Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border border-gray-200 hover:border-gray-400 transition duration-300">
          <FaShieldAlt className="text-red-600 text-6xl mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Comprehensive Security
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Protect your transactions with our advanced fraud protection system,
            designed to detect and prevent fraudulent activities in real-time.
          </p>
          <div className="flex items-center text-red-600">
            <FaCheckCircle className="text-2xl mr-2" />
            <span className="text-xl font-bold">99.9% Accuracy</span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border border-gray-200 hover:border-gray-400 transition duration-300">
          <FaLock className="text-red-600 text-6xl mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Secure Encryption
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Utilizes industry-standard encryption methods to ensure the safety
            of your sensitive data.
          </p>
          <div className="flex items-center text-red-600">
            <FaChartLine className="text-2xl mr-2" />
            <span className="text-xl font-bold">256-bit Encryption</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border border-gray-200 hover:border-gray-400 transition duration-300">
          <FaRobot className="text-red-600 text-5xl mb-4" />
          <h4 className="text-xl font-semibold mb-4 text-gray-800">
            AI-Driven Detection
          </h4>
          <p className="text-gray-700 text-center mb-6">
            Advanced AI algorithms identify and respond to potential fraud in
            real-time, enhancing security.
          </p>
          <div className="flex items-center text-red-600">
            <FaChartLine className="text-2xl mr-2" />
            <span className="text-xl font-bold">95% Detection Rate</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border border-gray-200 hover:border-gray-400 transition duration-300">
          <FaCheckCircle className="text-red-600 text-5xl mb-4" />
          <h4 className="text-xl font-semibold mb-4 text-gray-800">
            Verified Transactions
          </h4>
          <p className="text-gray-700 text-center mb-6">
            Ensures that all transactions are validated and secure before being
            processed.
          </p>
          <div className="flex items-center text-red-600">
            <FaChartLine className="text-2xl mr-2" />
            <span className="text-xl font-bold">98% Validation Success</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border border-gray-200 hover:border-gray-400 transition duration-300">
          <FaExclamationTriangle className="text-red-600 text-5xl mb-4" />
          <h4 className="text-xl font-semibold mb-4 text-gray-800">
            Real-Time Alerts
          </h4>
          <p className="text-gray-700 text-center mb-6">
            Instant notifications for suspicious activities to prevent potential
            fraud.
          </p>
          <div className="flex items-center text-red-600">
            <FaChartLine className="text-2xl mr-2" />
            <span className="text-xl font-bold">Instant Alerts</span>
          </div>
        </div>
        {/* New Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border border-gray-200 hover:border-gray-400 transition duration-300">
          <FaChartLine className="text-red-600 text-5xl mb-4" />
          <h4 className="text-xl font-semibold mb-4 text-gray-800">
            Performance Insights
          </h4>
          <p className="text-gray-700 text-center mb-6">
            Detailed reports and analytics to monitor and optimize fraud
            protection measures.
          </p>
          <div className="flex items-center text-red-600">
            <FaChartLine className="text-2xl mr-2" />
            <span className="text-xl font-bold">Real-Time Analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
}
