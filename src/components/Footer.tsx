"use client";

import { contactData, PoliciesDataProps } from "@/db/data";
import { OutLineCopyRight } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import Container from "./Container";

import { usePathname } from "next/navigation";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { SiSwiggy, SiZomato } from "react-icons/si";
const Footer = () => {
  const pathName = usePathname();
  interface CertificateData {
    imageSrc: string;
    title: string;
    value: string;
  }

  const certificateData: CertificateData[] = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7476d2f0be7846227349b3cb66d710c5da2ba758a75942dbbf97a54b9eb80bbe?placeholderIfAbsent=true&apiKey=00653ad687dd4653a4d305d93aceaa71",
      title: "Certificate No:",
      value: "DIPP82858",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d73e13044c6407eb8a4da858a51e6365a18123bfecd502c76f521cccdfbc156f?placeholderIfAbsent=true&apiKey=00653ad687dd4653a4d305d93aceaa71",
      title: "Registration No:",
      value: "UDYAM-HR-05-0021992",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd88fea7a5b45050493a0611fe5f1c7365a3b54158fc9531a1759debe70cada2?placeholderIfAbsent=true&apiKey=00653ad687dd4653a4d305d93aceaa71",
      title: "LIC Number:",
      value: "10825005000808",
      // value: "10821005001196",
    },
  ];
  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <footer
      className={`lg:pt-10 pt-3 pb-3 ${pathName === "/landing-page/" ? "bg-[#D4EEF9]/40" : "bg-yellow-primary"}`}
    >
      <Container>
        <div className="w-full">
          <div className="lg:grid grid-cols-3 lg:gap-[1rem] flex flex-col gap-7">
            {/* footer logo */}
            <div className="flex lg:justify-start justify-center">
              <div className="max-w-[12rem] h-[8rem] w-full aspect-[1/1] relative">
                <Image
                  src={Logo}
                  alt="Logo"
                  priority={true}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {/* footer logo end */}

            {/* footer links */}
            {pathName === "/landing-page/" ? (
              <Link
                href={contactData[0].href || "#"}
                className="text-black-primary font-semibold text-lg md:text-xl flex gap-2"
              >
                <span className="mt-1">
                  <LocationIcon />
                </span>
                {contactData[0].label}
              </Link>
            ) : (
              <div className="flex flex-col gap-5">
                <h3 className="text-3xl font-normal text-black-primary">
                  Policies
                </h3>
                <ul className="flex flex-col gap-4">
                  {PoliciesDataProps.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href || "#"}
                        className="text-black-primary font-normal text-lg"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* footer links end */}

            {/* footer contact */}
            {pathName === "/landing-page/" ? (
              <div className="flex flex-col gap-5 w-fit md:ml-auto">
                
                <Link
                  href={contactData[2].href || "#"}
                  className="text-black-primary font-semibold text-lg md:text-xl flex gap-2"
                >
                  <span className="mt-1">{contactData[2].icon}</span>
                  {contactData[2].label}
                </Link>
                <Link
                  href={contactData[1].href || "#"}
                  className="text-black-primary font-semibold text-lg md:text-xl flex gap-2"
                >
                  <span className="mt-1">{contactData[1].icon}</span>
                  {contactData[1].label}
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <h3 className="text-3xl font-normal text-black-primary">
                  Reach Us At
                </h3>
                <ul className="flex flex-col gap-3">
                  {contactData.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href || "#"}
                        className="text-black-primary font-normal text-lg flex gap-2"
                      >
                        <span className="mt-[.3rem]">{item.icon}</span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="flex gap-3 items-center">
                    <Link
                      href="https://www.instagram.com/thechefkenzo/"
                      target="_blank"
                      className="text-black-primary font-normal text-lg flex gap-2"
                    >
                      {/* <FaInstagram className="text-pink-300 text-2xl mt-1" /> */}
                      <RiInstagramFill
                        size={26}
                        className="text-pink-300 text-2xl mt-1"
                      />
                    </Link>
                    <Link
                      href="https://m.facebook.com/thechefkenzo/"
                      target="_blank"
                      className="text-black-primary font-normal text-lg flex gap-2"
                    >
                      {/* <FaInstagram className="text-pink-300 text-2xl mt-1" /> */}
                      <FaFacebookSquare
                        size={23}
                        className="text-pink-300 text-2xl mt-1"
                      />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/chefkenzo/"
                      target="_blank"
                      className="text-black-primary font-normal text-lg flex gap-2"
                    >
                      {/* <FaInstagram className="text-pink-300 text-2xl mt-1" /> */}
                      <ImLinkedin
                        size={20}
                        className="text-pink-300 text-2xl mt-1"
                      />
                    </Link>
                    <Link
                      href="https://m.youtube.com/@theChefkenzo"
                      target="_blank"
                      className="text-black-primary font-normal text-lg flex gap-2"
                    >
                      {/* <FaInstagram className="text-pink-300 text-2xl mt-1" /> */}
                      <IoLogoYoutube
                        size={22}
                        className="text-pink-300 text-2xl mt-1"
                      />
                    </Link>
                    <Link
                      href="https://www.swiggy.com/restaurants/chef-kenzo-m-t-h-road-greater-kailash-2-delhi-799802"
                      target="_blank"
                      className="text-black-primary font-normal text-lg flex gap-2"
                    >
                      {/* <FaInstagram className="text-pink-300 text-2xl mt-1" /> */}
                      <SiSwiggy
                        size={20}
                        className="text-pink-300 text-2xl mt-1"
                      />
                    </Link>
                    <Link
                      href="https://www.zomato.com/ncr/chef-kenzo-meals-from-around-the-globe-sushant-lok-gurgaon?amp=1"
                      target="_blank"
                      className="text-black-primary font-normal flex gap-2"
                    >
                      {/* <FaInstagram className="text-pink-300 text-2xl mt-1" /> */}
                      <SiZomato size={35} className="text-pink-300 mt-1" />
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {/* footer contact end */}
          </div>

          <div className="h-0.5 bg-red-primary my-5"></div>
          <section className="flex justify-between flex-wrap gap-10 items-center text-lg max-Width">
            {certificateData.map((item, index) => (
              <div key={index} className=" ">
                <div className="flex justify-between gap-5">
                  <div className="relative aspect-[4/3] w-[130px]">
                    <Image
                      src={item.imageSrc}
                      alt="LOGO"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col self-stretch my-auto w-[130px]">
                    <div className="text-zinc-900">{item.title}</div>
                    <div className="mt-1.5 text-stone-500">{item.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <div className="h-0.5 bg-red-primary my-5"></div>
          <div className="flex max-md:flex-col items-center justify-center gap-2">
            <div className="flex gap-4">
              <OutLineCopyRight />
              <span className="text-[#656565] text-center">
                2024 Kenzo Kissan India Private Limited
              </span>{" "}
            </div>

            <span className="text-[#656565] text-center">
              • All rights reserved
            </span>
            {/* <span className="text-[#656565] text-center">
              • Designed & Developed by Eazotel
            </span> */}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

export const LocationIcon = () => (
  <svg
    width="18"
    height="23"
    viewBox="0 0 18 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.115 20.811C7.721 21.311 8.353 21.768 9 22.214C9.6484 21.7739 10.2773 21.3058 10.885 20.811C11.898 19.9792 12.8513 19.0773 13.738 18.112C15.782 15.877 18 12.637 18 9C18 7.8181 17.7672 6.64778 17.3149 5.55585C16.8626 4.46392 16.1997 3.47177 15.364 2.63604C14.5282 1.80031 13.5361 1.13738 12.4442 0.685084C11.3522 0.232792 10.1819 0 9 0C7.8181 0 6.64778 0.232792 5.55585 0.685084C4.46392 1.13738 3.47177 1.80031 2.63604 2.63604C1.80031 3.47177 1.13738 4.46392 0.685084 5.55585C0.232792 6.64778 -1.76116e-08 7.8181 0 9C0 12.637 2.218 15.876 4.262 18.112C5.14862 19.0777 6.10196 19.9789 7.115 20.811ZM9 12.25C8.13805 12.25 7.3114 11.9076 6.7019 11.2981C6.09241 10.6886 5.75 9.86195 5.75 9C5.75 8.13805 6.09241 7.3114 6.7019 6.7019C7.3114 6.09241 8.13805 5.75 9 5.75C9.86195 5.75 10.6886 6.09241 11.2981 6.7019C11.9076 7.3114 12.25 8.13805 12.25 9C12.25 9.86195 11.9076 10.6886 11.2981 11.2981C10.6886 11.9076 9.86195 12.25 9 12.25Z"
      fill="#F2B9CA"
    />
  </svg>
);
