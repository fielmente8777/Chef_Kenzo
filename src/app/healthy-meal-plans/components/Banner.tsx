import { Section } from "@/components";
import { CtaBtn } from "@/components/cta-btn/CtaBtn";
import { BannerTypeProps } from "@/types/landingPageType";
import Image from "next/image";
import AnimationTitle from "./AnimationTitle";
import ImageCard2 from "./cards/ImageCard2";
import Link from "next/link";
import { CallIcon } from "@/icons/formIcons";

const Banner: React.FC<BannerTypeProps> = ({
  title,
  subTitle,
  description,
  actions,
  points,
  note,
}) => {
  const arrayOfTitle = subTitle.map((item) => item.title);
  return (
    <Section
      defaultPadding={false}
      className="grid md:grid-cols-2 grid-cols-1  justify-center"
    >
      <div>
        <div className="max-w-[38rem] w-full max-md:px-4 md:ml-auto md:mr-16 flex items-center justify-between">
          <div className="relative aspect-[1/1] lg:w-[6.5rem] w-[5.5rem]">
            <Image
              src="/images/logo.png"
              alt="Logo"
              priority={true}
              fill
              className="object-contain"
            />
          </div>
          <Link href="tel:+918595299043" className=" text-black-primary md:hidden block">
            <CallIcon />
            <span className="sr-only">call icon</span>
          </Link>
        </div>
        <div className="w-full h-[0.5px] bg-[#F2B9CA]" />
        <div className="max-w-[38rem] w-full max-md:px-4 md:ml-auto md:mr-16 space-y-6 py-8">
          <div className="flex flex-wrap max-md:justify-center gap-2">
            {points.map((point, index) => (
              <div
                className="w-fit flex items-center gap-2 px-4 py-2 rounded-lg border-[0.5px] border-[#F2B9CA] bg-[#FCFBEE]"
                key={index}
              >
                <span>
                  <TickIcon />
                </span>
                <p className="text-[#656565]">{point}</p>
              </div>
            ))}
          </div>
          <h1 className="md:text-5xl text-[2rem] max-md:text-center text-black-primary font-bold">
            {title}
          </h1>
          <AnimationTitle title={arrayOfTitle} sectionId="banner" />
          <p className="md:text-lg text-[#656565] max-md:text-center">
            {description}
          </p>

          <CtaBtn
            type="link"
            label={actions.label}
            href={actions.href}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white bg-[#1C1C1C] max-md:mx-auto uppercase rounded-full w-fit font-semibold"
          />
          <p className="text-[#656565] max-md:text-center">{note}</p>
        </div>
      </div>
      <ImageCard2 cards={subTitle} sectionId="banner" />
    </Section>
  );
};

export default Banner;

export const TickIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.3334 8L13.7068 6.14L13.9334 3.68L11.5268 3.13333L10.2667 1L8.00008 1.97333L5.73342 1L4.47342 3.12667L2.06675 3.66667L2.29342 6.13333L0.666748 8L2.29342 9.86L2.06675 12.3267L4.47342 12.8733L5.73342 15L8.00008 14.02L10.2667 14.9933L11.5268 12.8667L13.9334 12.32L13.7068 9.86L15.3334 8ZM6.72675 11.1467L4.19342 8.60667L5.18008 7.62L6.72675 9.17333L10.6267 5.26L11.6134 6.24667L6.72675 11.1467Z"
      fill="#00800A"
    />
  </svg>
);
