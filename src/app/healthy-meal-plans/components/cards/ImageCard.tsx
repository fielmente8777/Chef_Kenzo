"use client";
import { useWebContext } from "@/contextapi/WebContext";
import { FlexibilitySectionProps } from "@/types/landingPageType";
import Image from "next/image";

const ImageCard: React.FC<{
  cards: FlexibilitySectionProps["items"];
  sectionId: string;
}> = ({ cards, sectionId }) => {
  const { isTitleMap } = useWebContext();

  const currentTitle = isTitleMap[sectionId];

  const foundIndex = cards.findIndex(
    (item) => item.title === currentTitle
  );

  const activeIndex = foundIndex === -1 ? 0 : foundIndex;

  return (
    <div className="w-full aspect-[4/3.5] relative overflow-hidden">
      {cards.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <Image
            key={index}
            src={item.image}
            alt={item.title}
            fill
            className={`absolute inset-0 object-cover transition-all duration-700 ease-in-out
              ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }
            `}
          />
        );
      })}
    </div>
  );
};

export default ImageCard;