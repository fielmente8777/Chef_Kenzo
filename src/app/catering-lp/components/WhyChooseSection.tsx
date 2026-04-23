import { Container, Section } from "@/components";
import { CtaBtn } from "@/components/cta-btn/CtaBtn";
import Image from "next/image";

interface WhyChooseSectionProps {
  title: string;
  subTitle: string;
  points: string[];
  action: {
    label: string;
    href: string;
  };
  note: string;
  image: string;
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  title,
  subTitle,
  points,
  action,
  note,
  image,
}) => {
  return (
    <Section>
      <Container className="grid md:grid-cols-2 grid-cols-1 items-center gap-6 choose-bg">
        <div className="relative w-full aspect-[4/3] md:block hidden">
          <Image src={image} alt="alt" fill className="object-contain" />
        </div>
        <div className="flex flex-col gap-6 h-full justify-between">
          <div className="space-y-4">
            <h2 className="text-4xl">{title}</h2>
            <h3
              className="text-3xl md:text-4xl font-semibold text-bg"
              dangerouslySetInnerHTML={{ __html: subTitle }}
            />
          </div>
          <div className="relative w-full aspect-[4/3] md:hidden">
            <Image src={image} alt="alt" fill className="object-contain" />
          </div>
          <div className="flex flex-col gap-3">
            {points.map((point, index) => (
              <p
                key={index}
                className="md:text-lg flex  gap-2 text-black-primary"
              >
                <span>
                  <TickIcon />
                </span>
                {point}
              </p>
            ))}
          </div>
          <div className="flex max-md:flex-col-reverse items-center justify-between gap-3">
            <CtaBtn
              type="link"
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg uppercase text-white bg-[#1C1C1C] rounded-full font-semibold"
              label={action.label}
            />
            <p className="md:text-lg text-black-primary">{note}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseSection;

export const TickIcon = () => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.9168 13L22.2735 9.9775L22.6418 5.98L18.731 5.09167L16.6835 1.625L13.0002 3.20667L9.31683 1.625L7.26933 5.08083L3.3585 5.95833L3.72683 9.96667L1.0835 13L3.72683 16.0225L3.3585 20.0308L7.26933 20.9192L9.31683 24.375L13.0002 22.7825L16.6835 24.3642L18.731 20.9083L22.6418 20.02L22.2735 16.0225L24.9168 13ZM10.931 18.1133L6.81433 13.9858L8.41766 12.3825L10.931 14.9067L17.2685 8.5475L18.8718 10.1508L10.931 18.1133Z"
      fill="#F2B9CA"
    />
  </svg>
);
