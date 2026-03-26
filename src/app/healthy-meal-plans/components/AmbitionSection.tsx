import { Container, Section } from "@/components";
import { AmbitionSectionProps } from "@/types/landingPageType";
import AmbitionCard from "./cards/AmbitionCard";
import { CtaBtn } from "@/components/cta-btn/CtaBtn";
import AmbitionSlider from "./AmbitionSlider";

const AmbitionSection: React.FC<AmbitionSectionProps> = ({
  title,
  description,
  items,
  action,
}) => {
  return (
    <Section className="border-b border-red-primary md:py-26">
      <Container className="md:space-y-16 space-y-10">
        <div className="flex flex-col items-center justify-center gap-4 max-w-[57rem] mx-auto">
          <h2
            className="md:text-4xl text-2xl font-bold text-black-primary text-center text-bg"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <p className="md:text-[1.375rem] text-lg text-[#656565] text-center">
            {description[0]}
          </p>
        </div>
        <div className="md:grid hidden lg:grid-cols-4 grid-cols-2 gap-6">
          {items.map((item, index) => (
            <AmbitionCard key={index} {...item} />
          ))}
        </div>
        <AmbitionSlider cards={items} />
        <CtaBtn
          type="link"
          label={action.label}
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white bg-[#1C1C1C] uppercase rounded-full w-fit mx-auto font-semibold"
        />
      </Container>
    </Section>
  );
};

export default AmbitionSection;
