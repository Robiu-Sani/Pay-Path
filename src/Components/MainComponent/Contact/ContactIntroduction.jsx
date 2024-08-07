import { FaCreditCard, FaPhone, FaClock, FaGlobe } from "react-icons/fa";
import image from "../../../image/contactbg.jpg"; // Ensure the path is correct

export default function ContactIntroduction() {
  return (
    <div
      className="w-full py-10 px-2 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 space-y-12 bg-black bg-opacity-50 py-16 rounded-lg">
        {/* Introduction Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to PayPath</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At PayPath, we prioritize your convenience and security. Our
            customer support and payment methods are designed to provide you
            with seamless experiences, no matter where you are in the world.
          </p>
        </section>

        {/* Payment Methods Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Payment Methods</h2>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <FaCreditCard className="text-4xl mb-2" />
              <p>Credit/Debit Cards</p>
            </div>
            <div className="flex flex-col items-center">
              <FaGlobe className="text-4xl mb-2" />
              <p>Online Banking</p>
            </div>
            <div className="flex flex-col items-center">
              <FaPhone className="text-4xl mb-2" />
              <p>Mobile Payments</p>
            </div>
          </div>
        </section>

        {/* Live Support Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Live Support Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
              <FaClock className="text-2xl mb-2" />
              <h3 className="text-xl font-bold mb-2">North America</h3>
              <p>Support Hours: 9 AM - 6 PM (EST)</p>
              <p>Phone: +1-800-123-4567</p>
            </div>
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
              <FaClock className="text-2xl mb-2" />
              <h3 className="text-xl font-bold mb-2">Europe</h3>
              <p>Support Hours: 9 AM - 6 PM (CET)</p>
              <p>Phone: +44-800-123-456</p>
            </div>
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
              <FaClock className="text-2xl mb-2" />
              <h3 className="text-xl font-bold mb-2">Asia</h3>
              <p>Support Hours: 9 AM - 6 PM (IST)</p>
              <p>Phone: +91-800-123-4567</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
