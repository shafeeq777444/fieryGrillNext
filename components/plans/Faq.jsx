import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    
    {
      question: 'Can I skip a delivery?',
      answer:
        'Yes, you can skip a delivery by notifying us at least 48 hours in advance. Simply log into your account or call our customer service to arrange this.',
    },
    {
      question: 'How do you handle food allergies?',
      answer:
        'We take food allergies very seriously. You can specify any allergies or dietary restrictions when you sign up, and our chefs will ensure your meals are prepared accordingly. However, all meals are prepared in the same kitchen, so cross-contamination is possible.',
    },
    {
      question: 'What areas do you deliver to?',
      answer:
        'We currently deliver to all major areas within a 15-mile radius of our kitchen. You can check if your location is covered by entering your zip code on our delivery page.',
    },
    {
      question: 'How do I heat the food?',
      answer:
        'Our meals come in microwave-safe containers. Simply heat for 2-3 minutes or transfer to a pot and heat on the stove. Detailed heating instructions are included with each delivery.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our tiffin service.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <i
                    className={`ri-arrow-down-s-line text-gray-500 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer Section with Smooth Fade/Slide Down */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden px-4 py-2 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
