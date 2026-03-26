"use client";
import { useWebContext } from "@/contextapi/WebContext";
import { ArrowUpIcons } from "@/icons/formIcons";
import { useEffect, useState } from "react";

// scoped per section
const activeIndexes: Record<string, number | null> = {};
const listenersMap: Record<string, (() => void)[]> = {};

interface AccordionProps {
  question: string;
  answer?: string;
  points?: string[];
  index: number;
  sectionId: string;
}

const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  points,
  index,
  sectionId,
}) => {
  const [, forceUpdate] = useState({});
  const { setIsTitle } = useWebContext();

  // init section
  if (!(sectionId in activeIndexes)) {
    activeIndexes[sectionId] = 0; // first open
    listenersMap[sectionId] = [];
  }

  const open = activeIndexes[sectionId] === index;

  useEffect(() => {
    const listener = () => forceUpdate({});
    listenersMap[sectionId].push(listener);

    // sync first open
    if (activeIndexes[sectionId] === index) {
      setIsTitle(sectionId, question);
    }

    return () => {
      listenersMap[sectionId] = listenersMap[sectionId].filter(
        (l) => l !== listener
      );
    };
  }, [sectionId, index, question, setIsTitle]);

  const handleClick = () => {
    const current = activeIndexes[sectionId];

    activeIndexes[sectionId] = current === index ? null : index;

    if (activeIndexes[sectionId] !== null) {
      setIsTitle(sectionId, question);
    }

    listenersMap[sectionId].forEach((l) => l());
  };

  return (
    <div
      className={`cursor-pointer  transition-all border duration-300 ease-in-out rounded-2xl ${
        open ? "border-red-primary bg-white p-4" : "border-[#EBE3E0]/0 animate-shacked"
      }`}
      onClick={handleClick}
    >
      <div className="flex gap-2 items-center max-md:justify-center">
        <h3 className={`text-[1.375rem] ${open ? "text-[#1c1c1c] font-bold" : "text-[#656565] font-medium max-md:text-center"}`}>{question}</h3>
        <span
          className={`transition-all duration-300 ease-in-out ${open ? "opacity-0 invisible" : "opacity-100 visible"}`}
        >
          <ArrowUpIcons />
        </span>
      </div>

      <div
        className={`grid ${
          open ? "grid-rows-[1fr] pb-3.5" : "grid-rows-[0fr]"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="overflow-hidden">
          {answer && (
            <p
              className={`mt-3 text-[#656565] md:text-lg ${
                open ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300`}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          )}

          {points && (
            <ul className="space-y-2">
              {points.map((point, i) => (
                <li
                  key={i}
                  className={`mt-3 text-[#656565] md:text-lg flex items-center gap-2 ${
                    open ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  <TickIcon />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

export const TickIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.3334 8L13.7068 6.14L13.9334 3.68L11.5268 3.13333L10.2667 1L8.00008 1.97333L5.73342 1L4.47342 3.12667L2.06675 3.66667L2.29342 6.13333L0.666748 8L2.29342 9.86L2.06675 12.3267L4.47342 12.8733L5.73342 15L8.00008 14.02L10.2667 14.9933L11.5268 12.8667L13.9334 12.32L13.7068 9.86L15.3334 8ZM6.72675 11.1467L4.19342 8.60667L5.18008 7.62L6.72675 9.17333L10.6267 5.26L11.6134 6.24667L6.72675 11.1467Z"
      fill="#00800A"
    />
  </svg>
);
