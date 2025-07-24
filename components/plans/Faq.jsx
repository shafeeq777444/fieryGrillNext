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
    <section className="pt-4 pb-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our tiffin service.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl shadow-sm transition-all duration-300 bg-white hover:shadow-md`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-5 text-left bg-white rounded-xl group focus:outline-none focus:ring-0 outline-none ring-0"
                  aria-expanded={isOpen}
                  tabIndex={0}
                  style={{ boxShadow: 'none' }}
                >
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-primaryDark transition-colors duration-200">
                    {faq.question}
                  </span>
                  {/* Animated SVG Arrow */}
                  <span className={`ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-primaryDark" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                  </span>
                </button>
                {/* Answer Section with Smooth Fade/Slide Down */}
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-5 pt-2 bg-gray-50 border-t border-gray-100 animate-fade-in">
                    <p className="text-gray-700 text-base leading-relaxed">{faq.answer}</p>
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
