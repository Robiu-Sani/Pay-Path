import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import image1 from "../../../image/t1.png";
import image2 from "../../../image/t2.jpeg";
import image3 from "../../../image/t3.jpeg";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      image: image1,
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: image2,
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    {
      name: "Itersk Lee",
      position: "COO",
      image: image3,
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  ];

  return (
    <div className="w-full py-16 bg-gradient-bg text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-center">
                {member.name}
              </h3>
              <p className="text-center text-gray-600">{member.position}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={member.linkedin}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={member.twitter}
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={member.github}
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
