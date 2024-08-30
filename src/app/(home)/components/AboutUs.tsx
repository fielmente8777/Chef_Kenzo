import { Container, Section, TwoColGridCard } from "@/components";
import { TwoColCardprops } from "@/types/type";

const AboutUs: React.FC<TwoColCardprops> = ({
  ...aboutdataProps
}) => {
  return (
    <Section className="lg:py-10 mx-auto bg-no-repeat bg-[url('/images/Asset7.svg')] position_img">
      <Container>
        <TwoColGridCard  {...aboutdataProps} />
      </Container>
    </Section>
  );
};

export default AboutUs;
