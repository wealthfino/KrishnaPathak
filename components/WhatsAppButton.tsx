"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl = "https://wa.me/919353523685";

export default function WhatsAppButton() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 rounded-full"
    >
      <div className="h-12 w-12 md:w-14 md:h-14 rounded-full bg-green-500 flex items-center justify-center transition-shadow duration-300 hover:shadow-[0_0_24px_#25D366]">
        <FaWhatsapp className="w-7 h-7" />
      </div>
    </Link>
  );
}
