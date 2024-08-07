import { FaEye, FaChartLine, FaPeopleCarry } from "react-icons/fa";

export default function OurVision() {
  return (
    <div className="w-full py-16 px-5 bg-white text-gray-800">
      <div className="container mx-auto space-y-12 max-w-4xl">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Our Vision
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At PayPath, we envision a future where financial transactions are
            seamless, secure, and accessible to everyone. Our goal is to empower
            individuals and businesses to manage their finances with confidence
            and ease.
          </p>
        </section>

        {/* Vision Details Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FaEye className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-center">
              Clarity of Purpose
            </h3>
            <p className="text-gray-600 text-center">
              We aim to provide transparent and straightforward solutions for
              all your financial needs, making it easier for you to achieve your
              goals.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaChartLine className="text-green-500 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-center">
              Innovative Growth
            </h3>
            <p className="text-gray-600 text-center">
              Our vision includes leveraging cutting-edge technology to deliver
              innovative financial products that drive growth and success.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaPeopleCarry className="text-purple-500 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-center">
              Empowering Communities
            </h3>
            <p className="text-gray-600 text-center">
              We believe in empowering communities by providing tools and
              resources that enable financial independence and prosperity for
              all.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
