/* eslint-disable no-unused-vars */
"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import toast from "react-hot-toast";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useOrderParticipant } from "@/services/Hooks/useOrderPartipant";

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

const OrderModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        countryCode: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { mutate: addParticipant } = useOrderParticipant();

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleOpenApp = async () => {
        console.log(formData,"--formData")
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
            toast.error("Please fill out all fields");
            return;
        }
        if(!formData.countryCode ){
            toast.error("Please select your country code")
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
            console.log(response.data);

            // different  vender with login ✅
            if (response?.data?.customer?.vendor !== "FG" && response?.data?.message == "User already exists") {
                toast.error(
                    "Looks like you're already registered with another kitchen. If you'd like to switch, feel free to contact our support."
                );
                return;
            }

            // same vender login
            console.log(response.data);
            if (response?.data?.customer?.vendor === "FG" && response?.data?.message == "User already exists") {
                toast.success("You are already exist in our kitchen");
                const queryParams = new URLSearchParams({
                    email: formData.email,
                    phone: formData.phoneNumber,
                    countryCode:formData.countryCode,
                    vendor: "FG",
                });

                let url = "https://mealplan-web.vercel.app/#/login?" + queryParams.toString();
                const tempWindow = window.open("", "_blank");
                if (tempWindow) {
                    tempWindow.location.href = url;
                } else {
                    window.location.href = url;
                }
                return;
            }

            if (response?.data?.message == "Activate Your Email") {
                toast.success("Activate Your Email");
                return;
            }
            // register new user (not exist any vendor)✅
            toast.success("You have sent an email");
            setIsSubmitted(true);
            setTimeout(() => {
                onClose();
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "",countryCode: "", });
                }, 300);
            }, 2000);
        } catch (err) {
            toast.error("Something went wrong!");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center p-4 z-50"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) onClose();
                    }}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <div className="flex justify-start gap-4 items-center mb-4">
                                <h2 className="text-2xl font-bold text-red-800">Join Punjabi Fiery Grill</h2>
                            </div>

                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <p className="mb-6 text-gray-600 text-sm">
                                            Enter your details to access our order section
                                        </p>
                                        <div className="space-y-4">
                                            <div>
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                    htmlFor="firstName"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                                    placeholder="Your First Name"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                    htmlFor="lastName"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                                    placeholder="Your Last Name"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                    htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                                    placeholder="your.email@example.com"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                    htmlFor="phoneNumber"
                                                >
                                                    Phone Number
                                                </label>
                                               <PhoneInput
  country={"ca"}
  value={formData.countryCode + formData.phoneNumber} // Combine both to display full input
  onChange={(value, data) => {
    const fullNumber = value.replace(/\D/g, ""); // Remove non-digits
    const dialCode = data.dialCode;

    const localNumber = fullNumber.startsWith(dialCode)
      ? fullNumber.slice(dialCode.length)
      : fullNumber;

    setFormData((prev) => ({
      ...prev,
      phoneNumber: localNumber,             // 🟢 Just the number (e.g., "9876543210")
      countryCode: `+${dialCode}`,          // 🟢 Just the code (e.g., "+91")
    }));
  }}
  inputProps={{
    name: "phone",
    required: true,
  }}
  inputClass="!w-full !text-sm"
  containerClass="!w-full"
  inputStyle={{ width: "100%" }}
/>
                                            </div>

                                            <div className="flex justify-end">
                                                <motion.button
                                                    type="button"
                                                    onClick={onClose}
                                                    className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Cancel
                                                </motion.button>
                                                <motion.button
                                                    type="button"
                                                    onClick={handleOpenApp}
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
                                                    Submit
                                                </motion.button>
                                            </div>
                                        </div>
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
    );
};

export default OrderModal;
