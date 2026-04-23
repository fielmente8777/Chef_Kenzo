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
import { contact } from "@/utils/constent";

const encodedText = `Hi Chef Kenzo Team!
I’d like to enquire about catering services for an upcoming event.
Please help me with menu options and pricing.
Thank you!`;

export const whatsappLink = contact.WhatsappCta1;

export const contactData: ContactUsProps[] = [
  {
    icon: <OutLineLocation />,
    label: "R2-105 First floor M3M cosmopolitan Sector 66 Gurgaon",
    // href: "https://goo.gl/maps/UJQXkHh8hNn",
    // traget: true,
  },
  {
    icon: <OutLineCallWhite />,
    label: " +91 90969 07042",
    href: "tel:+9190969 07042",
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
      number: "5+",
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
      description:
        "Proven track record with food delivery services receiving high ratings on various platforms.",
    },
    {
      icon: <FillTick />,
      description:
        "Refined flavours for the new generation.",
    },
  ],

  image: {
    src: "/images/newAbout.webp",
    alt: "avatar",
  },
  linkText: "Get A Quote",
  href: whatsappLink,
  linkText1: "Download Company Profile",
  href1: "/images/CompanyProfile.pdf",
};

export const OurServicesDataProps: DataTypeProps = {
  title: "Our Services",
  description: `Premium Catering Tailored to Your <b>Taste</b>`,
  link: {
    href: whatsappLink,
    linkText: "Get A Quote",
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

export const TestimonialsDataProps = {
  title: "Testimonials",
  description: `Here's what our <b>customers</b> have to say!`,
  items: [
    {
      data: {
        title: "Employee, Deloitte",
        description: `Outstanding Corporate Catering by Chef Kenzo Chef Kenzo catered a Deloitte corporate event for 250 guests, delivering a truly high-end experience. Each guest received an individually personalised meal box with an exquisite main, a crafted beverage, a perfectly paired dessert with ice cream, and thoughtful sides. The premium packaging, flawless organisation, and on-time delivery stood out, making distribution seamless even at scale. The quality, presentation, and attention to detail impressed everyone and elevated the entire event.Highly recommended for organisations seeking luxury, well-executed corporate catering.`,
      },
      image: {
        src: "/deloitte.png",
        alt: "Deloitte",
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
        title: "EY",
        description: `We worked with Chef Kenzo for a multi-day internal meeting, and the experience was excellent. The food was refined, well-received by an international group, and consistently delivered at a high standard. The team was responsive, professional, and easy to work with, making the entire process smooth and stress-free. Overall, a great catering partner for curated corporate gatherings.`,
      },
      image: {
        src: "/ey.png",
        alt: "ey",
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
        title: "Team Zomato",
        description: `We partnered with Chef Kenzo on New Year’s Eve, our busiest day of the year, catering around 1,400 meal boxes for our entire team. Despite the scale and time sensitivity, the experience was completely seamless. The team delivered on time, stayed well-organised, and most importantly maintained excellent quality across such a large volume. Everything was handled professionally, making it a stress-free experience on an otherwise hectic day. A reliable partner for high-volume, high-pressure catering.`,
      },
      image: {
        src: "/zomato.png",
        alt: "Team Zomato",
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
        title: "Team Amex",
        description: `Effortless snack box catering for our product launch polished, prompt, and well received.”`,
      },
      image: {
        src: "/amex.png",
        alt: "Team Amex",
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
        title: "Droom",
        description: `Chef Kenzo delivered a full-stack catering experience for our company’s anniversary evening, featuring innovative flying snacks and a unique live main-course concept prepared fresh at the venue. The creativity, presentation, and refined flavours stood out and were thoroughly enjoyed by a distinguished gathering. A seamless, thoughtfully curated experience that truly elevated the celebration.`,
      },
      image: {
        src: "/droom.png",
        alt: "Droom",
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
        title: "GSK Nielsen",
        description: `Chef Kenzo supported our executive committee meeting with a structured, three-course dinner that was smooth, timely, and professionally managed. The experience was well received by our international delegates and added a polished touch to the evening.Overall, a reliable and well-organised catering partner for senior leadership meetings.`,
      },
      image: {
        src: "/gsk.png",
        alt: "GSK Nielsen",
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

export const OurTrustedClientsDataProps = {
  title: "Our Trusted <b>Clients!</b>",
  images: [
    "/deloitte.png",
    "/ey.png",
    "/zomato.png",
    "/amex.png",
    "/droom.png",
    "/gsk.png",
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
    // {
    //   image: {
    //     src: "/images/Copy of 202110_Chef_Kenzo_food-456.jpg",
    //     alt: "avatar",
    //   },
    // },
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
    // {
    //   image: {
    //     src: "/new-img-1.webp",
    //     alt: "avatar",
    //   },
    // },
    {
      image: {
        src: "/new-img-2.webp",
        alt: "avatar",
      },
    },
    // {
    //   image: {
    //     src: "/new-img-3.webp",
    //     alt: "avatar",
    //   },
    // },
    // {
    //   image: {
    //     src: "/new-img-4.webp",
    //     alt: "avatar",
    //   },
    // },
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
    // {
    //   image: {
    //     src: "/new-img-7.webp",
    //     alt: "avatar",
    //   },
    // },
  ],
};

// oldtestimonials=[
//   {
//       data: {
//         title: "Ritika Sharma,",
//         description: `We recently hired Chef Kenzo for our lunch at the office, and the food was absolutely amazing! Every dish was packed with flavor, and the presentation was top-notch. Our team couldn’t stop talking about the fusion options. Chef Kenzo truly elevated the entire experience. Highly recommend for any corporate event!`,
//       },
//       image: {
//         src: "/images/circle.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
//     {
//       data: {
//         title: "Apoorva Tiwari",
//         description: `Brownie really was brilliantly enrichedmust try.`,
//       },
//       image: {
//         src: "/images/circle.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
//     {
//       data: {
//         title: "Sneha Jha",
//         description: `The Mexican Burrito bowl was delicious. They also gave a complimentary Blondie dessert which was a delight! Good job. Will order again.`,
//       },
//       image: {
//         src: "/images/circle1.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
//     {
//       data: {
//         title: "Divvya Anand",
//         description: `Chicken Popcorn was very flavoursome and a good snackie option, loved the Blondie per usual, unique & tasty dessert!`,
//       },
//       image: {
//         src: "/images/circle2.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
//     {
//       data: {
//         title: "Anil Mehta",
//         description: `Chef Kenzo provided catering for our corporate seminar, and it was a hit. The quality, taste, and variety were impressive, and everything arrived fresh and on time. The service was professional, and they really understood our needs. Will definitely be using them again for future events!`,
//       },
//       image: {
//         src: "/images/circle2.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
//     {
//       data: {
//         title: "Karan",
//         description: `My go to place to order always`,
//       },
//       image: {
//         src: "/images/circle2.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
//     {
//       data: {
//         title: "AJ",
//         description: `Amazing as always. One of a very few restaurants in Gurgaon that compliments their customers. 10/10`,
//       },
//       image: {
//         src: "/images/circle2.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
//     {
//       data: {
//         title: "Priyam",
//         description: `this place has incredible food shahi tukda and the blondie are insanely good great middle east platter incredible food and plentiful quantities`,
//       },
//       image: {
//         src: "/images/circle2.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
//     {
//       data: {
//         title: "Nisha Verma",
//         description: `We entrusted Chef Kenzo with a large-scale event, and they exceeded expectations. From the perfectly curated menu to the prompt delivery, everything was seamless. The team was professional, and the food was well-received by all. Chef Kenzo truly knows how to cater to corporate clients.`,
//       },
//       image: {
//         src: "/images/circle2.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
//     {
//       data: {
//         title: "Ankita Sachdeva",
//         description: `The best Lebanese platter I have had since a very long time .. loved it`,
//       },
//       image: {
//         src: "/images/circle2.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
//     {
//       data: {
//         title: "Ruchi Suhag",
//         description: `If one is alive and have not tasted food from Chef Kenzo; he cannot be called fully alive. It's the best place in the world which only real blessings can make. Chef Kenzo, your food enlightens with every bite. May you thrive and may all people on earth taste your food and discover what enlightened food is like. May the supreme bless all of your team.`,
//       },
//       image: {
//         src: "/images/circle2.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
//     {
//       data: {
//         title: "Karthik Akkipeddi",
//         description: `It's 3 hours since I tasted the food and I am still recovering from the experience. I don't know what hit me, THIS IS "THE BEST FOOD" I HAVE HAD DELIVERED TO ME. The Chicken Rara Platter is what dreams are made of, the kulcha dipped in buttery goodness, the Chicken Rara perfectly spiced, finger-licking good. Whoever cooked this food, if you are reading this, from the bottom of my heart, THANK YOU.`,
//       },
//       image: {
//         src: "/images/circle2.png",
//         alt: "avatar",
//       },
//       icon: [
//         <FillStar key={1} />,
//         <FillStar key={2} />,
//         <FillStar key={3} />,
//         <FillStar key={4} />,
//         <FillStar key={5} />,
//       ],
//     },
// ]
