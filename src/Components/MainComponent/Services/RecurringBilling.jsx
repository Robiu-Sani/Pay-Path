import {
  FaCalendarAlt,
  FaSync,
  FaDollarSign,
  FaUserCheck,
} from "react-icons/fa";

export default function RecurringBilling() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Recurring Billing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Main Feature Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center md:text-left">
          <FaCalendarAlt className="text-green-600 text-8xl mb-6" />
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            Automated Payments
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Simplify your billing process with automated recurring payments.
            Manage subscriptions, handle renewals, and maintain consistent cash
            flow effortlessly.
          </p>
          <p className="text-gray-600">
            Our system ensures that you can focus on growing your business while
            we take care of the billing complexities.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Key Features
          </h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaSync className="text-green-600 text-5xl" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Seamless Renewal
                </h4>
                <p className="text-gray-700 text-base">
                  Automatically renew subscriptions without manual intervention.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaDollarSign className="text-green-600 text-5xl" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Flexible Pricing
                </h4>
                <p className="text-gray-700 text-base">
                  Adapt pricing models easily to fit your business needs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaUserCheck className="text-green-600 text-5xl" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Customer Management
                </h4>
                <p className="text-gray-700 text-base">
                  Efficiently manage customer profiles and track billing
                  history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
