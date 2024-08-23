import Image from "next/image";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import { links } from "@/db/data";
import Link from "next/link";
const NavBar = () => {
  return (
    <header className="py-5">
      <Container>
        <div className="w-full flex justify-between items-center">
          <div className="relative aspect-[1/1] lg:w-[6.5rem] w-[55px]">
            <Image
              src={Logo}
              alt="Logo"
              priority={true}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            {/* <ul className="lg:flex hidden gap-4 items-center justify-center">
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="flex gap-2 items-center justify-center text-lg"
                  >
                    <span className="sr-only">{item.lable}</span>
                    <span className="mt-1">{item.icon}</span>
                    {item.lable}
                  </Link>
                </li>
              ))}
            </ul> */}
            <Link
              href={"#contact"}
              className="lg:px-7 lg:py-4 px-3 py-2 border rounded-md text-black-primary lg:text-base text-sm capitalize border-red-primary bg-red-primary hover:bg-white hover:text-red-primary hover:scale-x-110 duration-700 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
