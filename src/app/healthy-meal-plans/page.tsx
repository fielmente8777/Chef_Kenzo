import { Container, Section } from "@/components";
import Form3 from "@/components/form/Form3";
import { Metadata } from "next";
import AmbitionSection from "./components/AmbitionSection";
import Banner from "./components/Banner";
import FlexibilitySection from "./components/FlexibilitySection";
import { mealPlansPageData } from "./components/pageData";
import StandardSection from "./components/StandardSection";
import SubScriptionSection from "./components/SubScriptionSection";

export const metadata: Metadata = {
  title: "Chef Kenzo Meal Plans | Fresh Custom Meals in Gurugram",
  description:
    "100% fresh, never frozen meal plans in Gurugram. Fully customizable nutrition for weight loss, muscle gain & busy professionals",
  keywords:
    "meal plans gurugram, healthy food delivery gurgaon, diet meals india, weight loss meals, muscle gain meals, fresh meal subscription, chef kenzo",
  alternates: {
    canonical: "https://chefkenzo.com/healthy-meal-plans",
    languages: {
      "en-US": "https://chefkenzo.com/healthy-meal-plans",
    },
  },
  openGraph: {
    title: "Chef Kenzo Meal Plans | Fresh Custom Meals in Gurugram",
    description:
      "100% fresh, never frozen meal plans in Gurugram. Fully customizable nutrition for weight loss, muscle gain & busy professionals",
  },
};

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
