import image from "../../../image/girl.png";
import image1 from "../../../image/sendmoney.png";
import image2 from "../../../image/cashout.png";
import image3 from "../../../image/cash-in.png";
import image4 from "../../../image/Balance Inquiry.webp";
import image5 from "../../../image/TransactionsHistory.webp";
import image6 from "../../../image/card.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";

export default function WeProvide() {
  const featureData = [
    {
      image: image1,
      title: "Send Money",
      desc: "Seamlessly transfer funds with PayPath’s user-friendly and secure payment options.",
    },
    {
      image: image2,
      title: "Cash Out",
      desc: "Withdraw your money effortlessly with our reliable cash-out services.",
    },
    {
      image: image3,
      title: "Cash In",
      desc: "Deposit cash into your account quickly and safely using PayPath’s efficient systems.",
    },
    {
      image: image4,
      title: "Balance Inquiry",
      desc: "Check your account balance in real-time with our intuitive and secure balance inquiry feature.",
    },
    {
      image: image5,
      title: "Transactions History",
      desc: "Keep track of your transactions with detailed history and comprehensive reports.",
    },
    {
      image: image6,
      title: "Get the Card",
      desc: "Manage your PayPath card with ease, ensuring a smooth and convenient payment experience.",
    },
  ];

  return (
    <div className="container mx-auto px-2 py-10">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex-col-reverse flex sm:flex-row">
          <div className="w-full sm:w-1/2 flex justify-center items-end">
            <img
              src={image}
              alt="user image"
              className="max-h-[500px] max-w-full"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-around gap-5 py-10">
            <h2 className="text-2xl font-bold text-center sm:text-left">
              Your Payment Pathway
            </h2>
            <p>
              At PayPath, we streamline your payment processes with cutting-edge
              technology and a user-friendly interface. Our goal is to provide a
              seamless experience for sending, receiving, and managing money.
            </p>
            <ul className="w-full list-disc ml-8">
              <li>24/7 Customer Support</li>
              <li>Global Payment Solutions</li>
              <li>Instant Balance Checks</li>
              <li>Compatible with All Major Banks</li>
            </ul>
            <div className="w-full h-auto">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={800} // Adjust speed for smoother transitions
                loop={true} // Enable loop for continuous scrolling
                grabCursor={true} // Show grab cursor when slides are draggable
                modules={[Autoplay]}
                className="mySwiper flex justify-center rounded-md overflow-hidden items-center w-full h-full transition-opacity"
                style={{ transitionDuration: "0.8s" }} // Add custom CSS transition for opacity
              >
                {featureData.map((item, idx) => {
                  return (
                    <SwiperSlide key={idx} className="w-full">
                      <div className="w-full bg-gradient-bg p-4 cursor-pointer hover:scale-105 border-[#cfb46b85] border flex items-center gap-5 rounded-md">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-[150px] rounded-md"
                        />
                        <div>
                          <h1 className="text-2xl text-gradient font-bold">
                            {item.title}
                          </h1>
                          <p className="text-gradient text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="w-full h-[50px] rounded-md bg-gradient-bg flex justify-center items-center overflow-hidden">
          <marquee className="text-white px-2">
            PayPath is committed to transforming the way you manage your
            finances. Enjoy secure, fast, and convenient payment solutions
            tailored to your needs.
          </marquee>
        </div>
        <div className="w-full mx-auto p-2">
          <p className="text-justify">
            At PayPath, we aim to revolutionize your financial transactions with
            a commitment to security, convenience, and innovation. Our dedicated
            team continuously enhances our platform to provide you with a
            seamless payment experience.
          </p>
          <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="w-full p-3">
              <BiTargetLock className="text-4xl" />
              <h3 className="text-2xl my-4 font-bold">Our Vision</h3>
              <p className="text-justify">
                Our vision is to be the leading payment platform, offering
                unparalleled convenience and security to users worldwide. We
                strive to empower individuals and businesses with innovative
                financial solutions that simplify their payment processes.
              </p>
            </div>
            <div className="w-full p-3">
              <AiOutlineSafetyCertificate className="text-4xl" />
              <h3 className="text-2xl my-4 font-bold">Our Commitment</h3>
              <p className="text-justify">
                At PayPath, our commitment is to deliver top-notch service with
                a focus on reliability and security. We are dedicated to
                providing an exceptional user experience and ensuring that every
                transaction is safe, fast, and efficient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
