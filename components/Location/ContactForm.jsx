"use client";
import { useContactUs } from "@/services/Hooks/useContactUs";
import { useState } from "react";

export const ContactForm = ({ onClose }) => {
    const { mutateAsync, isPending } = useContactUs();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false,
        phoneNumber: false,
    });

    const isFormValid =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.message.trim() !== "" &&
        formData.phoneNumber.trim() !== "";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleBlur = (field) => {
        setTouched((prev) => ({
            ...prev,
            [field]: true,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await mutateAsync(formData);

            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                phoneNumber: "",
                message: "",
            });

            setTouched({
                name: false,
                email: false,
                message: false,
                phoneNumber: false,
            });

            setTimeout(() => {
                onClose();
            }, 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-out">
                <div className="p-6 md:p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Us</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-2"
                            disabled={isSubmitting}
                            aria-label="Close form"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {submitStatus === "success" ? (
                        <div className="text-center py-8 px-4">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6">
                                <svg
                                    className="w-12 h-12 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                            <p className="text-gray-600">We've received your message and will get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur("name")}
                                        required
                                        placeholder="Enter your name"
                                        className={`w-full px-4 py-2.5 text-gray-900 placeholder-gray-400 bg-white border ${
                                            touched.name && !formData.name.trim()
                                                ? "border-red-500"
                                                : "border-gray-300 hover:border-gray-400"
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors`}
                                        disabled={isSubmitting}
                                    />
                                    {touched.name && !formData.name.trim() && (
                                        <p className="mt-1 text-sm text-red-600">Name is required</p>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur("email")}
                                        required
                                        placeholder="Enter your email"
                                        className={`block w-full pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-400 bg-white border ${
                                            touched.email && !formData.email.trim()
                                                ? "border-red-500"
                                                : "border-gray-300 hover:border-gray-400"
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors`}
                                        disabled={isSubmitting}
                                    />
                                    {touched.email && !formData.email.trim() && (
                                        <p className="mt-1 text-sm text-red-600">Email is required</p>
                                    )}
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur("phoneNumber")}
                                        required
                                        placeholder="Enter your phone number"
                                        className={`block w-full pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-400 bg-white border ${
                                            touched.phoneNumber && !formData.phoneNumber.trim()
                                                ? "border-red-500"
                                                : "border-gray-300 hover:border-gray-400"
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors`}
                                        disabled={isSubmitting}
                                    />
                                    {touched.phoneNumber && !formData.phoneNumber.trim() && (
                                        <p className="mt-1 text-sm text-red-600">Phone number is required</p>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Your Message <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur("message")}
                                        required
                                        placeholder="Enter your message"
                                        className={`block w-full px-4 py-2.5 text-gray-900 placeholder-gray-400 bg-white border ${
                                            touched.message && !formData.message.trim()
                                                ? "border-red-500"
                                                : "border-gray-300 hover:border-gray-400"
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors`}
                                        disabled={isSubmitting}
                                    />
                                    {touched.message && !formData.message.trim() && (
                                        <p className="mt-1 text-sm text-red-600">Message is required</p>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-1">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !isFormValid}
                                    className={`w-full py-3.5 px-6 rounded-button font-medium text-sm tracking-wide transition-all duration-200 transform ${
                                        isFormValid
                                            ? "bg-black text-white hover:bg-gray-900 hover:shadow-md active:scale-[0.98]"
                                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    } ${isSubmitting ? "opacity-90" : ""} flex items-center justify-center space-x-2`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="animate-spin h-4 w-4 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                />
                                            </svg>
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>

                                <p className="mt-3 text-xs text-center text-gray-500">
                                    We'll get back to you within 24 hours
                                </p>
                            </div>

                            {submitStatus === "error" && (
                                <p className="text-red-500 text-sm mt-2 text-center">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
