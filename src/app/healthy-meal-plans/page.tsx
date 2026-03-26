import { Container, Section } from "@/components";
import AmbitionSection from "./components/AmbitionSection";
import Banner from "./components/Banner";
import FlexibilitySection from "./components/FlexibilitySection";
import { mealPlansPageData } from "./components/pageData";
import StandardSection from "./components/StandardSection";
import SubScriptionSection from "./components/SubScriptionSection";
import Form3 from "@/components/form/Form3";

export default function HealthyMealPlans() {
  return (
    <main>
      <Banner {...mealPlansPageData.bannerData} />
      <Section defaultPadding={false} className="bg-[#42212B]">
        <Container>
          <Form3 />
        </Container>
      </Section>
      <AmbitionSection {...mealPlansPageData.ambitionSection} />
      <FlexibilitySection {...mealPlansPageData.flexibilitySection} />
      <StandardSection {...mealPlansPageData.standardSection} />
      <SubScriptionSection {...mealPlansPageData.subscriptionSection} />
    </main>
  );
}
