"use client";

import Image from "next/image";
import {
  FaPhone,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const handleClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <footer className="text-white text-[16px] md:text-[18px] px-6 py-10 md:px-12 lg:px-14 bg-[#18181b] relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <div>
          <div
            className="inline-flex mb-4 rounded-lg"
            style={{ boxShadow: "0 0 30px 10px rgba(255, 255, 255, 0.3)" }}
          >
            <Image
              src="/assets/logo.png"
              alt="WealthFino Logo"
              width={80}
              height={80}
              className="rounded-lg cursor-pointer"
            />
          </div>
          <p className="mb-4 text-gray-300">
            Join our trading community for shared insights, interactive
            learning, and a collaborative community to enhance your Knowledge.
          </p>
          <div className="flex gap-3 mt-4">
            <Image
              src="/assets/appstore.png"
              alt="App Store"
              width={120}
              height={40}
              className="cursor-pointer rounded-sm"
              onClick={() =>
                handleClick(
                  "https://apps.apple.com/in/app/wealthfino-stocks-trading/id6450156970"
                )
              }
            />
            <Image
              src="/assets/googleplay.png"
              alt="Google Play"
              width={120}
              height={40}
              className="cursor-pointer"
              onClick={() =>
                handleClick(
                  "https://play.google.com/store/apps/details?id=com.rpy.wealth_cAaGur"
                )
              }
            />
          </div>
          <div className="mt-6 italic">
            <h4 className="font-bold text-white mb-1">Disclaimer</h4>
            <p className="text-gray-400">
              Investment in securities market is subject to market risks. Read
              all the related documents carefully before investing. Registration
              granted by SEBI and certification from NISM is no way guarantee
              performance of the intermediary or provide any assurance of
              returns to investors.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-1 text-gray-300">
            <li>
              <a href="/Policies/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/Policies/client-consent" className="hover:text-white">
                Client Consent and Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/Policies/pmla-policy" className="hover:text-white">
                PMLA Policy
              </a>
            </li>
            <li>
              <a href="/Policies/terms-conditions" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/Policies/standard-disclosures"
                className="hover:text-white"
              >
                Disclosure, USER & KYC Agreement
              </a>
            </li>
            <li>
              <a
                href="/Policies/disclaimer-website"
                className="hover:text-white"
              >
                Disclaimer for Website
              </a>
            </li>
            <li>
              <a
                href="/Policies/redressal-grievance"
                className="hover:text-white"
              >
                Redressal Of Grievance
              </a>
            </li>
            <li>
              <a
                href="/Policies/social-disclaimers"
                className="hover:text-white"
              >
                Social Media Disclaimers
              </a>
            </li>
            <li>
              <a href="/Policies/legal-disclosure" className="hover:text-white">
                Legal & Risk Disclosure
              </a>
            </li>
            <li>
              <a
                href="/Policies/refund-cancellation"
                className="hover:text-white"
              >
                Refund & Cancellation Policy
              </a>
            </li>
            <li>
              <a href="/Policies/internal-policy" className="hover:text-white">
                Internal Policy on Conflict of Interest
              </a>
            </li>
            <li>
              <a href="/Policies/investor-charter" className="hover:text-white">
                Investor Charter
              </a>
            </li>
            <li>
              <a href="/Policies/complaints-board" className="hover:text-white">
                Complaints Board
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          {/* SEBI Registered Box */}
          <div className="flex items-center bg-gray-800 rounded-lg mb-4 p-4 w-full max-w-md">
            <Image
              src="/assets/svg/sebi-registered-icon.svg"
              alt="SEBI Logo"
              width={50}
              height={50}
              className="mr-4 object-contain"
            />
            <p className="text-gray-200">
              Krishna Pathak
              <br />
              SEBI Registered Research Analyst
              <br />
              SEBI Reg. No : INH300009914
              <br/>
              BSE Enlistment No : 5590
            </p>
          </div>

          <h4 className="font-bold text-white mb-4">Contact Information</h4>

          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gray-800 p-2 rounded">
              <IoMdMail className="text-blue-400" />
            </div>
            <p className="text-gray-300">info@krishnapathak.com</p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-800 p-2 rounded">
              <FaPhone className="text-white" />
            </div>
            <p className="text-gray-300">+91 9883455700</p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-800 p-2 rounded">
              <FaWhatsapp className="text-green-500" />
            </div>
            <p className="text-gray-300">WhatsApp Support - 9353523685</p>
          </div>

          <h4 className="font-bold text-white mb-4">Address</h4>
          <p>
            RS-39/43, 5/3C Golden Park, Sankarpur West, Near Rabindranagar
            Co-operative, Durgapur, West Bengal - 713206
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-slate-300 my-10" />

      {/* Bottom Section */}
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex gap-6 space-x-4 text-xl text-gray-400">
          <a href="https://www.youtube.com/@WealthFino" aria-label="Youtube">
            <FaYoutube size={30} className="hover:text-red-500 transition" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaXTwitter size={30} className="hover:text-white transition" />
          </a>
          <a
            href="https://www.instagram.com/wealthfino.in?igsh=Mm5zZGNtYTQ1amc4&utm_source=qr"
            aria-label="Instagram"
          >
            <FaInstagram size={30} className="hover:text-pink-500 transition" />
          </a>
          <a href="https://t.me/WealthFino" aria-label="Telegram">
            <FaTelegramPlane
              size={30}
              className="hover:text-blue-500 transition"
            />
          </a>
        </div>
        <p className="text-white text-center">
          Copyright &copy; {new Date().getFullYear()} WealthFino. All rights
          reserved.
          <br />
          <span className="text-sm md:text-base font-semibold">
            Designed and Created by AJ.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
