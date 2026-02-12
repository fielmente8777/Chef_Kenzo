"use client";
import { TwoColCardprops } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

const TwoColGridCard: React.FC<TwoColCardprops> = ({
  title,
  description,
  description2,
  image,
  linkText,
  href,
  linkText1,
  href1,
  listItems,
}) => {
  // const { setIsOpen } = useWebContext();
  
  return (
    <div className="lg:grid grid-cols-2 flex flex-col gap-5">
      <div className="relative  img_hover rounded-lg overflow-hidden">
        <Image
          priority={true}
          src={image.src}
          alt={`${image.alt ? image.alt : "avatar"}`}
          fill
          className="object-cover img rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between gap-5">
        <h2 className="text-xl lg:text-2xl font-semibold text-red-primary lg:text-start text-center">
          {title}
        </h2>
        {/* <p
          className="text-xl lg:text-[2rem]/[2.5rem] font-normal text-black-primary lg:text-start text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        /> */}

        {description2 && (
          <p className="text-base md:text-[18px]  text-gray-primary lg:text-start text-center">
            {description2}
          </p>
        )}
        {listItems && (
          <ul className="flex flex-col gap-2">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="text-base text-black-primary font-light flex gap-2"
              >
                <span className="">{item.icon}</span>
                {item.description}
              </li>
            ))}
          </ul>
        )}
        <div className="flex max-sm:flex-col gap-5 lg:justify-start justify-center items-center">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 px-6 capitalize bg-red-primary hover:bg-white hover:text-red-primary hover:scale-x-110 duration-700 transition rounded-lg py-3 font-medium border border-solid border-red-primary bg-primary text-black-primary"
          >
            {linkText}
          </Link>
          <Link
            href={href1}
            target="_blank"
            rel="noopener noreferrer"
            download={true}
            className="flex gap-2 px-6 capitalize hover:bg-white hover:text-red-primary duration-700 transition py-3 font-medium text-[#1C1C1C]/50 underline"
          >
            {linkText1}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TwoColGridCard;
