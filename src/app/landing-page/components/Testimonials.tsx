import { Container, Section } from "@/components";
import { CtaBtn } from "@/components/cta-btn/CtaBtn";
import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";
import { LazyLoadedVideo } from "@/components/Video";
import { TestimonialsProps } from "@/types/type";
import Image from "next/image";

const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  note,
  image,
  action,
  testimonial,
}) => {
  return (
    <Section>
      <Container className="grid md:grid-cols-3 grid-cols-1">
        <div className="relative w-full h-full aspect-[4/6]">
          <Image src={image} alt="alt" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-6 items-center text-center bg-background pointer-events-none p-8 relative after:absolute after:inset-3 after:border after:border-red-primary after:z-[1]">
          <h2 className="text-2xl text-line w-fit mx-auto md:text-5xl font-bold text-[#1C1C1C]">
            {title}
          </h2>
          <TestimonialsSlider data={testimonial} />
          <CtaBtn
            type="link"
            href={action.href}
            label={action.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-white bg-[#1C1C1C] uppercase rounded-full font-semibold pointer-events-auto"
          />
          <p>{note}</p>
        </div>
        <div className="relative w-full h-full aspect-[4/6]">
          <LazyLoadedVideo src="https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/Chef-Kenzo/IMG_3949.MOV" poster="/landing-page/IMG_3949.png" muted autoPlay loop />
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
