"use client";
import React, { useState } from "react";
import { RiInformationLine, RiPhoneLine, RiShoppingBasket2Line, RiTiktokLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useAddSubcriber } from "../../services/Hooks/useSubscribers";
import toast from "react-hot-toast";
import { useGetContactDetails } from "@/services/Hooks/useContactDetails";
import OrderModal from "../common/OrderModal";

const customerLinks = [
    { label: "Privacy Policy", href: "" },
    { label: "Terms & Conditions", href: "" },
    { label: "Shipping Info", href: "" },
    { label: "Returns & Refunds", href: "" },
    { label: "FAQs", href: "faq" },
];

export default function Footer() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
    const handleSelectPlan = () => {
        setOrderModalOpen(true);
    };
    const { data } = useGetContactDetails();
    console.log(data, "--soc data");
    const socialIcons = [
        { icon: <FaFacebookF />, href: data?.facebook },
        { icon: <FaInstagram />, href: data?.instagram },
        { icon: <IoMailOutline />, href: `mailto:${data?.email}` },
        { icon: <RiTiktokLine />, href: data?.tiktok },
    ];
    const links = [
        { label: "Menu", icon: <BiSolidFoodMenu />, href: "menu" },
        { label: "About Us", icon: <RiInformationLine />, href: "about" },
        { label: "Contact", icon: <RiPhoneLine />, href: `tel:${data?.contactNumber}` },
        {
            label: "Order Now",
            icon: <RiShoppingBasket2Line />,
            onClick: handleSelectPlan, // 🔥 use onClick instead of href
        },
    ];
    const router = useRouter();
    const { mutate: addSubscribe } = useAddSubcriber();
    const [subscriberData, setSubscriberData] = useState("");

    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

    const handleSubscribeButton = async () => {
        try{
            const input = subscriberData.trim();
            if (!isValidEmail(input)) {
                toast.error("Enter a valid email");
                return;
            }
    
            const result=await addSubscribe({ data: input, vendor: "FG" });

            // Only show success toast and clear input if API call succeeds
            setSubscriberData("");
            if(!result.response.data.message==="Subscriber already exists"){
                toast.success("Thanks for your subscription!");
            }
        }catch(err){
            console.log(err);
            // toast.error("Subscription failed. Please try again.");
        }
    };
    

    return (
        <>
            <footer className="bg-[#1E1E1E] text-white font-poppins border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
                    {/* Logo & Social */}
                    <div className="space-y-4">
                        <img src="/assets/logo1.png" className="w-20 h-20" alt="Logo" />
                        <p className="text-sm text-gray-400">
                            <span className="text-[#EBB03F] font-semibold text-base md:text-lg">Fiery Grills</span>
                            <span className="opacity-70 text-xs md:text-sm ml-1">
                                – Authentic Punjabi Flavors, Made with Love Just Like Home
                            </span>
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
                                    {item.href?.startsWith("tel:") ? (
                                        <a
                                            href={item.href}
                                            className="flex items-center gap-2 hover:text-[#EBB03F] transition"
                                        >
                                            {React.cloneElement(item.icon, {
                                                className: "text-[#EBB03F]",
                                            })}
                                            {item.label}
                                        </a>
                                    ) : item.href?.startsWith("mailto:") ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 hover:text-[#EBB03F] transition"
                                        >
                                            {React.cloneElement(item.icon, {
                                                className: "text-[#EBB03F]",
                                            })}
                                            {item.label}
                                        </a>
                                    ) : item.onClick ? (
                                        <div
                                            onClick={item.onClick}
                                            className="flex items-center cursor-pointer gap-2 hover:text-[#EBB03F] transition"
                                        >
                                            {React.cloneElement(item.icon, {
                                                className: "text-[#EBB03F]",
                                            })}
                                            {item.label}
                                        </div>
                                    ) : (
                                        <div
                                            onClick={() => {
                                                router.push(`/${item.href}`);
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            }}
                                            className="flex items-center cursor-pointer gap-2 hover:text-[#EBB03F] transition"
                                        >
                                            {React.cloneElement(item.icon, {
                                                className: "text-[#EBB03F]",
                                            })}
                                            {item.label}
                                        </div>
                                    )}
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
                            <a href={`mailto:${data?.email}`}>{data?.email}</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <RiPhoneLine className="text-[#EBB03F]" />
                            <a href={`tel:${data?.contactNumber}`}>{data?.contactNumber}</a>
                        </div>
                    </div>

                    {/* Subscription */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Stay Updated</h3>
                        <p className="text-gray-300 text-sm">Get menu updates & exclusive offers</p>
                        <input
                            type="text"
                            value={subscriberData}
                            onChange={(e) => setSubscriberData(e.target.value)}
                            placeholder="Enter your email"
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
            <OrderModal isOpen={orderModalOpen} onClose={() => setOrderModalOpen(false)} />
        </>
    );
}
