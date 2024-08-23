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
  src: "/images/banner.webp",
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
      number: "2K+",
      description: "Orders served",
    },
  ],
  title: "Welcome to Chef Kenzo",
  subTitle: `Elevate Your Event with Our Exceptional <b>Catering Services.</b>`,
  description:
    "Chef Kenzo, a premier cloud kitchen in Gurgaon, specializes in premium catering for both social and corporate events.",
};

export const aboutDataProps: TwoColCardprops = {
  title: "About Us",
  description: `Welcome To The Best <b class="">Catering</b> Company`,
  description2:
    "Chef Kenzo is a distinguished cloud kitchen based in Gurgaon, dedicated to elevating the dining experience through premium catering services tailored for both social and corporate events. As a leading name in the gourmet catering industry, our focus is on providing exceptional culinary solutions that cater to the diverse needs of our clients.",

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
    src: "/images/about-us.webp",
    alt: "avatar",
  },
  linkText: "Book Now",
  href: "#",
};

export const OurServicesDataProps: DataTypeProps = {
  title: "Our Services",
  description: `Premium Catering Tailored to Your <b>Taste</b>`,
  link: {
    href: "#",
    linkText: "Book Now",
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
        title: "Manika",
        description: `"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "`,
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
        title: "Harshal",
        description: `"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "`,
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
        title: "Prakriti",
        description: `"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "`,
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
        title: "Manika",
        description: `"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "`,
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
        title: "Harshal",
        description: `"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "`,
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
        title: "Prakriti",
        description: `"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "`,
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
