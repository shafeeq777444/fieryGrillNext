/* eslint-disable no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.jsx";
import SendButton from "../components/Buttons/PhoneButton.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import OrderModal from "@/components/common/OrderModal";
import SplashScreen from "@/components/common/SplashScreen";

const MainLayout = () => {
    const location = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // Only run splash on home page "/"
        if (location.pathname === "/") {
            const timer = setTimeout(() => {
                setShowSplash(false);
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setShowSplash(false); // skip splash immediately on other routes
        }
    }, [location.pathname]);

    if (showSplash && location.pathname === "/") return <SplashScreen />;

    return (
        <>
            <Navbar onClick={handleOpenModal}></Navbar>
            <OrderModal isOpen={isModalOpen} onClose={handleCloseModal} />

            <Outlet />
            <motion.div
                className="fixed bottom-8 left-8 flex p-2 flex-col gap-6 z-30  "
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
            >
                <SendButton
                    onClick={() => {
                        window.location.href = "tel:+14373131390";
                    }}
                    text="Call us"
                    color="#000000"
                    icon={<Phone size={20} className="text-white" />}
                />
                <SendButton
                    onClick={() => {
                        const phone = "14373131390";
                        const message = encodeURIComponent(
                            "Hey Fiery Grills! I'm interested in ordering your delicious food."
                        );
                        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                    }}
                    text="Whatsapp"
                    color="#1E1E1E"
                    icon={<FaWhatsapp size={20} className="text-white" />}
                />
            </motion.div>
            {/* <NewsLetter/> */}
            <Footer />
        </>
    );
};

export default MainLayout;
