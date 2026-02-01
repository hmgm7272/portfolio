import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "./Carousel.css";

type CarouselProps = {
  images: string[];
  width?: number;
  height?: number;
};

function getExt(path: string) {
  const clean = path.split("?")[0].split("#")[0];
  return clean.slice(clean.lastIndexOf(".") + 1).toLowerCase();
}

function isVideo(src: string) {
  return ["mp4", "webm", "ogg"].includes(getExt(src));
}
function isAudio(src: string) {
  return ["mp3", "wav", "ogg", "m4a", "mov"].includes(getExt(src));
}
function isImage(src: string) {
  return ["png", "jpg", "jpeg", "webp", "gif", "svg"].includes(getExt(src));
}

export default function Carousel({ images, width = 600, height = 320 }: CarouselProps) {
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
        // メディア操作中にスワイプ誤爆しにくくする
        noSwiping
        noSwipingClass="swiper-no-swiping"
        // スライド変わったら再生止める
        onSlideChange={(swiper) => {
          const root = swiper.el as HTMLElement;
          root.querySelectorAll("video, audio").forEach((m) => {
            const el = m as HTMLMediaElement;
            el.pause();
            el.currentTime = 0;
          });
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            {isVideo(src) ? (
              <video
                className="carousel-media swiper-no-swiping"
                src={src}
                controls
                playsInline
              />
            ) : isAudio(src) ? (
              <div className="carousel-audio swiper-no-swiping">
                <audio className="carousel-audio__player" src={src} controls />
              </div>
            ) : isImage(src) ? (
              <img src={src} alt={`slide-${i}`} className="carousel-image" />
            ) : (
              <div className="carousel-unknown">
                この形式は表示できない: {src}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
