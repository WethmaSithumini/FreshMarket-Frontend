import React from "react";
import { ArrowRight, CheckCircle, Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook

const features = [
  "Fresh produce straight from farm",
  "Quality you can trust, every time",
  "Support small scale farmers",
  "Organic options available"
];

export default function CTA() {
  const navigate = useNavigate(); // ✅ initialize hook

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-300 fill-current" />
              ))}
              <span className="text-white font-semibold ml-2">4.9/5 from 10,000+ customers</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start Shopping Fresh Today!
          </h2>
          
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of families who choose fresh, local produce delivered straight from the farm to their table
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-12 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Navigate to Login.jsx */}
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-md flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Start Shopping
            </button>
            
            {/* Navigate to AllProducts.jsx */}
            <button
              onClick={() => navigate("/all-products")}
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-md flex items-center gap-2"
            >
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-12 text-green-100 text-center">
            <p className="text-sm text-gray-300">
             © 2025 FreshMarket. All rights reserved. | Call us:011 234 5678<span className="font-semibold text-white"></span> | Email: <span className="font-semibold text-white">hello@freshmarket.com</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}