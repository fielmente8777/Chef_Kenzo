"use client";
import Image from "next/image";
import SwiperCarousel from "../SwiperCarousel";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const CLientSlider = ({ images }: { images: string[] }) => {
  images = [...images, ...images];
  return (
    <div className="demo space-y-6">
      <div className="bg-[linear-gradient(to_right,_#F5F5F5,_#F2B9CA,_#F5F5F5)] w-full h-px" />
      <SwiperCarousel
        data={images}
        slidesPerView={1.5}
        spaceBetween={10}
        loop
        modules={[Pagination, Autoplay, FreeMode]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        speed={5000}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        className="w-full"
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        renderSlide={(src) => (
          <div className="w-full relative md:aspect-[4/2.5] aspect-[4/1.5] rounded-lg">
            <Image
              src={src}
              alt={src}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                background: "white",
              }}
            />
          </div>
        )}
      />
      <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F2B9CA,_#FFFFFF)] w-full h-px"></div>
    </div>
  );
};

export default CLientSlider;
