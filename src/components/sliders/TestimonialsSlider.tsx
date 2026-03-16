"use client";
import { TestimonialsProps } from "@/types/type";
import SwiperCarousel from "../SwiperCarousel";
import { Autoplay } from "swiper/modules";

const TestimonialsSlider: React.FC<{
  data: TestimonialsProps["testimonial"];
}> = ({ data }) => {
  return (
    <div className="h-full w-full block">
      <SwiperCarousel
        data={data}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={900}
        spaceBetween={5}
        renderSlide={(item) => (
          <div className="h-full flex flex-col justify-start">
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="flex gap-x-1">
                {item.icon.map((star: any, index: number) => (
                  <span key={index}>{star}</span>
                ))}
              </div>
              <p className="text-gray-primary lg:text-lg text-base text-center">
                {item.data.description}
              </p>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default TestimonialsSlider;
