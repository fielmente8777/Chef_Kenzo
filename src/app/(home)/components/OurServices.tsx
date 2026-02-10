"use client"
import { Card, Container, Section } from "@/components";
import { useWebContext } from "@/contextapi/WebContext";
import { DataTypeProps } from "@/types/type";

const OurServices: React.FC<DataTypeProps> = ({
  title,
  description,
  items,
  link,
}) => {

  const {setIsOpen} = useWebContext();
  const handleShowModal = () => {
    setIsOpen(true);
  }
  return (

    <Section>

      <Container>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-red-primary text-center">{title}</h2>
          <p
            className="text-center text-black-primary text-2xl lg:text-[2rem]/[2.5rem]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="mt-8 lg:grid grid-cols-3 gap-5">
            {items?.map((item, index) => <Card border={false} center key={index} {...item} />)}
          </div>
        </div>
        {link && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShowModal}
              className="flex gap-2 px-6 capitalize bg-red-primary hover:bg-white hover:text-red-primary hover:scale-x-110 duration-700 transition rounded-md py-3 font-medium border border-solid border-red-primary bg-primary text-black-primary"
            >
              {link.linkText}
            </button>
          </div>
        )}

      </Container>
    </Section>
  );
};

export default OurServices;
