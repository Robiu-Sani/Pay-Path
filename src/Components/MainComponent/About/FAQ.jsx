import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is PayPath?",
      answer:
        "PayPath is a comprehensive payment platform that offers secure and seamless payment solutions for businesses of all sizes.",
    },
    {
      question: "How does PayPath ensure the security of transactions?",
      answer:
        "We use advanced encryption and security protocols to protect all transactions, ensuring that your data is safe at all times.",
    },
    {
      question: "Can PayPath integrate with my existing system?",
      answer:
        "Yes, PayPath is designed to be flexible and can easily integrate with a variety of existing systems and platforms.",
    },
    {
      question: "What payment methods does PayPath support?",
      answer:
        "PayPath supports a wide range of payment methods, including credit/debit cards, online banking, mobile payments, and more.",
    },
    {
      question: "Is there a fee for using PayPath?",
      answer:
        "PayPath offers competitive pricing with transparent fees. Our pricing structure is designed to provide value to businesses of all sizes.",
    },
    {
      question: "How can I get started with PayPath?",
      answer:
        "Getting started with PayPath is easy. Simply sign up on our website, and our support team will guide you through the setup process.",
    },
    {
      question: "What kind of customer support does PayPath offer?",
      answer:
        "PayPath offers 24/7 customer support through various channels, including phone, email, and live chat, to assist with any inquiries or issues.",
    },
    {
      question: "Does PayPath offer multi-currency support?",
      answer:
        "Yes, PayPath supports multi-currency transactions, allowing businesses to accept payments in different currencies from around the world.",
    },
    {
      question: "Can I track my transactions in real-time with PayPath?",
      answer:
        "Absolutely! PayPath provides real-time transaction tracking through our user-friendly dashboard, giving you complete visibility over your payments.",
    },
    {
      question: "Is PayPath suitable for small businesses?",
      answer:
        "Yes, PayPath is designed to cater to businesses of all sizes, from small startups to large enterprises, providing flexible solutions tailored to your needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 px-5 bg-white">
      <div className="container mx-auto space-y-12 max-w-4xl">
        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Got questions? We’ve got answers. Here are some of the most common
            questions we receive about PayPath.
          </p>
        </section>

        {/* FAQ Section */}
        <section>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`text-gray-600 transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
