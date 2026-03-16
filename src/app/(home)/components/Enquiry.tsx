import { Form, Section } from "@/components";
import Image from "next/image";
import Contact1 from "../../../../public/images/Copy of 202203_Chef_Kenzo_food-064 (1).jpg";
import Contact2 from "../../../../public/images/contact2.webp";

const Enquiry = () => {
  return (
    <Section>
      <div className="max-Width  max-md:my-10 lg:pt-[2.5rem] lg:pb-[2.5rem] py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="relative w-full aspect-[4/5.2] order-2 md:order-1">
            <Image
              src={Contact2}
              alt="alt"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col gap-8 w-full order-1 md:order-2 ">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl  lg:text-[2rem]/[2.5rem] font-normal text-gray-primary">
                Ready to book the catering for your special event?
              </h3>
            </div>

            <div className="relative w-full aspect-[4/4.1]">
              <Image
                src={Contact1}
                alt="alt"
                fill
                className=" rounded-md object-cover"
              />
            </div>
          </div>
          <div className="w-full order-3">
            <Form />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Enquiry;
