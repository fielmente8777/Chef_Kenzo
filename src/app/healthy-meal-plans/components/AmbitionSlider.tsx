"use client";
import SwiperCarousel from "@/components/SwiperCarousel";
import { AmbitionSectionProps } from "@/types/landingPageType";
import { Navigation } from "swiper/modules";
import AmbitionCard from "./cards/AmbitionCard";

const AmbitionSlider: React.FC<{ cards: AmbitionSectionProps["items"] }> = ({
  cards,
}) => {
  return (
    <div className="md:hidden relative">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={16}
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        loop
        className="max-w-[90%] w-full"
        renderSlide={(item) => <AmbitionCard {...item} />}
      />
      <div className="z-10 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform w-full max-w-[130%] flex justify-between items-center">
        <button className="flex items-center justify-center pointer-events-auto w-8 aspect-square bg-white rounded-full shadow-md button-prev rotate-180">
          <Foo />
        </button>
        <button className="flex items-center justify-center pointer-events-auto w-8 aspect-square bg-white rounded-full shadow-md button-next">
          <Foo />
        </button>
      </div>
    </div>
  );
};

export default AmbitionSlider;

export const Foo = () => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.127 7.94825H0.75C0.537167 7.94825 0.359 7.87642 0.2155 7.73275C0.0718332 7.58925 0 7.41108 0 7.19825C0 6.98542 0.0718332 6.80725 0.2155 6.66375C0.359 6.52008 0.537167 6.44825 0.75 6.44825H12.127L6.95775 1.279C6.80908 1.13033 6.73567 0.956332 6.7375 0.756999C6.7395 0.557665 6.818 0.380416 6.973 0.22525C7.12817 0.0804164 7.30383 0.00541641 7.5 0.00024974C7.69617 -0.00491693 7.87183 0.0700831 8.027 0.22525L14.3673 6.5655C14.4609 6.65917 14.5269 6.75792 14.5652 6.86175C14.6037 6.96558 14.623 7.07775 14.623 7.19825C14.623 7.31875 14.6037 7.43092 14.5652 7.53475C14.5269 7.63858 14.4609 7.73733 14.3673 7.831L8.027 14.1713C7.8885 14.3098 7.717 14.3806 7.5125 14.3838C7.308 14.3869 7.12817 14.3161 6.973 14.1713C6.818 14.0161 6.7405 13.8379 6.7405 13.6368C6.7405 13.4354 6.818 13.2572 6.973 13.102L12.127 7.94825Z"
      fill="black"
    />
  </svg>
);
