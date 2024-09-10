"use client";
import Image from "next/image";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleGetInTouch = () => {
    if (pathname !== "/") {
      router.push("/#contact");
    } else {
      router.push("#contact");
    }
  };
  return (
    <header className="py-5">
      <Container>
        <div className="w-full flex justify-between items-center">
          <Link
            href="/"
            className="relative aspect-[1/1] lg:w-[6.5rem] w-[5.5rem]"
          >
            <Image
              src={Logo}
              alt="Logo"
              priority={true}
              fill
              className="object-contain"
            />
          </Link>
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

            <button
              // href={"#contact"}
              onClick={handleGetInTouch}
              className="lg:px-7 lg:py-4 px-3 py-2 border rounded-md text-black-primary lg:text-base text-sm capitalize border-red-primary bg-red-primary hover:bg-white hover:text-red-primary hover:scale-x-110 duration-700 transition"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
