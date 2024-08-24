import Image from "next/image";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import { OutLineCopyRight } from "@/icons/icons";
import Link from "next/link";
import { contactData, PoliciesDataProps } from "@/db/data";
const Footer = () => {
  return (
    <footer className="lg:pt-10 pt-3 pb-3 bg-yellow-primary">
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
              </ul>
            </div>
            {/* footer contact end */}
          </div>
          <div className="h-0.5 bg-red-primary my-5"></div>
          <div className="flex max-md:flex-col items-center justify-center gap-2">
            <div className="flex gap-1">
              <OutLineCopyRight />
              <span className="text-black-primary text-center">
                2024 Chef Kenzo
              </span>{" "}
              <span className="text-black-primary text-center">
                • All rights reserved
              </span>
            </div>

            <span className="text-black-primary text-center">
              • Designed & Developed by Eazotel.com
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
