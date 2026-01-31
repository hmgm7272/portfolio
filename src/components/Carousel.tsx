import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "./Carousel.css";

type CarouselProps = {
  images: string[];
  width?: number;   // 最大幅として扱う
  height?: number;  // 比率用
};

export default function Carousel({
  images,
  width = 600,
  height = 320,
}: CarouselProps) {
  return (
    <div
      className="carousel"
      style={{
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
        marginTop: "3rem",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={images.length > 1}
        navigation
        pagination={{ clickable: true }}
        className="carousel__swiper"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`slide-${i}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}