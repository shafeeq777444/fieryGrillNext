import React, { useState } from "react";
import { useAddSubcriber } from "../../services/Hooks/useSubscribers";
import toast from "react-hot-toast";

// Simple email regex for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NewsLetter = () => {
  const { mutate: addSubscribe, isLoading } = useAddSubcriber();
  const [subscriberData, setSubscriberData] = useState("");

  const handleSubscribeButton = () => {
    const trimmedData = subscriberData.trim();

    if (!emailRegex.test(trimmedData)) {
      toast.error("Please enter a valid email address");
      return;
    }

    addSubscribe(
      { data: trimmedData, vendor: "fieryGrills" },
      {
        onSuccess: () => {
          toast.success("Thanks for your subscription!");
          setSubscriberData(""); // Clear input on success
        },
        onError: (error) => {
          console.error(error);
          toast.error(error?.response?.data?.message || "Something went wrong. Please try again.");
        },
      }
    );
  };

  return (
    <div>
      <div className="bg-gray-50 rounded-lg p-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Tiffin Community</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Subscribe to receive weekly menus, updates on special festive meals, and exclusive discounts.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            value={subscriberData}
            onChange={(e) => setSubscriberData(e.target.value)}
            className="flex-grow px-4 py-3 text-slate-800 rounded-lg border border-gray-300 focus:outline-none"
          />
          <button
            onClick={handleSubscribeButton}
            disabled={isLoading}
            className="bg-red-800 hover:bg-amber-900 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          We respect your privacy and will never share your information.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
