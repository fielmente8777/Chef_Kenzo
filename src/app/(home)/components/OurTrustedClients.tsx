"use client";
import { Container, Section } from "@/components";
import SwiperCarousel from "@/components/SwiperCarousel";
import { useWebContext } from "@/contextapi/WebContext";
import Image from "next/image";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const OurTrustedClients: React.FC<{ title: string; images: string[] }> = ({
  title,
  images,
}) => {
  images = [...images, ...images];
  const { setIsOpen } = useWebContext();
  return (
    <Section>
      <Container className="space-y-10 md:space-y-16">
        <h2
          className="text-2xl md:text-3xl text-[#1C1C1C] text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        />
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
        <button
          onClick={() => setIsOpen(true)}
          className="flex gap-2 mx-auto px-6 capitalize bg-red-primary hover:bg-white hover:text-red-primary hover:scale-x-110 duration-700 transition rounded-md py-3 font-medium border border-solid border-red-primary bg-primary text-black-primary"
        >
          Get A Quote!
        </button>
      </Container>
    </Section>
  );
};

export default OurTrustedClients;
