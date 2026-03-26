import { contact } from "@/utils/constent";

export const mealPlansPageData = {
  bannerData: {
    title: "Chef Kenzo Meal Plans!",
    subTitle: [
      { title: "Premium Nutrition", src: "/meal-plans/premium.png" },
      { title: "Absolute Flexibility", src: "/meal-plans/flexibility.png" },
    ],
    description:
      "Gurugram’s most trusted kitchen, now fueling your daily goals.",
    points: ["100% Fresh", "0% Frozen", "Completely Customizable"],
    actions: { label: "Build Your Plan", href: contact.WhatsappCta },
    note: "*Starting at just ₹299/Meal",
  },

  ambitionSection: {
    title: "Fueling Every <span>Ambition</span>",
    description: [
      "Whether you're crushing targets at work or hitting PRs in the gym, your nutrition shouldn't be a second job. We design, prep, and deliver hygienic, fresh food tailored to your lifestyle.",
    ],
    items: [
      {
        title: "For the High Performer",
        description: "Steady, clean energy to keep you sharp all day.",
        image: "/meal-plans/meal-1.png",
      },
      {
        title: "For the Busy Professional",
        description:
          "Reclaim your time. No cooking, no cleaning, no grocery shopping.",
        image: "/meal-plans/meal-2.png",
      },
      {
        title: "For Weight Loss",
        description:
          "Portion controlled meals to keep you on track without feeling deprived.",
        image: "/meal-plans/meal-3.png",
      },
      {
        title: "For Muscle Gain",
        description:
          "Protein dense, chef-crafted recipes designed for growth and recovery.",
        image: "/meal-plans/meal-4.png",
      },
    ],
    action: {
      label: "Contact Us",
      href: contact.WhatsappCta,
    },
  },

  flexibilitySection: {
    title: 'The Ultimate "Life Happens Flexibility',
    description: ["Other meal plans lock you in. We give you total control."],
    items: [
      {
        image: "/meal-plans/flexibility-1.png",
        title: "Dynamic Delivery Locations",
        description:
          "Lunch at the Cyber Hub office and dinner at your home? We ll route your meals exactly where you need them.",
      },
      {
        image: "/meal-plans/flexibility-2.png",
        title: "Pause Anytime",
        description:
          "Traveling for work or a vacation? Pause your subscription whenever you want (available on 15+ day plans)",
      },
      {
        image: "/meal-plans/flexibility-3.png",
        title: "2-Hour Cancellation",
        description:
          "Sudden dinner plans? Cancel up to 2 hours before delivery for ₹0 fees and keep the meal credit for another day",
      },
      {
        image: "/meal-plans/flexibility-4.png",
        title: 'The "Mood Swap',
        description:
          "Not feeling your scheduled meal? Let us know, and we’ll swap it out for something you actually crave",
      },
    ],
    action: {
      label: "Contact Us",
      href: contact.WhatsappCta,
    },
  },

  standardSection: {
    title: "The Chef Kenzo <span>Standard</span>",
    description: [
      "Over 6 Years of Culinary Excellence in Gurugram",
      "We aren't a new cloud kitchen experimenting with your diet. We have over half a decade of proven, amazing customer satisfaction, serving consistently phenomenal food.",
    ],
    items: [
      {
        image: "/meal-plans/frozen.png",
        title: "Fresh Daily, Never Frozen",
        description:
          "Prepared from scratch every single day in our ultra hygienic kitchen. Because it s fresh, you can safely store your meal in the fridge for up to 2 days.",
      },
      {
        image: "/meal-plans/sous-chef.png",
        title: "Got a Dietitian? We're Your Sous-Chef",
        description:
          "Already following a specific plan? Hand us your dietitian s instructions, and we ll prepare your meals exactly to their specifications.",
      },
      {
        image: "/meal-plans/safe.png",
        title: "Allergen & Preference Safe",
        description:
          "Gluten-free? Dairy-free? Special dietary needs? Our expert culinary team safely handles it all.",
      },
    ],
  },

  subscriptionSection: {
    title: "Simple, Transparent Subscriptions",
    description: ["Start building your habit today."],
    items: [
      {
        image: "/meal-plans/subscription-1.png",
        title: "The Starter Plan",
        points: [
          "Minimum Commitment: 1 Week",
          "Minimum Meals: 1 Meal / Day",
          "Price: Starts from ₹299/meal",
          "Includes Dynamic Delivery & 2-Hour Cancellations",
        ],
      },
      {
        image: "/meal-plans/subscription-2.png",
        title: "The Lifestyle Plan (15+ Days)",
        points: [
          "Commitment: 15 Days to Monthly",
          "Price: Starts from ₹299/meal",
          "Includes all Starter features PLUS the ability to Pause Anytime",
        ],
      },
    ],
    action: {
      label: "Contact Us",
      href: contact.WhatsappCta,
    },
  },
};
