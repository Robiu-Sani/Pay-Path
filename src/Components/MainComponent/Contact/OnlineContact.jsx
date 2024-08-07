import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export default function OnlineContact() {
  return (
    <div className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Online Contact</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/robius-sani/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          <FaLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Robiu-Sani"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300"
        >
          <FaGithub className="text-xl" />
          <span>GitHub</span>
        </a>
        <a
          href="https://x.com/RobiusS4690"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          <FaTwitter className="text-xl" />
          <span>Twitter</span>
        </a>
        <a
          href="mailto:hafazrobiussani@gmail.com"
          className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
        >
          <FaEnvelope className="text-xl" />
          <span>Email</span>
        </a>
        <a
          href="tel:+8801617688805"
          className="flex items-center space-x-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          <FaPhone className="text-xl" />
          <span>Call</span>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-800 px-4 py-2 rounded-lg hover:bg-blue-900 transition duration-300"
        >
          <FaFacebook className="text-xl" />
          <span>Facebook</span>
        </a>
        <a
          href="https://wa.me/+8801617688805"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp className="text-xl" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
