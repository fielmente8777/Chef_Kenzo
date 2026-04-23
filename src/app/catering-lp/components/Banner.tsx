import { Container, Section } from "@/components";
import Image from "next/image";

interface BannerProps {
  title: string[];
  subtitle: string;
  images: string[];
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, images }) => {
  return (
    <Section>
      <Container className="flex flex-col gap-12 items-center max-md:py-12">
        <p className="text-lg text-center w-fit border-b border-red-primary font-bold text-black-primary">
          {subtitle}
        </p>
        <h1 className="text-3xl text-nowrap md:text-7xl text-black-primary text-center flex flex-col items-center gap-4">
          <span className="text-bg" dangerouslySetInnerHTML={{ __html: title[0] }} />
          <span className="flex items-center gap-2">
            <span className="relative md:w-[188px] w-[96px] aspect-[4/2] overflow-hidden rounded-full">
              <Image
                src={images[0]}
                alt={title[1]}
                fill
                className="object-cover"
              />
            </span>

            {title[1]}
          </span>
        </h1>
      </Container>
    </Section>
  );
};

export default Banner;
