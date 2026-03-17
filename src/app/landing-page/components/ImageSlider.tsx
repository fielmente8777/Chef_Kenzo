"use client";
import SwiperCarousel from "@/components/SwiperCarousel";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const ImageSlider = ({ images }: { images: string[] }) => {
  return (
    <div className="md:hidden block">
      <SwiperCarousel
        data={images}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        speed={1000}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        renderSlide={(image) => (
          <div className="w-full  aspect-[4/4.5] relative">
            <Image src={image} alt={image} fill className="object-cover" />
          </div>
        )}
      />
    </div>
  );
};

export default ImageSlider;
