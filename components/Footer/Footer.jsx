"use client";
import React, { useState } from "react";
import {
  RiInformationLine,
  RiPhoneLine,
  RiShoppingBasket2Line,
} from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useAddSubcriber } from "../../services/Hooks/useSubscribers";
import toast from "react-hot-toast";

const links = [
  { label: "Menu", icon: <BiSolidFoodMenu />, href: "menu" },
  { label: "About Us", icon: <RiInformationLine />, href: "about" },
  { label: "Contact", icon: <RiPhoneLine />, href: "contact" },
  { label: "Order Now", icon: <RiShoppingBasket2Line />, href: "order" },
];

const customerLinks = [
  { label: "Privacy Policy", href: "privacy-policy" },
  { label: "Terms & Conditions", href: "terms" },
  { label: "Shipping Info", href: "shipping" },
  { label: "Returns & Refunds", href: "returns" },
  { label: "FAQs", href: "faq" },
];

const socialIcons = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/_fierygrillss" },
  { icon: <IoMailOutline />, href: "mailto:fierygrills@gmail.com" },
  { icon: <FaYoutube />, href: "#" },
];

export default function Footer() {
  const router = useRouter();
  const { mutate: addSubscribe } = useAddSubcriber();
  const [subscriberData, setSubscriberData] = useState("");

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  const isValidPhone = (value) =>
    /^\+?[0-9\s\-().]{7,20}$/.test(value.trim());

  const handleSubscribeButton = () => {
    const input = subscriberData.trim();
    if (!isValidEmail(input) && !isValidPhone(input)) {
      toast.error("Enter a valid email or phone number");
      return;
    }

    addSubscribe({ data: input, vendor: "fieryGrills" });
    setSubscriberData("");
    toast.success("Thanks for your subscription!");
  };

  return (
    <footer className="bg-[#1E1E1E] text-white font-poppins border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Social */}
        <div className="space-y-4">
          <img src="/assets/logo1.png" className="w-20 h-20" alt="Logo" />
          <p className="text-sm text-gray-400">
          <span className="text-[#EBB03F] font-semibold text-base md:text-lg">Fiery Grills</span>
          <span className="opacity-70 text-xs md:text-sm ml-1">– Authentic Punjabi Flavors, Made with Love Just Like Home</span>
          </p>
          <div className="flex gap-3 pt-2">
            {socialIcons.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full hover:border-[#EBB03F] transition"
              >
                {React.cloneElement(item.icon, {
                  className: "text-[#EBB03F] text-sm",
                })}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {links.map((item, i) => (
              <li key={i}>
                <a
                  onClick={() => {
                    if (item.href) {
                      router.push(`/${item.href}`);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="flex items-center cursor-pointer gap-2 hover:text-[#EBB03F] transition"
                >
                  {React.cloneElement(item.icon, {
                    className: "text-[#EBB03F]",
                  })}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {customerLinks.map((item, i) => (
              <li key={i}>
                <a
                  onClick={() => router.push(`/${item.href}`)}
                  className="cursor-pointer hover:text-[#EBB03F] transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm text-gray-300">
          <h4 className="text-sm font-semibold">Contact Us</h4>
          <div className="flex items-center gap-2">
            <IoMailOutline className="text-[#EBB03F]" />
            <a href="mailto:fierygrills@gmail.com">fierygrills@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <RiPhoneLine className="text-[#EBB03F]" />
            <a href="tel:+14373131390">+1 (437) 313-1390</a>
          </div>
        </div>

        {/* Subscription */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Stay Updated</h3>
          <p className="text-gray-300 text-sm">
            Get menu updates & exclusive offers
          </p>
          <input
            type="text"
            value={subscriberData}
            onChange={(e) => setSubscriberData(e.target.value)}
            placeholder="Enter your email or phone"
            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-md px-4 py-2 text-white text-sm placeholder:text-white/50 focus:outline-none"
          />
          <button
            onClick={handleSubscribeButton}
            className="w-full border border-[#EBB03F] text-[#EBB03F] font-medium py-1 rounded-md hover:bg-[#EBB03F] hover:text-[#1E1E1E] transition"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Fiery Grills. All rights reserved.
      </div>
    </footer>
  );
}
