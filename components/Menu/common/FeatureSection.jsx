import { Truck, Clock, Leaf } from "lucide-react";

export default function FeatureSection() {
  return (
    <div className="w-full -mt-2   py-16 bg-white ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 scale-75">
          
          {/* Timely Delivery Feature */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <Truck className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
            <p className="text-gray-600">Delivered fresh at your doorstep</p>
          </div>
          
          {/* Fresh Ingredients Feature */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">Quality ingredients for every meal</p>
          </div>
          
          {/* Weekly Menu Feature */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Weekly Menu</h3>
            <p className="text-gray-600">New menu every week</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}