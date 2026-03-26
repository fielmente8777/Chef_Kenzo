import { AmbitionSectionProps } from "@/types/landingPageType";
import Image from "next/image";

const AmbitionCard: React.FC<AmbitionSectionProps["items"][0]> = ({
  image,
  description,
  title,
}) => {
  return (
    <div
      className="w-full relative aspect-square overflow-hidden rounded-3xl"
      style={{
        boxShadow: "0 7px 29px 0 rgba(100, 100, 111, 0.2)",
      }}
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        fill
      />
      <div className="absolute inset-0 bg-[#000000]/40 z-10" />
      <div className="absolute inset-4 z-20 flex flex-col  justify-between text-white">
        <h3 className="text-[1.375rem] font-bold">{title}</h3>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default AmbitionCard;
