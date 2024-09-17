import Image from "next/image";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import { OutLineCopyRight } from "@/icons/icons";
import Link from "next/link";
import { contactData, PoliciesDataProps } from "@/db/data";
import { FaInstagram } from "react-icons/fa6";

import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import { SiZomato } from "react-icons/si";
import { SiSwiggy } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
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
      value: "10821005001196",
    },
  ];
  return (
    <footer className="lg:pt-10 pt-3 pb-3 bg-yellow-primary">
      <Container>
        <div className="w-full">
          <div className="lg:grid grid-cols-3 lg:gap-[1rem] flex flex-col gap-7">
            {/* footer logo */}
            <div className="flex lg:justify-start justify-center">
              <Link
                href="/"
                className="max-w-[12rem] h-[8rem] w-full aspect-[1/1] relative"
              >
                <Image
                  src={Logo}
                  alt="Logo"
                  priority={true}
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
            {/* footer logo end */}

            {/* footer links */}
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
            {/* footer links end */}

            {/* footer contact */}
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
