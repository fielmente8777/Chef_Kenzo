import { whatsappLink } from "@/db/data";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <div className="fixed bottom-24 lg:left-3 left-4 z-20 cursor-pointer ">
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl"
      >
        <FaWhatsapp size={29} color="white" />
        <span className="sr-only">what&apos;s app</span>
      </Link>
    </div>
  );
}

export default Whatsapp;
