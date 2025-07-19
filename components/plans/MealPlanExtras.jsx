import React from "react";
import { Instagram, Phone } from "lucide-react";

const SubscriptionFeatures = () => {
  const features = [
    {
      title: "Add-on (6 days a week extra)",
      description: "+$20 only",
      Icon: "https://img.icons8.com/?size=100&id=15455&format=png&color=000000",
    },
    {
      title: "Special Diets",
      description: "Available on request",
      Icon: "https://img.icons8.com/?size=100&id=Uw1fqdA1AmDw&format=png&color=000000",
    },
    {
      title: "Group of 4 Subscriptions",
      description: "10% Discount",
      Icon: "https://img.icons8.com/?size=100&id=SIP96LebeRnv&format=png&color=000000",
    },
  ];

  return (
    <section className="bg-white pt-14">
      <div className="max-w-6xl mx-auto">

         <div className="text-center mb-8">
          <p className="text-gray-700 text-lg mb-2 font-medium">
            We deliver Monday through Friday, with optional Saturday delivery
          </p>
          <p className="text-gray-600 text-base">
            Additional $5 fee applies for Saturday delivery
          </p>
        </div>

       

        
      </div>
    </section>
  );
};

export default SubscriptionFeatures;