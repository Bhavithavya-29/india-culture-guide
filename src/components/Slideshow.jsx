import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slideshow() {
  const images = [
    "/images/india1.jpg",
    "/images/india2.jpg",
    "/images/india3.jpg",
  ];

  return (
    <div className="w-full h-[400px]">
      <Swiper spaceBetween={30} slidesPerView={1} loop autoplay>
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Slide ${idx}`}
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
