"use client";
import Image from "next/image";
import Container from "./Container";
import SliderSwip from "./SliderSwip";
import { BannerTypeProps } from "@/types/type";
import { Autoplay } from "swiper/modules";

const Banner: React.FC<BannerTypeProps> = ({
  src,
  alt,
  listItems,
  title,
  subTitle,
  description,
}) => {
  return (
    <section className="py-[2.5rem] bg-yellow-primary">
      <Container>
        <div className="w-full lg:grid grid-cols-7 flex flex-col-reverse gap-7">
          <div
            className="text-black-primary col-span-4 flex flex-col gap-2 justify-center bg-no-repeat  bg-[url('/images/Asset46.png')]"
            style={{ backgroundSize: "65%" }}
          >
            <h1 className="text-xl lg:text-2xl font-normal">{title}</h1>
            <h2
              className="text-3xl lg:text-5xl"
              dangerouslySetInnerHTML={{ __html: subTitle }}
            />
            <p className="lg:text-lg text-base mt-2">{description}</p>
            <ul className="flex flex-wrap max-sm:justify-center max-md:hidden  gap-10 md:gap-16 items-center mt-4">
              {listItems?.map((item, index) => (
                <li
                  className="flex flex-col max-sm:items-center gap-2"
                  key={index}
                >
                  <span className="text-4xl font-extrabold">{item.number}</span>
                  <span className="text-lg">{item.description}</span>
                </li>
              ))}
            </ul>
            <div className="w-full hidden max-md:block">
              <SliderSwip
                data={listItems}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2400,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={900}
                slidesPerView={2}
                spaceBetween={10}
                classNameSwiper="mt-8"
              >
                {(item) => (
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <span className="text-3xl font-black">
                      {item.number}
                    </span>
                    <span className="text-sm font-medium">{item.description}</span>
                  </div>
                )}
              </SliderSwip>
            </div>
          </div>
          <div className="w-full flex justify-center col-span-3 lg:justify-end">
            <Image
              src={src}
              alt={`${alt ? alt : "Banner"}`}
              width={600}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
