'use client';
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FoodAndPlansBrief() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      {/* Punjabi Menu Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-red-800">Explore Our Punjabi Menu</h2>
          <p className="text-gray-700 text-justify">
            Indulge in the rich and diverse flavors of Punjabi cuisine. From the
            world-famous butter chicken and creamy dal makhani to aromatic
            biryanis and crispy parathas, our dishes are crafted with the finest
            ingredients and traditional spices. Experience the authentic taste of
            Punjab, served with love and passion.
          </p>
          <button
            onClick={() => {
              router.push('/menu');
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}
            className="bg-red-800 hover:bg-red-900 text-white font-bold px-6 py-3 rounded-full inline-flex items-center transition duration-300"
          >
            View Menu <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="/assets/home/food/a1.jpeg" 
            alt="Punjabi dish with curry in a metal bowl alongside naan bread and rice" 
            className="rounded-lg w-full h-60 md:h-120 object-cover shadow-md"
          />
        </div>
      </div>

      {/* Meal Plans Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-red-800">Flexible Meal Plans</h2>
          <p className="text-gray-700 text-justify">
            Choose from daily, weekly, or monthly tiffin plans, each designed to deliver fresh, delicious, and nutritious meals 
            straight to your door. For those who want to try our service first, we also provide testing food options—perfect for 
            a one-day trial to experience the quality of our meals before committing to a full plan. Customizable options are available 
            to suit your preferences and dietary needs, ensuring a personalized dining experience that meets your lifestyle.
          </p>
          <button
            onClick={() => {
              router.push('/plans');
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}
            className="bg-red-800 hover:bg-red-900 text-white font-bold px-6 py-3 rounded-full inline-flex items-center transition duration-300"
          >
            View Plans <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="/assets/home/food/h1.png" 
            alt="Various healthy meal prep bowls with vegetables and proteins" 
            className="rounded-lg w-full h-60 md:h-120 object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
