"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useWebContext } from "@/contextapi/WebContext";

interface Props {
  cards: { title: string; src: string }[];
  sectionId: string;
}

const ImageCard2: React.FC<Props> = ({ cards, sectionId }) => {
  const { activeIndexMap, setActiveIndex } = useWebContext();
  const activeIndex = activeIndexMap[sectionId] ?? 0;

  // ✅ FIXED interval (no dependency on activeIndex)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(sectionId, (prev: number) => {
        return (prev + 1) % cards.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length, sectionId, setActiveIndex]);

  return (
    <div className="w-full aspect-[4/3] relative overflow-hidden">
      {cards.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className={`
              absolute inset-0 transition-all duration-700 ease-in-out
              ${isActive ? "opacity-100 translate-y-0 z-20" : "opacity-0 translate-y-10 z-10"}
            `}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageCard2;
