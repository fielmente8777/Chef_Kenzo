import { Container, Section } from "@/components";
import { CtaBtn } from "@/components/cta-btn/CtaBtn";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

interface ChefDrivenSectionProps {
  title: string;
  description: string[];
  images: string[];
  action: {
    label: string;
    href: string;
  };
}

const ChefDrivenSection: React.FC<ChefDrivenSectionProps> = ({
  title,
  description,
  images,
  action,
}) => {
  return (
    <Section className="lg:py-8">
      <Container className="space-y-6">
        <ImageSlider images={images} />
        <div className="lg:grid grid-cols-3 w-full relative">
          {images.map((image, index) => (
            <div
              className="w-full md:block hidden aspect-[4/6] relative"
              key={index}
            >
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          ))}
          <div className="md:absolute inset-0 flex items-center justify-center z-20">
            <ChefDrivenSectionCard
              title={title}
              description={description}
              action={action}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ChefDrivenSection;

export const ChefDrivenSectionCard = ({
  title,
  description,
  action,
}: {
  title: string;
  description: string[];
  action: { label: string; href: string };
}) => {
  return (
    <div className="w-full max-w-3xl md:py-14 py-6 md:px-10 px-4 flex flex-col items-center text-center  gap-5 relative after:absolute after:inset-0 after:z-[-2] after:bg-[rgba(252,251,238,0.95)] border-2 border-[#F2B9CA]">
      <h2 className="text-2xl lg:text-5xl text-line font-bold text-[#1C1C1C]">
        {title}
      </h2>
      {description.map((item, index) => (
        <p
          key={index}
          className={`text-lg md:text-xl font-medium ${description.length - 1 === index ? "text-[#1C1C1C]" : "text-gray-primary"}`}
        >
          {item}
        </p>
      ))}
      <CtaBtn
        type="link"
        href={action.href}
        className="text-lg text-white uppercase bg-[#1C1C1C] rounded-full font-semibold"
        label={action.label}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};
