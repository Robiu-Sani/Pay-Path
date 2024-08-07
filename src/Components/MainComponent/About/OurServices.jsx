import {
  FaCreditCard,
  FaShieldAlt,
  FaSyncAlt,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";

export default function OurServices() {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-5 space-y-12 max-w-7xl">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            PayPath offers a range of services designed to help businesses
            manage their payments securely and efficiently. Explore our core
            services below.
          </p>
        </section>

        {/* Services Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
            <FaCreditCard className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Payment Processing</h3>
            <p className="text-gray-600 text-center">
              Seamlessly accept payments from various methods, including credit
              cards, debit cards, and mobile payments, with secure processing.
            </p>
          </div>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
            <FaShieldAlt className="text-green-500 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Fraud Protection</h3>
            <p className="text-gray-600 text-center">
              Protect your transactions with advanced fraud detection and
              security protocols that ensure your business and customers are
              safe.
            </p>
          </div>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
            <FaSyncAlt className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Recurring Billing</h3>
            <p className="text-gray-600 text-center">
              Automate your billing cycles with our recurring payment solutions,
              perfect for subscription-based services and ongoing payments.
            </p>
          </div>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
            <FaMobileAlt className="text-purple-500 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Mobile Payments</h3>
            <p className="text-gray-600 text-center">
              Enable customers to pay on the go with our secure mobile payment
              solutions, compatible with all major mobile devices and platforms.
            </p>
          </div>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
            <FaChartLine className="text-red-500 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Analytics & Reporting</h3>
            <p className="text-gray-600 text-center">
              Gain insights into your business with detailed analytics and
              reporting tools that help you track performance and optimize your
              operations.
            </p>
          </div>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
            <FaSyncAlt className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Seamless Integrations</h3>
            <p className="text-gray-600 text-center">
              Integrate PayPath with your existing systems and platforms easily,
              ensuring a smooth and hassle-free experience for your business.
            </p>
          </div>
        </section>

        {/* Closing Section */}
        <section className="text-center">
          <p className="text-lg text-gray-700">
            Discover how PayPath can help streamline your payment processes and
            support your business growth.
          </p>
        </section>
      </div>
    </div>
  );
}
