import { FaChartLine, FaDatabase, FaBullseye, FaUserCog } from "react-icons/fa";

export default function AnalyticsReporting() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Analytics & Reporting
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Data Insights Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <FaChartLine className="text-blue-600 text-4xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Data-Driven Insights
          </h3>
          <p className="text-gray-700 text-lg text-center">
            Utilize advanced analytics tools to gain actionable insights and
            understand your business performance at a granular level.
          </p>
        </div>

        {/* Reporting Tools Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <FaDatabase className="text-green-600 text-4xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Comprehensive Reporting
          </h3>
          <p className="text-gray-700 text-lg text-center">
            Generate detailed reports to track metrics and KPIs, helping you to
            make informed decisions and drive business growth.
          </p>
        </div>

        {/* Goal Tracking Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <FaBullseye className="text-yellow-600 text-4xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Goal Tracking
          </h3>
          <p className="text-gray-700 text-lg text-center">
            Set and track your business goals with precision, using our tools to
            monitor progress and adjust strategies as needed.
          </p>
        </div>

        {/* User Analytics Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <FaUserCog className="text-purple-600 text-4xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            User Analytics
          </h3>
          <p className="text-gray-700 text-lg text-center">
            Analyze user behavior and engagement to tailor your strategies and
            improve user experience across your platforms.
          </p>
        </div>
      </div>
    </div>
  );
}
