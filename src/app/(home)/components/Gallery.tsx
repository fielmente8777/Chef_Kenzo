"use client";
import { Card, Container, Section, SliderSwip } from "@/components";
import { DataTypeProps } from "@/types/type";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const Gallery: React.FC<DataTypeProps> = ({ title, items, description }) => {
  return (
    <Section>
      <div className="max-w-[1530px] mx-auto max-md:px-8">
        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-3xl font-semibold text-red-primary text-center">
              {title}
            </h2>
            {/* <p
              className="text-center text-black-primary text-2xl lg:text-[2rem]/[2.5rem]"
              dangerouslySetInnerHTML={{ __html: description }}
            /> */}
          </div>
          <SliderSwip
            data={items}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            pagination={{
              clickable: true,
              type: "bullets",
              el: ".pagination-date",
            }}
            spaceBetween={10}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            classNameSwiper="mySwiper mt-10"
          >
            {(item) => (
              <div className="w-full relative aspect-[4/5]">
                <Image
                  src={item.image?.src}
                  alt="alt"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </SliderSwip>

          <div className="pagination-date pagination flex justify-center items-center mt-10 gap-1 max-md:mb-4"></div>
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
