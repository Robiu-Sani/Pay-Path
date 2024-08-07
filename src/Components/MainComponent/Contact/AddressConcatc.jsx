import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function AddressConcatc() {
  const addresses = [
    {
      location: "Office 1",
      address: "123 Main St, City A, Country",
      phone: "+1234567890",
    },
    {
      location: "Office 2",
      address: "456 Another St, City B, Country",
      phone: "+0987654321",
    },
    {
      location: "Office 3",
      address: "789 Third St, City C, Country",
      phone: "+1122334455",
    },
    {
      location: "Office 4",
      address: "321 Fourth St, City D, Country",
      phone: "+6677889900",
    },
    {
      location: "Office 5",
      address: "654 Fifth St, City E, Country",
      phone: "+1122998877",
    },
    {
      location: "Office 4",
      address: "321 Fourth St, City D, Country",
      phone: "+6677889900",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Our Locations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {addresses.map((address, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-red-500 text-2xl mr-2" />
              <h3 className="text-xl font-semibold">{address.location}</h3>
            </div>
            <p className="mb-4">{address.address}</p>
            <div className="flex items-center">
              <FaPhone className="text-green-500 text-xl mr-2" />
              <a
                href={`tel:${address.phone}`}
                className="text-blue-600 hover:underline"
              >
                {address.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
