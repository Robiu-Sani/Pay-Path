import img1 from "../../image/carousel.jpg";
import img2 from "../../image/carousel1.jpg";
import img3 from "../../image/carousel2.avif";
import img4 from "../../image/carousel3.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full h-64 mb-4 overflow-hidden rounded-md border border-[#cfb46b85]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="flex items-center justify-center">
          <img
            src={img1}
            alt="slider image"
            className="w-full min-h-full  object-center rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img
            src={img2}
            alt="slider image"
            className="w-full min-h-full  object-center rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img
            src={img3}
            alt="slider image"
            className="w-full min-h-full  object-center rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img
            src={img4}
            alt="slider image"
            className="w-full min-h-full  object-center rounded-md"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
