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
import { useRouter } from "next/navigation"; // ✅ Updated for Next.js
import { useAddSubcriber } from "../../services/Hooks/useSubscribers";
import toast from "react-hot-toast";

const links = [
  { label: "Menu", icon: <BiSolidFoodMenu />, href: "menu" },
  { label: "About Us", icon: <RiInformationLine />, href: "about" },
  { label: "Contact", icon: <RiPhoneLine />, href: "" },
  { label: "Order Now", icon: <RiShoppingBasket2Line />, href: "" },
];

const socialIcons = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/_fierygrillss" },
  { icon: <IoMailOutline />, href: "mailto:fierygrills@gmail.com" },
  { icon: <FaYoutube />, href: "#" },
];

export default function Footer() {
  const router = useRouter(); // ✅ Replaces useNavigate
  const { mutate: addSubscribe } = useAddSubcriber();
  const [subscriberData, setSubscriberData] = useState("");

  // Regex validators
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
    <footer className="bg-[#1E1E1E] text-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex justify-center items-center">
          <img src="/assets/logo1.png" className="w-24 h-24 mr-4" alt="Logo" />
        </div>

        {/* Quick Links */}
        <div className="hidden md:block">
          <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {links.map((item, i) => (
              <li key={i}>
                <a
                  onClick={() => {
                    if (item.href) {
                      router.push(`/${item.href}`);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="flex items-center cursor-pointer gap-2 text-gray-300 hover:text-[#EBB03F] transition"
                >
                  {React.cloneElement(item.icon, {
                    className: "text-[#EBB03F]",
                  })}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold">Contact Us</h4>
          <div className="flex items-center gap-2 text-gray-300">
            <IoMailOutline className="text-[#EBB03F]" />
            <a href="mailto:fierygrills@gmail.com" className="cursor-pointer">
              fierygrills@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <RiPhoneLine className="text-[#EBB03F]" />
            <a href="tel:+14373131390" className="cursor-pointer">
              +1 (437) 313-1390
            </a>
          </div>
          <div className="flex gap-3 pt-4">
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

        {/* Newsletter Subscription */}
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
            className="w-full border border-[#EBB03F] text-[#EBB03F] font-medium py-1 rounded-md hover:bg-[#EBB03F] hover:text-[#1E1E1E] transition ease-in-out duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}
