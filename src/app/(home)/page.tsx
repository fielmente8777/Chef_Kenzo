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
      <Location title={"Our Location"} src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.2191603067995!2d77.0786577!3d28.4606779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1982d0349685%3A0x228c5fc4fb1cbb5b!2sChef%20Kenzo%20-%20Food%20Delivery%20and%20Catering!5e1!3m2!1sen!2sin!4v1725602861496!5m2!1sen!2sin"} />
    </main>
  );
}
