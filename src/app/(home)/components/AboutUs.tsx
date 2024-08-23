import { Container, Section, TwoColGridCard } from "@/components";
import { TwoColCardprops } from "@/types/type";

const AboutUs: React.FC<TwoColCardprops> = ({
 ...aboutdataProps
}) => {
  return (
    <Section>
      <Container>
       <TwoColGridCard  {...aboutdataProps} />
      </Container>
    </Section>
  );
};

export default AboutUs;
