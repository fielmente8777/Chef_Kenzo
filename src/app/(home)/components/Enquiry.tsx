import { Container, Form, Section } from "@/components";
import Image from "next/image";

const Enquiry: React.FC = () => {
  return (
    <Section className="lg:pt-[8.5rem] lg:pb-[8.5rem] py-5" id="contact">
      <div className="lg:py-14 py-5 bg-yellow-primary">
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
      </div>
    </Section>
  );
};

export default Enquiry;
