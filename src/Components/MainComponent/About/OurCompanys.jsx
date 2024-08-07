import { FaBuilding, FaCode, FaChartPie, FaMobileAlt } from "react-icons/fa";

export default function OurCompanys() {
  const companies = [
    {
      name: "Tech Innovations",
      description:
        "Leading the charge in technological advancements and software development.",
      icon: <FaCode className="text-indigo-500 text-5xl mb-4" />,
    },
    {
      name: "Financial Services",
      description:
        "Providing secure and reliable financial solutions to businesses and individuals.",
      icon: <FaChartPie className="text-green-500 text-5xl mb-4" />,
    },
    {
      name: "Mobile Solutions",
      description:
        "Creating cutting-edge mobile applications that drive business growth and efficiency.",
      icon: <FaMobileAlt className="text-blue-500 text-5xl mb-4" />,
    },
    {
      name: "Real Estate Ventures",
      description:
        "Investing in and managing properties to build communities and create value.",
      icon: <FaBuilding className="text-yellow-500 text-5xl mb-4" />,
    },
  ];

  return (
    <div className="w-full py-16 px-5 bg-gray-50 text-gray-800">
      <div className="container mx-auto space-y-12 max-w-5xl">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Our Companies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a diverse group of companies committed to excellence across
            various industries. Explore our different sections to learn more
            about what we do.
          </p>
        </section>

        {/* Companies Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105"
            >
              {company.icon}
              <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
              <p className="text-gray-600">{company.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
