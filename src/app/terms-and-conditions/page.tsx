import { Container, Section } from "@/components";
import {
  termAndConditionData,
  termAndConditionData2,
} from "@/db/conditionsPageDate";
import Link from "next/link";

const page = () => {
  interface dataTypes {
    id: string;
    title: string;
    data: {
      text?: string;
      ulList?: string[];
      span?: string;
      subTitle?: string;
      color?: string;
    }[];
  }
  return (
    <main>
      <Section className="lg:pb-0 lg:pt-0">
        <Container>
          <h1 className="lg:text-5xl py-3 text-3xl text-center capitalize bg-yellow-primary text-red-primary">
            Terms and Conditions
          </h1>
        </Container>
      </Section>
      <Section className="lg:pt-8 lg:pb-0">
        <Container>
          <h2 className="lg:text-[2rem]/[2.5rem] text-2xl font-black text-black-primary">
            {termAndConditionData.title}
          </h2>
          <ol className="list-decimal ps-5 py-3 flex flex-col gap-2">
            {termAndConditionData.description.map((item, index) => (
              <li
                key={index}
                className="lg:text-lg text-base text-black-primary ps-1 cursor-pointer"
              >
                <Link href={item.id}>{item.text}</Link>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      {termAndConditionData2.map((item: dataTypes) => (
        <Section key={item.id} id={item.id} className="lg:pt-8 lg:pb-0">
          <Container>
            <h2 className="lg:text-[2rem]/[2.5rem] text-2xl font-black text-black-primary">
              {item.title}
            </h2>
            {item.data.map((item, index: number) => (
              <div className="" key={index}>
                {item.subTitle && (
                  <h3 className="lg:text-3xl text-xl font-normal text-black-primary mt-5">
                    {item.subTitle}
                  </h3>
                )}
                {item.text && (
                  <p className="text-gray-primary text-lg mt-4">
                    {item.span && (
                      <span className="text-black-primary">{item.span}</span>
                    )}
                    {item.text}
                  </p>
                )}
                {item.ulList && (
                  <ul
                    className={`list-disc ps-5 py-3 flex flex-col gap-1 ${item.color === "black" ? "text-black-primary" : "text-gray-primary"}`}
                  >
                    {item.ulList.map((item: any, index: number) => (
                      <li
                        key={index}
                        className={`lg:text-lg text-base  ps-1`}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Container>
        </Section>
      ))}
      <Container>
        <div className="font-bold lg:pb-12 pb-7">
          <p className="text-black-primary text-lg mt-4">
            Kenzo Kissan India Pvt Ltd
          </p>
          <p className="text-black-primary text-lg mt-4">
            D-121 GF Sushant Shopping Arcade B Block Sushant Lok 1
          </p>
          <p className="text-black-primary text-lg mt-4">
            Gurugram, Haryana 122009
          </p>
          <p className="text-black-primary text-lg mt-4">India</p>
          <p className="text-black-primary text-lg mt-4">
            Phone: +91 9096907042
          </p>
          <p className="text-black-primary text-lg mt-4">contact@kenzok.com</p>
        </div>
      </Container>
    </main>
  );
};

export default page;
