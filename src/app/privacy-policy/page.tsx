import { Container, Section } from "@/components";
import {
  privacyPolicyData1,
  privacyPolicyData2,
  privacyPolicyData3,
} from "@/db/conditionsPageDate";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <Section className="lg:pb-10 lg:pt-0">
        <Container>
          <h1 className="lg:text-5xl py-3 text-3xl text-center capitalize bg-yellow-primary text-red-primary">
            Privacy Policy
          </h1>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="lg:text-[2rem]/[2.5rem] text-2xl font-black text-black-primary uppercase flex max-md:flex-col justify-between">
            PRIVACY NOTICE
            <small className="text-gray-primary lg:text-lg text-sm font-normal">
              Last updated January 01, 2022
            </small>
          </h2>
          <p className="text-gray-primary text-lg mt-4">
            This privacy notice for Kenzo Kissan India Pvt Ltd {" "}
            <span className="text-black-primary">
              (&apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, or
              &apos;our&apos;,)
            </span>
            , describes how and why we might collect, store, use, and/or share{" "}
            <span className="text-black-primary">(&apos;process&apos;)</span>{" "}
            your information when you use our services{" "}
            <span className="text-black-primary">(&apos;Services&apos;)</span>,
            such as when you:
          </p>
          <ul className="list-disc ps-5 py-3 flex flex-col gap-2">
            <li className="lg:text-lg text-base text-gray-primary ps-1">
              Visit our website at Chefkenzo.com, or any website of ours that
              links to this privacy notice
            </li>
            <li className="lg:text-lg text-base text-gray-primary ps-1">
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>
          <h3 className="lg:text-3xl text-xl font-normal text-black-primary">
            SUMMARY OF KEY POINTS
          </h3>
          <p className="text-gray-primary text-lg mt-4">
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our table of contents
            below to find the section you are looking for. You can also
            click here to go directly to our table of contents.
          </p>
          {privacyPolicyData1.map((item, index) => (
            <div key={index}>
              <h3 className="lg:text-2xl font-bold text-black-primary mt-5">
                {item.title}
              </h3>
              <ul className="list-disc ps-5 mt-5 flex flex-col gap-2">
                <li
                  className="lg:text-lg text-base text-gray-primary ps-1"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </ul>
            </div>
          ))}
          <p className="text-gray-primary text-lg mt-4 lg:text-end">
            Want to learn more about what Kenzo Kissan India Pvt Ltd does with
            any information we collect? Click 
            <Link href="#" className="underline">
              here
            </Link>
             to review the notice in full.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="lg:text-[2rem]/[2.5rem] text-2xl font-black text-black-primary">
            {privacyPolicyData2.title}
          </h2>
          <ol className="list-decimal ps-5 py-3 flex flex-col gap-2">
            {privacyPolicyData2.description.map((item, index) => (
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
      {privacyPolicyData3.map((item) => (
        <Section key={item.id} id={item.id} className="lg:pb-10 lg:pt-0">
          <Container>
            <h2 className="lg:text-[2rem]/[2.5rem] text-2xl font-black text-black-primary">
              {item.title}
            </h2>
            {item.data?.map((item, index) => (
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
                    {item.ulList.map((item, index) => (
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
    </main>
  );
};

export default page;
