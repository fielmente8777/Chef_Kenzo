"use client";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import Form from "./Form";

const PopupForm = ({ showModal, setShowModal }: any) => {
  // const [openPopup, setOpenPopup] = useState(false);
  // const [popupMsg, setPopupMsg] = useState("");

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling when modal closes
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <section className="fixed z-50 w-full bg-white/70 h-screen bg-black top-0 left-0 ">
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
      )}
      {/* {openPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <p>{popupMsg}</p>
            <button
              onClick={() => setOpenPopup(false)}
              className="mt-2 bg-blue-dark text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default PopupForm;
