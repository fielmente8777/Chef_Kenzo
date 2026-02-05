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
    label: " +91 9266866646",
    href: "tel:+91 9266866646",
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
  description: `Welcome to Chef Kenzo`,
  description2:
    "Chef Kenzo Cloud Kitchen delivers exceptional catering experiences designed to elevate weddings, corporate events, and house parties. Our team of visionary chefs, trained at prestigious institutes like IHM Pusa and IHM Aurangabad, crafts curated menus using the finest ingredients to ensure each dish is fresh and flavorful. Specializing in bulk catering, we bring restaurant-quality food to your event, tailored to your unique needs. With over 500 successful events and a 98% client satisfaction rate, we ensure seamless service from start to finish. Whether it’s an intimate gathering or a large-scale function, our culinary team guarantees a memorable dining experience. With a track record of 5-star reviews and a 95% repeat client rate, Chef Kenzo Cloud Kitchen is your trusted partner for unforgettable catered events.",

  listItems: [
    {
      icon: <FillTick />,
      description: "Tailored Menu for an Enhanced Experience.",
    },
    {
      icon: <FillTick />,
      description: "High-Quality Ingredients & Cleanliness.",
    },
    {
      icon: <FillTick />,
      description: "Proven track record with food delivery services receiving high ratings on various platforms.",
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
    linkText: "Get Quote Now!",
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
          "We offer signature dishes, and custom packages to enhance your event. Enjoy an exquisite 7 to 10-course menu crafted by Michelin-star trained chefs.",
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
        title: "Ritika Sharma,",
        description: `We recently hired Chef Kenzo for our lunch at the office, and the food was absolutely amazing! Every dish was packed with flavor, and the presentation was top-notch. Our team couldn’t stop talking about the fusion options. Chef Kenzo truly elevated the entire experience. Highly recommend for any corporate event!`,
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
        title: "Anil Mehta",
        description: `Chef Kenzo provided catering for our corporate seminar, and it was a hit. The quality, taste, and variety were impressive, and everything arrived fresh and on time. The service was professional, and they really understood our needs. Will definitely be using them again for future events!`,
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
        description: `My go to place to order always`,
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
        description: `Amazing as always. One of a very few restaurants in Gurgaon that compliments their customers. 10/10`,
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
        title: "Priyam",
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
        title: "Nisha Verma",
        description: `We entrusted Chef Kenzo with a large-scale event, and they exceeded expectations. From the perfectly curated menu to the prompt delivery, everything was seamless. The team was professional, and the food was well-received by all. Chef Kenzo truly knows how to cater to corporate clients.`,
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
        src: "/images/Copy of 202110_Chef_Kenzo_food-829.jpg",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/Copy of 202110_Chef_Kenzo_food-075.jpg",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/Copy of 202110_Chef_Kenzo_food-456.jpg",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/Copy of 202203_Chef_Kenzo_food-091.jpg",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/Copy of 202110_Chef_Kenzo_food-343.jpg",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/images/30011ac3-b145-4817-adb6-fcefc7530a41.jpg",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/IMG_6218.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/IMG_6223.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/new-img-1.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/new-img-2.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/new-img-3.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/new-img-4.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/new-img-5.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/new-img-6.webp",
        alt: "avatar",
      },
    },
    {
      image: {
        src: "/new-img-7.webp",
        alt: "avatar",
      },
    },

  ],
};
