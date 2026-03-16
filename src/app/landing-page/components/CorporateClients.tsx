import { Container, Section } from "@/components";
import CLientSlider from "@/components/sliders/CLientSlider";

interface CorporateClientsProps {
  title: string;
  images: string[];
}
const CorporateClients: React.FC<CorporateClientsProps> = ({
  title,
  images,
}) => {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl text-line w-fit mx-auto md:text-3xl font-bold text-[#1C1C1C] text-center mb-6 md:mb-14">
          {title}
        </h2>
        <div className="bg-white">
          <CLientSlider images={images} />
        </div>
      </Container>
    </Section>
  );
};

export default CorporateClients;
