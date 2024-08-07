import { FaPlug, FaCogs, FaLink, FaSync } from "react-icons/fa";

export default function SeamlessIntegrations() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Seamless Integrations
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Integration Overview */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 flex flex-col items-start">
          <FaPlug className="text-blue-600 text-6xl mb-4" />
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            Easy Connectivity
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Integrate effortlessly with various platforms and systems, enhancing
            your workflow and connecting your business with multiple services.
          </p>
          <FaLink className="text-gray-600 text-4xl mb-2" />
          <p className="text-gray-600 text-md">
            Seamless connections with CRM, ERP, and other third-party tools.
          </p>
        </div>

        {/* Automation Section */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 flex flex-col items-start">
          <FaCogs className="text-green-600 text-6xl mb-4" />
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            Automation
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Automate repetitive tasks and processes, reducing manual work and
            increasing efficiency.
          </p>
          <FaSync className="text-gray-600 text-4xl mb-2" />
          <p className="text-gray-600 text-md">
            Effortless synchronization of data across platforms.
          </p>
        </div>
      </div>
    </div>
  );
}
