import Image from "next/image";
import Container from "./Container";
import { BannerTypeProps } from "@/types/type";

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
        <div className="w-full lg:grid grid-cols-5 flex flex-col-reverse gap-7">
          <div className="text-black-primary col-span-3 flex flex-col gap-2 justify-center bg-no-repeat  bg-[url('/images/Asset46.png')]"
          style={{backgroundSize: '50%'}}>
            <h1 className="text-xl lg:text-2xl font-normal">{title}</h1>
            <h2
              className="text-3xl lg:text-5xl"
              dangerouslySetInnerHTML={{ __html: subTitle }}
            />
            <p className="lg:text-lg text-base mt-2">{description}</p>
            <ul className="flex gap-16 items-center mt-4">
              {listItems?.map((item, index) => (
                <li className="flex flex-col gap-2" key={index}>
                  <span className="text-4xl font-extrabold">{item.number}</span>
                  <span className="text-lg">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex justify-center col-span-2 lg:justify-end">
            <Image
              src={src}
              alt={`${alt ? alt : "Banner"}`}
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
