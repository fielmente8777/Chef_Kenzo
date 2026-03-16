import { TestimonialsDataProps } from "@/db/data";
import { contact } from "@/utils/constent";

export const landingPageData = {
  bannerData: {
    title: ["Welcome To <span>Chef Kenzo</span>", "Catering Services"],
    subtitle: "Catering That Defines Your Celebration",

    images: ["/landing-page/bnr.jpg"],
  },
  slidingText: [
    "3 Kitchens Across NCR",
    "5+ Years of Culinary Experience",
    "Women-Led BUSINESS",
    "1500+ Orders Served Every Month",
  ],

  chefDrivenSection: {
    title: "Chef-Driven Catering Services",
    description: [
      "Chef Kenzo Catering Services is founded by visionary chefs from premier institutes like IHM Pusa and IHM Aurangabad. We deliver premium catering experiences with expertly crafted menus, finest ingredients, and uncompromising hygiene standards. Every dish is freshly prepared to ensure exceptional taste and presentation. Trusted for our quality and professionalism, Chef Kenzo brings culinary excellence to every celebration.",
      "*(Pre book your catering now. Limited dates available.)",
    ],
    images: [
      "/landing-page/catering-1.png",
      "/landing-page/catering-2.png",
      "/landing-page/catering-3.png",
    ],
    action: {
      label: "Enquire Now",
      href: contact.WhatsappCta,
    },
  },

  whyChooseSection: {
    title: "Why Choose ",
    subTitle: "<span>Chef Kenzo</span> Catering Services",
    points: [
      "Customized Menus tailored for corporate and social events.",
      "Premium Ingredients with uncompromising hygiene standards.",
      "Highly Rated & Trusted with a proven service record.",
      "Refined, Modern Flavours crafted by expert chefs.",
      "Corporate, Social & Specialty Catering under one roof.",
      "Signature & Multi Course Experiences for elevated celebrations.",
      "Refined flavours for the new generation.",
    ],
    action: {
      label: "Enquire Now",
      href: contact.WhatsappCta,
    },
    note: "*(Pre book your catering now. Limited dates available.)",
    image: "/landing-page/why-choose.png",
  },

  corporateClients: {
    title: "Corporate Clients",
    images: [
      "/deloitte.png",
      "/ey.png",
      "/zomato.png",
      "/amex.png",
      "/droom.png",
      "/gsk.png",
    ],
  },

  testimonialSection: {
    title: "Testimonials",
    testimonial: TestimonialsDataProps.items,
    image: "/landing-page/testimonial-1.png",
    action: {
      label: "Enquire Now",
      href: contact.WhatsappCta,
    },
    note: "*(Pre book your catering now. Limited dates available.)",
  },

  contactSection: {
    address:
      "D 121 Sushant Shopping Arcade, Sushant Lok 1, B Block, Gurugram, Haryana 122009",
    email: "contact@kenzok.com",
    phone: "+91 9096 907042",
    certificates: [
      {
        label: "Certificate No",
        value: "DIPP82858",
      },
      {
        label: "Registration No",
        value: "UDYAM-HR-05-0021992",
      },
      {
        label: "LIC Number",
        value: "10825005000808",
      },
    ],
  },
};
