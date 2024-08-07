import { FaRegEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function ContactOverview() {
  return (
    <div className="w-full py-16 px-5 bg-white text-gray-900">
      <div className="container mx-auto space-y-12 max-w-5xl">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-6xl font-extrabold mb-6">Get in Touch</h1>
          <p className="text-lg max-w-3xl mx-auto">
            At PayPath, we are committed to providing top-notch support for all
            your inquiries. Our dedicated team is here to ensure your experience
            is smooth, secure, and satisfying.
          </p>
        </section>

        {/* Contact Information Section */}
        <section>
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Reach Out to Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaRegEnvelope className="text-blue-500 text-3xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-700 mb-4">
                Have any questions? Send us an email and we'll get back to you
                promptly.
              </p>
              <p className="text-blue-500 font-medium">support@paypath.com</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaPhoneAlt className="text-green-500 text-3xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-700 mb-4">
                Need assistance? Our team is ready to take your call during
                business hours.
              </p>
              <p className="text-green-500 font-medium">+1 (800) 123-4567</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaClock className="text-yellow-500 text-3xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-700 mb-4">
                Our support team is available from Monday to Friday, 9 AM - 6 PM
                (EST).
              </p>
              <p className="text-yellow-500 font-medium">
                Mon-Fri: 9 AM - 6 PM (EST)
              </p>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="text-center">
          <p className="text-lg">
            We're here to make sure you have the best experience with PayPath.
            Reach out to us anytime!
          </p>
        </section>
      </div>
    </div>
  );
}
