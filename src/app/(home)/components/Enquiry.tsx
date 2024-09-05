import { Form, Section } from "@/components";
import Image from "next/image";
import Contact1 from "../../../../public/images/Copy of 202203_Chef_Kenzo_food-064 (1).jpg"
import Contact2 from "../../../../public/images/contact2.webp"

const Enquiry = () => {
  return (
    <Section className="max-Width  max-md:my-10 lg:pt-[2.5rem] lg:pb-[2.5rem] py-5" >

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
            <h2 className="text-2xl lg:text-[2rem]/[2.5rem] font-normal text-red-primary">
              Get in Touch
            </h2>
            <h3 className="text-2xl  lg:text-[2rem]/[2.5rem] font-normal text-black-primary">
              Ready to book the catering for your{" "}special event?
            </h3>
          </div>

          <div className="relative w-full aspect-[4/3.5]">
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
      {/* <div className="lg:py-14 py-5 bg-yellow-primary">
        <Container>
          <div className="lg:relative">
            <div className="flex flex-col items-center justify-center gap-5 max-w-[50rem]">
              <div className="w-full flex flex-col gap-4 lg:pe-[3rem]">
                <h2 className="text-2xl lg:text-[2rem]/[2.5rem] font-normal text-red-primary">
                  Get in Touch
                </h2>
                <h3 className="text-2xl lg:text-[2rem]/[2.5rem] font-normal text-black-primary">
                  Ready to book the catering for your{" "}
                  <b>special event?</b>
                </h3>
                <p className="text-black-primary lg:text-lg text-base mt-2">
                  Contact us now for catering services for corporate or social
                  events, including kitty parties, birthdays, engagement
                  ceremonies, and weddings. Let us make your event unforgettable
                  with our exceptional service and delicious cuisine.
                </p>
              </div>
            </div>
            <div className="lg:absolute lg:right-0 lg:-top-[79%] z-10">
              <Form />
            </div>
          </div>
        </Container>
      </div> */}
    </Section>
  );
};

export default Enquiry;
