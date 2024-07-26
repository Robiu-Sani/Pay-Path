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

export default function WeProvite() {
  const featureData = [
    {
      image: image1,
      title: "Send Money",
      desc: "Modern Money Transfers: Sending Funds in the Digital Age",
    },
    {
      image: image2,
      title: "Cash out",
      desc: "Cash Out with Confidence: Your Guide to Smooth Transactions",
    },
    {
      image: image3,
      title: "Cash-in",
      desc: "Modern Cash In: Efficient and Secure Ways to Deposit Money",
    },
    {
      image: image4,
      title: "Balance inquiry",
      desc: "Monitor Your Funds: Quick and Accurate Balance Checks",
    },
    {
      image: image5,
      title: "Transactions History",
      desc: "Monitor Your Money: The Importance of Transaction History",
    },
    {
      image: image6,
      title: "Get the card",
      desc: "Managing Your Card: Best Practices for Security and Convenience",
    },
  ];

  return (
    <div className="container mx-auto px-2 py-10">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex-col-reverse flex sm:flex-row">
          <div className="w-full sm:w-1/2 flex justify-center items-end">
            <img
              src={image}
              alt="user image "
              className="max-h-[500px] max-w-full"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-around gap-5 py-10">
            <h2 className="text-2xl font-bold text-center sm:text-left">
              Make your way!
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              vero dolorem labore ducimus illo consectetur cupiditate illum
              libero quae consequatur.
            </p>
            <ul className="w-full ml-8 ">
              <li>24 hours support</li>
              <li>servies in whole world</li>
              <li>inquery yoour won belanbe</li>
              <li>Work with every bank</li>
            </ul>
            <div className=" w-full h-auto">
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
                      <div className="w-full  bg-gradient-bg p-4 cursor-pointer  hover:scale-105 border-[#cfb46b85] border flex items-center gap-5 rounded-md">
                        <img
                          src={item.image}
                          alt="send money"
                          className="h-[150px] rounded-md"
                        />
                        <div className="">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid
            mollitia est quasi. Fugit doloribus soluta, voluptatem quos ipsam
            corrupti suscipit dolorum libero illo cupiditate itaque
            exercitationem commodi asperiores voluptatibus.
          </marquee>
        </div>
        <div className="w-full mx-auto p-2">
          <p className="text-justify">
            At Tutor Nest, we believe in the power of education to transform
            lives. Our journey began with a simple yet profound mission: to
            provide accessible and personalized learning opportunities for
            students worldwide. With a team of passionate educators and
            technologists, we embarked on a quest to create a platform where
            learning knows no bounds.
          </p>
          <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="w-full p-3">
              <BiTargetLock className="text-4xl" />
              <h3 className="text-2xl my-4 font-bold">Our Vision</h3>
              <p className="text-justify">
                Our vision is to empower learners of all ages and backgrounds to
                reach their full potential. We envision a world where education
                is not confined by traditional barriers, but instead, fosters
                creativity, curiosity, and critical thinking.{" "}
              </p>
            </div>
            <div className="w-full p-3">
              <AiOutlineSafetyCertificate className="text-4xl" />
              <h3 className="text-2xl my-4 font-bold">Our Commitment</h3>
              <p className="text-justify">
                At Tutor Nest, our commitment is to excellence in education. We
                strive to provide a supportive and inclusive learning
                environment where every student feels valued and inspired to
                succeed. With a dedication to continuous improvement and
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
