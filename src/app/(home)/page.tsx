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
      <Location title={"Our Location"} src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.9850438780322!2d77.05633317494829!3d28.401819794521213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23da1b2a7f6b%3A0x2fc2d9be7d9787cc!2sM3M%20Cosmopolitan%2C%20R3-015A%2C%20Golf%20Course%20Ext%20Rd%2C%20Badshahpur%2C%20Sector%2066%2C%20Gurugram%2C%20Haryana%20122101!5e1!3m2!1sen!2sin!4v1770699324153!5m2!1sen!2sin"} />
    </main>
  );
}
