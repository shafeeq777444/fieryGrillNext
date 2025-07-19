import React from 'react'

const CallActions = () => {
  return (
    <section className=" p-4 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12 shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want Something Specific?
            </h2>
            <p className="text-gray-700 mb-6">
              We understand that everyone has unique preferences and dietary
              requirements. Our customization option allows you to tailor your
              tiffin exactly the way you like it.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5 mr-2">
                  <i className="ri-check-line" />
                </div>
                <span className="text-gray-700">
                  Choose your favorite Punjabi dishes
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5 mr-2">
                  <i className="ri-check-line" />
                </div>
                <span className="text-gray-700">
                  Specify spice levels according to your taste
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5 mr-2">
                  <i className="ri-check-line" />
                </div>
                <span className="text-gray-700">
                  Accommodate dietary restrictions and allergies
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5 mr-2">
                  <i className="ri-check-line" />
                </div>
                <span className="text-gray-700">
                  Create a rotating menu of your favorites
                </span>
              </li>
            </ul>
            <button className="bg-primary text-white px-8 py-3 rounded-button text-lg font-medium hover:bg-primary/90 transition whitespace-nowrap">
              Customize Your Plan
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/about/about-img4.jpg"
              alt="Customize Your Tiffin"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CallActions
