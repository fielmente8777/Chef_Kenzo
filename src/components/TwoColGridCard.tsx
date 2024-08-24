import Image from "next/image";
import Container from "./Container";
import Section from "./Section";
import Link from "next/link";
import { TwoColCardprops } from "@/types/type";

const TwoColGridCard: React.FC<TwoColCardprops> = ({
  title,
  description,
  description2,
  image,
  linkText,
  href,
  listItems,
}) => {
  return (
    <div className="lg:grid grid-cols-2 flex flex-col gap-5">
      <div className="relative aspect-[4/2.5] img_hover rounded-lg overflow-hidden">
        <Image
          priority={true}
          src={image.src}
          alt={`${image.alt ? image.alt : "avatar"}`}
          fill
          className="object-cover img rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between gap-5">
        <h2 className="text-xl lg:text-2xl text-red-primary lg:text-start text-center">
          {title}
        </h2>
        <p
          className="text-xl lg:text-[2rem]/[2.5rem] font-normal text-black-primary lg:text-start text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {description2 && (
          <p className="text-base text-gray-primary lg:text-start text-center">
            {description2}
          </p>
        )}
        {listItems && (
          <ul className="flex flex-col gap-2">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="text-base text-gray-primary flex gap-2"
              >
                <span className="">{item.icon}</span>
                {item.description}
              </li>
            ))}
          </ul>
        )}
        <div className="flex lg:justify-start justify-center items-center">
          <Link
            href={href}
            className="flex gap-2 px-6 capitalize bg-red-primary hover:bg-white hover:text-red-primary hover:scale-x-110 duration-700 transition rounded-lg py-3 font-medium border border-solid border-red-primary bg-primary text-black-primary"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TwoColGridCard;
