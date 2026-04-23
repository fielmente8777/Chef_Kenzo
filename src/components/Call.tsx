"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";

function Call() {
  const pathName = usePathname();

  let call = "tel:+9190969 07042";
  // switch (pathName) {
  //   case "/":
  //     call = "tel:+919289016888";
  //     break;
  //   case "/healthy-meal-plans/":
  //     call = "tel:+919205140888";
  //     break;
  //   default:
  //     call = "tel:+918595299043";
  //     break;
  // }

  return (
    <div className="fixed bottom-10 lg:left-3  left-4 z-20 cursor-pointer">
      <Link
        href={call}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-700 hover:bg-blue-800 hover:shadow-2xl transition-all"
      >
        <IoCall size={29} color="white" />
        <span className="sr-only">what&apos;s app</span>
      </Link>
    </div>
  );
}

export default Call;
