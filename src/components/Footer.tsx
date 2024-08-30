import Image from "next/image";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import { OutLineCopyRight } from "@/icons/icons";
import Link from "next/link";
import { contactData, PoliciesDataProps } from "@/db/data";
const Footer = () => {


  interface CertificateData {
    imageSrc: string;
    title: string;
    value: string;
  }

  const certificateData: CertificateData[] = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7476d2f0be7846227349b3cb66d710c5da2ba758a75942dbbf97a54b9eb80bbe?placeholderIfAbsent=true&apiKey=00653ad687dd4653a4d305d93aceaa71",
      title: "Certificate No:",
      value: "DIPP82858"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d73e13044c6407eb8a4da858a51e6365a18123bfecd502c76f521cccdfbc156f?placeholderIfAbsent=true&apiKey=00653ad687dd4653a4d305d93aceaa71",
      title: "Registration No:",
      value: "UDYAM-HR-05-0021992"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd88fea7a5b45050493a0611fe5f1c7365a3b54158fc9531a1759debe70cada2?placeholderIfAbsent=true&apiKey=00653ad687dd4653a4d305d93aceaa71",
      title: "LIC Number:",
      value: "10821005001196"
    }
  ]
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
          <section className="flex justify-between flex-wrap gap-10 items-center text-lg max-Width">
            {certificateData.map((item, index) => (
              <div key={index} className=" ">
                <div className="flex justify-between gap-5">
                  <img loading="lazy" src={item.imageSrc} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[2.24] w-[130px]" />
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
