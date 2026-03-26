import { StandardSectionProps } from "@/types/landingPageType";
import Image from "next/image";

const StandardCard: React.FC<StandardSectionProps["items"][0]> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="px-6 py-[25px] border border-[#F2B9CA] md:max-w-[424px] w-full space-y-3 bg-white rounded-3xl overflow-hidden">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-[1.375rem] font-bold text-black-primary">{title}</h3>
        <div className="w-full max-w-14 relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            fill
          />
        </div>
      </div>
      <p className="md:text-lg text-[#656565]">{description}</p>
    </div>
  );
};

export default StandardCard;
