"use client";
import { Card, Container, Section, SliderSwip } from "@/components";
import { DataTypeProps } from "@/types/type";
import React, { useState } from 'react'

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import PopupForm from "./PopupForm";

const Events = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const data = [
        `We've worked with a catering company in Indore to enhance their events and they had to say this: "The Chef Kenzo team is incredibly professional. They always plan well in advance, ensuring everything runs smoothly. And when it comes to taste and overall experience, they’re spot-on every time. We’ve used their services twice now, and both times have been nothing short of exceptional.`,
        `We have served prestigious corporate clients in Gurugram, such as American Express and Deloitte, both of whom had an outstanding experience with Chef Kenzo.`
    ]
    return (
        <section className="flex max-Width flex-col rounded-none">
            <div className="flex flex-col px-10 pt-11 pb-6 w-full bg-blue-100 rounded-xl max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                        <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[764px] max-md:max-w-full">
                            <h2 className="text-3xl font-black leading-none text-zinc-900 max-md:max-w-full">
                                <span>Our Past</span> Events{" "}
                                <span>Testimonials!</span>
                            </h2>
                            <div className="w-full">
                                <SliderSwip
                                    data={data}
                                    modules={[Pagination, Autoplay]}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    speed={1000}
                                    pagination={{
                                        clickable: true,
                                        type: "bullets",
                                        el: ".pagination-dat",
                                    }}
                                    spaceBetween={10}
                                    className="mySwiper"
                                    slidesPerView={1}
                                    classNameSwiper="mySwiper mt-5"
                                >
                                    {(item) => (
                                        <p className="my-6 w-full text-lg leading-7 text-gray-primary max-md:max-w-full">
                                            {item}
                                        </p>
                                    )}
                                </SliderSwip>
                                {/* <div className="pagination-dat pagination flex justify-center items-center mt-5 gap-1 max-md:mb-4"></div> */}
                            </div>



                        </div>
                        <button onClick={handleShowModal} className="gap-2.5 self-stretch px-5 py-2.5 my-auto text-lg text-center bg-red-primary rounded text-black-primary">
                            Get a Quote Now!
                        </button>
                    </div>
                </div>
            </div>

            {showModal && <PopupForm showModal={showModal} setShowModal={setShowModal} />}
        </section>

    )
}

export default Events