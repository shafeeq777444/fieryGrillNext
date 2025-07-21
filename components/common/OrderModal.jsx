/* eslint-disable no-unused-vars */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useOrderParticipant } from "@/services/Hooks/useOrderPartipant";
import { Player } from "@lottiefiles/react-lottie-player";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    exit: {
        scale: 0.8,
        opacity: 0,
        y: 20,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};

const TABS = ["Register", "Log In"];

const OrderModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState("Register");
    const [showVendorWarning, setShowVendorWarning] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        countryCode: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { mutate: addParticipant } = useOrderParticipant();
    const loginTimeoutRef = useRef();

    // When Log In tab is selected, open Google in new tab after 2 seconds (no overlay)
    useEffect(() => {
        if (activeTab === "Log In") {
            loginTimeoutRef.current = setTimeout(() => {
                onClose();
                window.open("https://mealplan-web.vercel.app/#/login", "_blank");
            }, 2000);
           
        }
        return () => clearTimeout(loginTimeoutRef.current);
    }, [activeTab]);

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRegister = async () => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
            toast.error("Please fill out all fields");
            return;
        }
        if (!formData.countryCode) {
            toast.error("Please select your country code");
            return;
        }
        if (!isValidEmail(formData.email)) {
            toast.error("Please enter a valid email");
            return;
        }
        const mobileNo = formData.phoneNumber.toString();
        try {
            const response = await axios.post("https://myportal.premiumasp.net/api/WebCustomerInfos/Create", {
                ...formData,
                Vendor: "FG",
                mobileNo,
            });
            if (response?.data?.customer?.vendor !== "FG" && response?.data?.message === "User already exists") {
                onClose()
                setShowVendorWarning(true);
                return;
            }
            if (response?.data?.customer?.vendor === "FG" && response?.data?.message === "User already exists") {
                toast.success("You are already exist in our kitchen");
                return;
            }
            if (response?.data?.message === "Activate Your Email") {
                toast.success("Activate Your Email");
                return;
            }
            toast.success("You have sent an email");
            setIsSubmitted(true);
            setTimeout(() => {
                onClose();
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phoneNumber: "",
                        countryCode: "",
                    });
                }, 300);
            }, 2000);
        } catch (err) {
            toast.error("Something went wrong!");
        }
    };


    // Reset form when switching tabs
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            countryCode: "",
        });
        setIsSubmitted(false);
    };

    return (
        <>
            {showVendorWarning && (
                <div className="fixed inset-0 bg-black/30 bg-opacity-40 z-[9999] flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
                        <h3 className="text-lg font-bold text-red-800 mb-4">Already Registered</h3>
                        <p className="mb-6 text-gray-700">Looks like you're already registered with another kitchen. If you'd like to switch, feel free to contact our support.</p>
                        <button
                            className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700 transition font-medium"
                            onClick={() => setShowVendorWarning(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) onClose();
                        }}
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden h-140"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6">
                                {/* Tabs */}
                                <div className="flex mb-6 border-b border-gray-200">
                                    {TABS.map((tab) => (
                                        <button
                                            key={tab}
                                            className={`flex-1 py-2 text-lg font-semibold focus:outline-none transition border-b-2 ${
                                                activeTab === tab
                                                    ? "border-red-800 text-red-800 bg-red-50"
                                                    : "border-transparent text-gray-500 hover:text-red-800 hover:bg-red-50"
                                            }`}
                                            onClick={() => handleTabChange(tab)}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                                <AnimatePresence mode="wait">
                                    {!isSubmitted ? (
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <h2 className="text-2xl font-bold text-red-800 mb-2 text-center">
                                                {activeTab === "Register" ? "Create Your Account" : "Log In to Your Account"}
                                            </h2>
                                            <p className="mb-6 text-gray-600 text-sm text-center">
                                                {activeTab === "Register"
                                                    ? "Sign up to access our order section."
                                                    : "Prepare for launch! We’ll take you directly to our vendor app"}
                                            </p>
                                            {activeTab === "Log In" && (
                                                <div className="flex justify-center mb-4">
                                                    <Player
                                                        autoplay
                                                        loop
                                                        src="/order-now-lotties/Rocket in space.json" // Path relative to public/
                                                        style={{ width: "100%", height: "60%" }}
                                                    />
                                                </div>
                                            )}
                                            {activeTab === "Register" && (
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                                            First Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            value={formData.firstName}
                                                            onChange={handleChange}
                                                            className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                                            placeholder="Your First Name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                                            Last Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            value={formData.lastName}
                                                            onChange={handleChange}
                                                            className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                                            placeholder="Your Last Name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                                            placeholder="your.email@example.com"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                                            Phone Number
                                                        </label>
                                                        <PhoneInput
                                                            country={"ca"}
                                                            value={formData.countryCode + formData.phoneNumber}
                                                            onChange={(value, data) => {
                                                                const fullNumber = value.replace(/\D/g, "");
                                                                const dialCode = data.dialCode;
                                                                const localNumber = fullNumber.startsWith(dialCode)
                                                                    ? fullNumber.slice(dialCode.length)
                                                                    : fullNumber;
                                                                setFormData((prev) => ({
                                                                    ...prev,
                                                                    phoneNumber: localNumber,
                                                                    countryCode: `+${dialCode}`,
                                                                }));
                                                            }}
                                                            inputProps={{ name: "phone", required: true }}
                                                            inputClass="!w-full !text-sm"
                                                            containerClass="!w-full"
                                                            inputStyle={{ width: "100%" }}
                                                        />
                                                    </div>
                                                    <div className="space-y-2 pt-2">
                                                        <div className="flex justify-end">
                                                            <motion.button
                                                                onClick={onClose}
                                                                className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                                                                whileTap={{ scale: 0.95 }}
                                                            >
                                                                Cancel
                                                            </motion.button>
                                                            <motion.button
                                                                onClick={handleRegister}
                                                                className="px-4 py-2 bg-red-800 text-white font-medium rounded hover:bg-red-900"
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                disabled={
                                                                    !formData.firstName ||
                                                                    !formData.lastName ||
                                                                    !formData.email ||
                                                                    !formData.phoneNumber
                                                                }
                                                            >
                                                                Register
                                                            </motion.button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            className="text-center py-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                        >
                                            <motion.div
                                                className="mb-4 text-green-500"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", delay: 0.2 }}
                                            >
                                                <svg
                                                    className="w-16 h-16 mx-auto"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </motion.div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                                            <p className="text-gray-600">We've received your info and will contact you soon.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default OrderModal;
