import { Container } from "@/components";
import Form2 from "@/components/form/Form2";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import { landingPageData } from "./components/pageData";
import ChefDrivenSection from "./components/ChefDrivenSection";
import WhyChooseSection from "./components/WhyChooseSection";
import CorporateClients from "./components/CorporateClients";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";

const page = () => {
  return (
    <main className="max_screen_width relative after:absolute after:inset-0 after:bg-[#FCFBEE] after:z-[-3]">
      <section className="section-bg">
        <Banner {...landingPageData.bannerData} />
        <SlidingTitle titles={landingPageData.slidingText} />
        <section className="py-10">
          <Container className="bg-[#42212B]">
            <Form2 />
          </Container>
        </section>
      </section>
      <ChefDrivenSection {...landingPageData.chefDrivenSection} />
      <WhyChooseSection {...landingPageData.whyChooseSection} />
      <CorporateClients {...landingPageData.corporateClients} />
      <Testimonials {...landingPageData.testimonialSection} />
    </main>
  );
};

export default page;
