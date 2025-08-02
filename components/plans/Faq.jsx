import { useGetFaqs } from '@/services/Hooks/useFaqs';
import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const {data, isLoading, error} = useGetFaqs();
  console.log(data, "data");

  // Use the fetched data or fallback to empty array
  const faqs = data || [];

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
          {isLoading ? (
            // Skeleton loading state
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-xl shadow-sm bg-white animate-pulse">
                <div className="flex items-center justify-between w-full p-5">
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded-md w-3/4"></div>
                  </div>
                  <div className="ml-4">
                    <div className="h-6 w-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-600">Error loading FAQs. Please try again later.</p>
            </div>
          ) : faqs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No FAQs available at the moment.</p>
            </div>
          ) : (
            faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq._id || index}
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
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
