import { Container, Section } from "@/components";
import { StandardSectionProps } from "@/types/landingPageType";
import StandardCard from "./cards/StandardCard";

const StandardSection: React.FC<StandardSectionProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <Section className="border-b border-red-primary !md:py-26">
      <Container className="md:space-y-16 space-y-10">
        <div className="flex flex-col items-center justify-center md:gap-6 gap-4 max-w-[57rem] mx-auto">
          <p className="text-center md:text-lg text-sm px-2 py-1 border border-red-primary text-[#656565] bg-[#fcfbee] rounded-lg">
            {description[0]}
          </p>
          <h2
            className="md:text-4xl text-2xl font-bold text-black-primary text-center text-bg"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <p className="md:text-[1.375rem] text-lg text-[#656565] text-center">
            {description[1]}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, index) => (
            <StandardCard key={index} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default StandardSection;
