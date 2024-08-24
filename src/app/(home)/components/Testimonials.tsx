"use client";
import { Card, Container, Section, SliderSwip } from "@/components";
import { DataTypeProps } from "@/types/type";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials: React.FC<DataTypeProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-red-primary text-center">{title}</h2>
          <p
            className="text-center text-black-primary text-2xl lg:text-[2rem]/[2.5rem]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <SliderSwip
          data={items}
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: ".pagination_date",
            type: "bullets",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={900}
          spaceBetween={5}
          classNameSwiper="mySwiper mt-8" // Merged className props
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          classNameSwiperSlide="px-4"
        >
          {(item) => (
            <div className="min-h-[26rem] h-full flex flex-col justify-end px-1 pb-1 pt-2">
              <div className="relative border border-red-primary p-5 rounded-lg">
                <div className="absolute lg:-top-[40%] -top-1/3 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Image
                    src={item.image.src}
                    alt="alt"
                    width={106}
                    height={106}
                    className="rounded-full border"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-5 mt-7">
                  <h3 className="text-2xl text-black-primary">
                    {item.data.title}
                  </h3>
                  <div className="flex space-x-1">
                    {item.icon.map((star: any, index: number) => (
                      <span key={index}>{star}</span>
                    ))}
                  </div>
                  <p className="text-gray-primary lg:text-lg text-base text-center">
                    {item.data.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </SliderSwip>
        <div className="pagination pagination_date flex items-center justify-center gap-1 mt-8"></div>
      </Container>
    </Section>
  );
};

export default Testimonials;
