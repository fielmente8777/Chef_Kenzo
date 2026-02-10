"use client";
import Image from "next/image";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Form from "./Form";
import { useWebContext } from "@/contextapi/WebContext";

const PopupForm = () => {
  const { isOpen, setIsOpen } = useWebContext();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section
        className={`fixed z-50 w-full bg-white/70 backdrop-blur-sm inset-0 transform transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-75"}`}
      >
        <article className="flex justify-center items-center h-full py-20 max-md:px-4">
          <div className="w-full max-w-4xl max-md:mt-20 shadow-xl p-4 relative rounded-md border-2 border-pink-400 bg-white">
            <button
              onClick={closeModal}
              className="absolute top-[-19px] right-[-19px] w-10 h-10 flex justify-center items-center text-lg rounded-full bg-pink-400 text-white"
            >
              <RxCross2 size={24} />
            </button>
            <div className="flex items-center max-md:flex-col justify-center max-md:gap-0 gap-3 w-full">
              <div className="relative hidden md:block w-full aspect-[4/4.8]  max-md:-mb-16">
                <Image
                  src="/images/contact2.webp"
                  alt="Hospitality Marketing"
                  fill
                  className="object-cover rounded-md"
                  priority={true}
                />
              </div>
              <div className="w-full">
                <Form />
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default PopupForm;
