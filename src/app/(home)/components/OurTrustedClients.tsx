import { Container, Section } from "@/components";
import CLientSlider from "@/components/sliders/CLientSlider";
import { whatsappLink } from "@/db/data";
import Link from "next/link";

const OurTrustedClients: React.FC<{ title: string; images: string[] }> = ({
  title,
  images,
}) => {
  return (
    <Section>
      <Container className="space-y-10 md:space-y-16">
        <h2
          className="text-2xl md:text-3xl text-[#1C1C1C] text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <CLientSlider images={images} />
        <Link
          href={whatsappLink}
          // onClick={() => setIsOpen(true)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 w-fit mx-auto px-6 capitalize bg-red-primary hover:bg-white hover:text-red-primary hover:scale-x-110 duration-700 transition rounded-md py-3 font-medium border border-solid border-red-primary bg-primary text-black-primary"
        >
          Get A Quote
        </Link>
      </Container>
    </Section>
  );
};

export default OurTrustedClients;
