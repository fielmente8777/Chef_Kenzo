// data

import {
  CustomizedSocialCatering,
  FillStar,
  FillTick,
  GourmetCorporateCatering,
  OutLineCallWhite,
  OutLineLocation,
  OutLineMailWhite,
  SpecialtyServices,
} from "@/icons/icons";
import {
  BannerTypeProps,
  ContactUsProps,
  DataTypeProps,
  TwoColCardprops,
} from "@/types/type";

export const contactData: ContactUsProps[] = [
  {
    icon: <OutLineLocation />,
    label:
      "D-121 Sushant Shopping Arcade, Sushant Lok 1, B Block, Gurugram, Haryana 122009",
    // href: "https://goo.gl/maps/UJQXkHh8hNn",
    // traget: true,
  },
  {
    icon: <OutLineCallWhite />,
    label: " +91 9096907042",
    href: "tel:+91 9096907042",
  },
  {
    icon: <OutLineMailWhite />,
    label: "contact@kenzok.com",
    href: "mailto:contact@kenzok.com",
  },
];

export const PoliciesDataProps: ContactUsProps[] = [
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Cancellation & Refund Policy",
    href: "/refund-policy",
  },
];

export const BannerData: BannerTypeProps = {
  src: "/images/newbanner.webp",
  alt: "banner",
  bgimg: {
    src: "/images/Asset46.png",
    alt: "banner",
  },
  listItems: [
    {
      number: "3+",
      description: "Years of Experience",
    },
    {
      number: "1500+",
      description: "Orders served monthly",
    },
    {
      number: "3",
      description: "Kitchens in NCR",
    },
  ],
  title: "Welcome to Chef Kenzo",
  subTitle: `Experience excellence at </br> your events with our top-notch catering services`,
  // subTitle: `Experience excellence at your events with our top-notch catering services. <b>Catering Services.</b>`,
  description:
    "Specializing in high-end catering for social and corporate events, our cloud kitchens in Delhi NCR & Gurgaon is second to none.",
};

export const aboutDataProps: TwoColCardprops = {
  title: "About Us",
  description: `Welcome To The Best <b class="">Catering</b> Company`,
  description2:
    "Chef Kenzo Cloud Kitchen combines the expertise of top culinary talents with a commitment to excellence. Founded by young, visionary chefs from prestigious culinary institutes like IHM Pusa and IHM Aurangabad, our cloud kitchen offers a curated menu designed to provide an exceptional dining experience. We prioritize quality by using the finest ingredients and upholding the highest hygiene standards. Each dish is made-to-order in-house, ensuring freshness and flavor with every bite. Our proven track record is reflected in our outstanding ratings and positive reviews across leading food delivery platforms. Experience the artistry of culinary excellence with Chef Kenzo Cloud Kitchen, where innovation meets quality.",

  listItems: [
    {
      icon: <FillTick />,
      description: "100% Guarantee For Our Product Quality.",
    },
    {
      icon: <FillTick />,
      description: "Custom Food Menu Catering & Free Delivery.",
    },
    {
      icon: <FillTick />,
      description: "Passionate About Food, Committed to Quality.",
    },
  ],

  image: {
    src: "/images/newAbout.webp",
    alt: "avatar",
  },
  linkText: "Get A Quote!",
  href: "#",
  linkText1: "Download Company Profile",
  href1: "#",
};

export const OurServicesDataProps: DataTypeProps = {
  title: "Our Services",
  description: `Premium Catering Tailored to Your <b>Taste</b>`,
  link: {
    href: "#",
    linkText: "Get a Quote Now!",
  },
  items: [
    {
      data: {
        title: "Gourmet Corporate Catering",
        description:
          "We offer high-quality catering for corporate events, including meetings and conferences, with tailored menus for business lunches and dinners.",
      },
      icon: <GourmetCorporateCatering />,
      centerTitle: "Catering",
    },
    {
      data: {
        title: "Customized Social Catering",
        description:
          "Chef Kenzo provides bespoke catering for personal events, creating elegant and customizable menus for every celebration.",
      },
      icon: <CustomizedSocialCatering />,
      centerTitle: "Catering",
    },
    {
      data: {
        title: "Specialty Services",
        description:
          "Our specialty services feature dietary accommodations, signature dishes, and custom packages to uniquely enhance each event.",
      },
      icon: <SpecialtyServices />,
      centerTitle: "Catering",
    },
  ],
};

export const TestimonialsDataProps: DataTypeProps = {
  title: "Testimonials",
  description: `Here's what our <b>customers</b> have to say!`,
  items: [
    {
      data: {
        title: "Apoorva Tiwari",
        description: `Brownie really was brilliantly enrichedmust try.`,
      },
      image: {
        src: "/images/circle.png",
        alt: "avatar",
      },
      icon: [
        <FillStar key={1} />,
        <FillStar key={2} />,
        <FillStar key={3} />,
        <FillStar key={4} />,
        <FillStar key={5} />,
      ],
    },
    {
      data: {
        title: "Sneha Jha",
        description: `The Mexican Burrito bowl was delicious. They also gave a complimentary Blondie dessert which was a delight! Good job. Will order again.`,
      },
      image: {
        src: "/images/circle1.png",
        alt: "avatar",
      },
      icon: [
        <FillStar key={1} />,
        <FillStar key={2} />,
        <FillStar key={3} />,
        <FillStar key={4} />,
        <FillStar key={5} />,
      ],
    },
    {
      data: {
        title: "Divvya Anand",
        description: `Chicken Popcorn was very flavoursome and a good snackie option, loved the Blondie per usual, unique & tasty dessert!`,
      },
      image: {
        src: "/images/circle2.png",
        alt: "avatar",
      },
      icon: [
        <FillStar key={1} />,
        <FillStar key={2} />,
        <FillStar key={3} />,
        <FillStar key={4} />,
        <FillStar key={5} />,
      ],
    },
    {
      data: {
        title: "Karan",
        description: `My go to place to order always 👏🏻`,
      },
      image: {
        src: "/images/circle2.png",
        alt: "avatar",
      },
      icon: [
        <FillStar key={1} />,
        <FillStar key={2} />,
        <FillStar key={3} />,
        <FillStar key={4} />,
        <FillStar key={5} />,
      ],
    },
    {
      data: {
        title: "AJ",
        description: `Amazing as always. One of a very few restaurants in Gurgaon that compliments their customers. 10/10 💜`,
      },
      image: {
        src: "/images/circle2.png",
        alt: "avatar",
      },
      icon: [
        <FillStar key={1} />,
        <FillStar key={2} />,
        <FillStar key={3} />,
        <FillStar key={4} />,
        <FillStar key={5} />,
      ],
    },
    {
      data: {
        title: "Caliph Unknown",
        description: `this place has incredible food shahi tukda and the blondie are insanely good great middle east platter incredible food and plentiful quantities`,
      },
      image: {
        src: "/images/circle2.png",
        alt: "avatar",
      },
      icon: [
        <FillStar key={1} />,
        <FillStar key={2} />,
        <FillStar key={3} />,
        <FillStar key={4} />,
        <FillStar key={5} />,
      ],
    },
    {
      data: {
        title: "Ankita Sachdeva",
        description: `The best Lebanese platter I have had since a very long time .. loved it`,
      },
      image: {
        src: "/images/circle2.png",
        alt: "avatar",
      },
      icon: [
        <FillStar key={1} />,
        <FillStar key={2} />,
        <FillStar key={3} />,
        <FillStar key={4} />,
        <FillStar key={5} />,
      ],
    },
  ],
};



export const GalleryDataProps: DataTypeProps = {
  title: "Gallery",
  description: `Our latest corporate and social <b>catering</b>`,
  items: [
    {
      image: {
        src: "/images/Rectangle1.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/Copy.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/Rectangle2.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/Rectangle3.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/Rectangle1.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/Copy.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/Rectangle2.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/Rectangle3.webp",
        alt: "avatar",
      },
    },
  ],
};
