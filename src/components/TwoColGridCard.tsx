"use client";
import Image from "next/image";
import Container from "./Container";
import Section from "./Section";
import Link from "next/link";
import { TwoColCardprops } from "@/types/type";
import { useState } from "react";
import PopupForm from "./PopupForm";
import { useWebContext } from "@/contextapi/WebContext";

const TwoColGridCard: React.FC<TwoColCardprops> = ({
  title,
  description,
  description2,
  image,
  linkText,
  href,
  linkText1,
  href1,
  listItems,
}) => {
  const { setIsOpen } = useWebContext();
  const handleShowModal = () => {
    setIsOpen(true);
  };

  const handleDownloadPDF = () => {
    // The path to the PDF file stored in the public folder
    const fileUrl = "images/CompanyProfile.pdf";

    // Create an anchor element and trigger the download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Company_Profile.pdf"); // Optional: Specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the element after download
  };
  return (
    <div className="lg:grid grid-cols-2 flex flex-col gap-5">
      <div className="relative  img_hover rounded-lg overflow-hidden">
        <Image
          priority={true}
          src={image.src}
          alt={`${image.alt ? image.alt : "avatar"}`}
          fill
          className="object-cover img rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between gap-5">
        <h2 className="text-xl lg:text-2xl font-semibold text-red-primary lg:text-start text-center">
          {title}
        </h2>
        {/* <p
          className="text-xl lg:text-[2rem]/[2.5rem] font-normal text-black-primary lg:text-start text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        /> */}

        {description2 && (
          <p className="text-base md:text-[18px]  text-gray-primary lg:text-start text-center">
            {description2}
          </p>
        )}
        {listItems && (
          <ul className="flex flex-col gap-2">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="text-base text-black-primary font-light flex gap-2"
              >
                <span className="">{item.icon}</span>
                {item.description}
              </li>
            ))}
          </ul>
        )}
        <div className="flex max-sm:flex-col gap-5 lg:justify-start justify-center items-center">
          <button
            onClick={handleShowModal}
            // href={href}
            className="flex gap-2 px-6 capitalize bg-red-primary hover:bg-white hover:text-red-primary hover:scale-x-110 duration-700 transition rounded-lg py-3 font-medium border border-solid border-red-primary bg-primary text-black-primary"
          >
            {linkText}
          </button>
          <button
            onClick={handleDownloadPDF}
            className="flex gap-2 px-6 capitalize hover:bg-white hover:text-red-primary duration-700 transition py-3 font-medium text-[#1C1C1C]/50 underline"
          >
            {linkText1}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoColGridCard;
