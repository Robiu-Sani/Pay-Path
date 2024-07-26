import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import image from "../../../image/carousel.jpg";

export default function Testimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div className="w-full xl:w-[1000px] py-10 mx-auto px-3">
      <div className="w-full py-7">
        <img src={image} alt="image" className="w-full rounded-md mb-5" />
        <div className="flex mb-5 mx-auto flex-col w-[220px] gap-1">
          <h3 className="text-center uppercase font-bold text-xl text-black">
            User Reviews
          </h3>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="w-full flex flex-col justify-center items-center">
                <FaQuoteLeft className="text-[100px] mt-4 text-center" />
                <p className="text-center w-[80%] my-5">{review.details}</p>
                <h3 className="text-2xl font-bold text-orange-500">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
