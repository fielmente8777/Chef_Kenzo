"use client";

import { useWebContext } from "@/contextapi/WebContext";

const AnimationTitle: React.FC<{
  title: string[];
  sectionId: string;
}> = ({ title, sectionId }) => {
  const { activeIndexMap } = useWebContext();
  const activeIndex = activeIndexMap[sectionId] ?? 0;

  return (
    <div className="h-[3rem] max-md:mx-auto overflow-hidden relative max-w-[18rem] w-full">
      <div
        className="flex flex-col transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateY(-${activeIndex * 3}rem)`,
        }}
      >
        {title.map((item, index) => (
          <div
            key={index}
            className="h-[3rem] flex items-center text-3xl font-bold bg-pink-200 px-4"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimationTitle;