import { Banner } from "@/components";
import {
  AboutUs,
  Enquiry,
  Gallery,
  Location,
  OurServices,
  Testimonials,
} from "./components";
import {
  aboutDataProps,
  BannerData,
  GalleryDataProps,
  OurServicesDataProps,
  TestimonialsDataProps,
} from "@/db/data";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main>
      <Banner {...BannerData} />
      <AboutUs {...aboutDataProps} />
      <OurServices {...OurServicesDataProps} />
      <Testimonials {...TestimonialsDataProps} />
      <Events />
      <Enquiry />
      <Gallery {...GalleryDataProps} />
      <Location title={"Our Location"} src={""} />
    </main>
  );
}
