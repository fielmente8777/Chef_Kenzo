"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import Container from "./Container";

import { useWebContext } from "@/contextapi/WebContext";
import { usePathname } from "next/navigation";
import { CtaBtn } from "./cta-btn/CtaBtn";
import { contact } from "@/utils/constent";
const NavBar = () => {
  const pathName = usePathname();
  const { setIsOpen } = useWebContext();

  const handleGetInTouch = () => {
    setIsOpen(true);
  };
  switch (pathName) {
    case "/thank-you/":
      return null;
      break;
    case "/healthy-meal-plans/":
      return null;
      break;
      
    case "/landing-page/":
      return (
        <header className="py-4 max_screen_width relative after:absolute after:inset-0 after:bg-[#FCFBEE] after:z-[-3]">
          <Container>
            <div className="w-full flex max-md:flex-row-reverse justify-between items-center">
              <Link
                href="tel:+918595299043"
                className="flex items-center gap-2"
              >
                <span className="md:text-[#F2B9CA] text-black-primary">
                  <CallIcon />
                  <span className="sr-only">call icon</span>
                </span>
                <span className="text-xl md:block hidden">+91 8595299043</span>
              </Link>
              <Link
                href="/"
                className="relative aspect-[4/2.7] lg:w-[10rem] w-[5.5rem]"
              >
                <Image
                  src="/landing-page/logo.png"
                  alt="Logo"
                  priority={true}
                  fill
                  className="object-contain"
                />
              </Link>
              <CtaBtn
                type="link"
                target="_blank"
                rel="noopener noreferrer"
                href={contact.WhatsappCta}
                label="enquire now"
                className="text-lg uppercase md:flex hidden text-white bg-[#1C1C1C] rounded-full font-semibold"
              />
            </div>
          </Container>
        </header>
      );
      break;
    default:
      return (
        <header className="py-5">
          <Container>
            <div className="w-full flex justify-between items-center">
              <Link
                href="/"
                className="relative aspect-[1/1] lg:w-[6.5rem] w-[5.5rem]"
              >
                <Image
                  src={Logo}
                  alt="Logo"
                  priority={true}
                  fill
                  className="object-contain"
                />
              </Link>
              <div className="flex items-center justify-center gap-4">
                <button
                  // href={"#contact"}
                  onClick={handleGetInTouch}
                  className="lg:px-7 lg:py-4 px-3 py-2 border rounded-md text-black-primary lg:text-base text-sm capitalize border-red-primary bg-red-primary hover:bg-white hover:text-red-primary hover:scale-x-110 duration-700 transition"
                >
                  {/* Get in Touch */}
                  Get A Quote
                </button>
              </div>
            </div>
          </Container>
        </header>
      );
  }
};

export default NavBar;

export const CallIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3279 22.5C17.4129 22.5 16.1276 22.1691 14.2029 21.0938C11.8624 19.7812 10.0521 18.5695 7.72432 16.2478C5.47995 14.0048 4.38776 12.5527 2.85917 9.77109C1.13229 6.63047 1.42667 4.98422 1.75573 4.28062C2.1476 3.43969 2.72604 2.93672 3.4737 2.4375C3.89836 2.15927 4.34776 1.92076 4.8162 1.725C4.86307 1.70484 4.90667 1.68562 4.94557 1.66828C5.1776 1.56375 5.52917 1.40578 5.97448 1.57453C6.27167 1.68609 6.53698 1.91438 6.95229 2.32453C7.80401 3.16453 8.96792 5.03531 9.39729 5.95406C9.68557 6.57328 9.87635 6.98203 9.87682 7.44047C9.87682 7.97719 9.60682 8.39109 9.27917 8.83781C9.21776 8.92172 9.15682 9.00187 9.09776 9.07969C8.74104 9.54844 8.66276 9.68391 8.71432 9.92578C8.81885 10.4119 9.59838 11.8589 10.8795 13.1372C12.1606 14.4155 13.5659 15.1458 14.0539 15.2498C14.306 15.3037 14.4443 15.2222 14.9281 14.8528C14.9974 14.7998 15.0687 14.745 15.1432 14.6902C15.6429 14.3184 16.0376 14.0555 16.5617 14.0555H16.5645C17.0206 14.0555 17.411 14.2533 18.0579 14.5795C18.9017 15.0052 20.8287 16.1541 21.6739 17.0067C22.0849 17.4211 22.3142 17.6855 22.4262 17.9822C22.5949 18.4289 22.436 18.7791 22.3324 19.0134C22.3151 19.0523 22.2959 19.095 22.2757 19.1423C22.0784 19.6099 21.8385 20.0584 21.559 20.482C21.0607 21.2273 20.5559 21.8044 19.7131 22.1967C19.2803 22.4015 18.8067 22.5052 18.3279 22.5Z"
      fill="currentColor"
    />
  </svg>
);
