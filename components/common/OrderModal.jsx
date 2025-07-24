/* eslint-disable no-unused-vars */
"use client";
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
  const [showVendorWarning, setShowVendorWarning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mutate: addParticipant } = useOrderParticipant();

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    const { firstName, lastName, email, phoneNumber, countryCode } = formData;
    if (!firstName || !lastName || !email || !phoneNumber) {
      toast.error("Please fill out all fields");
      return;
    }
    if (!countryCode) {
      toast.error("Please select your country code");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    try {
      const response = await axios.post("https://myportal.premiumasp.net/api/WebCustomerInfos/Create", {
        ...formData,
        Vendor: "FG",
        mobileNo: phoneNumber.toString(),
      });

      const message = response?.data?.message;
      const vendor = response?.data?.customer?.vendor;

      if (vendor !== "FG" && message === "User already exists") {
        onClose();
        setShowVendorWarning(true);
        return;
      }

      if (vendor === "FG" && message === "User already exists") {
        toast.success("You are already exist in our kitchen");
        return;
      }

      if (message === "Activate Your Email") {
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

  return (
    <>
      {/* Already Registered Modal */}
      {showVendorWarning && (
        <div className="fixed inset-0 bg-black/40 z-[9999] flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-md">
            <h3 className="text-lg font-bold text-red-700 mb-2">Already Registered</h3>
            <p className="text-gray-600 mb-4 text-sm">
              You’re already registered with another kitchen. Contact support if you'd like to switch.
            </p>
            <button
              className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 transition"
              onClick={() => setShowVendorWarning(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-center text-red-800 mb-2">Create Your Account</h2>
                <p className="text-sm text-gray-600 text-center mb-6">
                  Sign up to access our order section.
                </p>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded focus:ring-2 ring-red-200"
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded focus:ring-2 ring-red-200"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded focus:ring-2 ring-red-200"
                        />
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
                          inputClass="!w-full !text-sm"
                          containerClass="!w-full"
                          inputStyle={{ width: "100%" }}
                        />

                        <div className="flex justify-end gap-2 pt-2">
                          <motion.button
                            onClick={onClose}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 text-gray-500 hover:text-gray-800"
                          >
                            Cancel
                          </motion.button>
                          <motion.button
                            onClick={handleRegister}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            disabled={
                              !formData.firstName ||
                              !formData.lastName ||
                              !formData.email ||
                              !formData.phoneNumber
                            }
                            className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900 transition disabled:opacity-50"
                          >
                            Register
                          </motion.button>
                        </div>

                        <p className="text-sm text-center pt-4 text-gray-500">
                          Already a user?{" "}
                          <a
                            href="https://mealplan-web.vercel.app/#/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-800 font-medium hover:underline"
                          >
                            Login
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      className="text-center py-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
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
                      <h3 className="text-xl font-bold text-gray-800 mb-1">Thank You!</h3>
                      <p className="text-gray-600">We’ve received your info and will contact you soon.</p>
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
