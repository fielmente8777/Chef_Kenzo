import { Section } from "@/components";
import Accordion from "@/components/accordion/Accordion";
import { CtaBtn } from "@/components/cta-btn/CtaBtn";
import { SubScriptionSectionProps } from "@/types/landingPageType";
import ImageCard from "./cards/ImageCard";

const SubScriptionSection: React.FC<SubScriptionSectionProps> = ({
  title,
  description,
  items,
  action,
}) => {
  return (
    <Section className="border-b !py-0 border-red-primary grid md:grid-cols-2 grid-cols-1 items-center justify-center">
      <div className="flex flex-col gap-6 max-w-[34rem] w-full ml-auto md:mr-24  max-md:py-8">
        <h2 className="md:text-5xl text-[2rem] text-black-primary font-bold max-md:px-4">
          {title}
        </h2>
        <p className="md:text-lg text-[#656565] max-md:px-4">{description[0]}</p>
        <div className="w-full md:hidden">
          <ImageCard cards={items} sectionId="flexibility" />
        </div>
        <div className="space-y-4 max-md:px-4">
          {items.map((item, index) => (
            <Accordion
              key={index}
              question={item.title}
              points={item.points}
              index={index}
              sectionId="subscription"
            />
          ))}
        </div>
        <CtaBtn
          type="link"
          label={action.label}
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white bg-[#1C1C1C] max-md:mx-auto uppercase rounded-full w-fit font-semibold"
        />
      </div>
      <div className="w-full md:block hidden">
        <ImageCard cards={items} sectionId="subscription" />
      </div>
    </Section>
  );
};

export default SubScriptionSection;
