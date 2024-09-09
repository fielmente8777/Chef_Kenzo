import { Container, Section } from "@/components";
import { refundPolicyData } from "@/db/conditionsPageDate";

const page = () => {
  return (
    <main>
      <Section>
        <Container>
          <h1 className="lg:text-5xl py-3 text-3xl text-center capitalize bg-yellow-primary text-red-primary">
            {refundPolicyData.title}
          </h1>
        </Container>
      </Section>

      {refundPolicyData.data.map((item) => (
        <Section key={item.subTitle} className="lg:py-7">
          <Container>
            <h2 className="lg:text-3xl text-2xl text-black-primary capitalize">
              {item.subTitle}
            </h2>
            {item.ulList && (
              <ul className="list-disc ps-5 mt-5 flex flex-col gap-4">
                {item.ulList.map((item) => (
                  <li
                    key={item}
                    className="lg:text-lg text-base text-gray-primary ps-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {item.olList && (
              <ol className="list-decimal mt-5 flex flex-col gap-4 ps-5">
                {item.olList.map((item) => (
                  <li key={item} className="lg:text-lg text-base text-gray-primary ps-1">{item}</li>
                ))}
              </ol>
            )}
          </Container>
        </Section>
      ))}
    </main>
  );
};

export default page;
