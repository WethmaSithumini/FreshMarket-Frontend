import React from "react";
import { 
  Apple, 
  Carrot, 
  Wheat, 
  Milk, 
  Egg,
  Flower2,
  TreePine,
  Leaf
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook

const categories = [
  {
    icon: Apple,
    title: "Fresh Fruits",
    description: "Seasonal fruits picked at peak ripeness",
    products: ["Apples", "Oranges", "Bananas", "Berries", "Grapes"],
    color: "text-red-600 bg-red-100",
    count: "200+ varieties"
  },
  {
    icon: Carrot,
    title: "Vegetables",
    description: "Farm-fresh vegetables harvested daily",
    products: ["Tomatoes", "Carrots", "Lettuce", "Peppers", "Onions"],
    color: "text-orange-600 bg-orange-100",
    count: "150+ varieties"
  },
  {
    icon: Wheat,
    title: "Grains & Cereals",
    description: "Wholesome grains and cereals",
    products: ["Rice", "Wheat", "Corn", "Oats", "Barley"],
    color: "text-yellow-600 bg-yellow-100",
    count: "50+ varieties"
  },
  {
    icon: TreePine,
    title: "Nuts & Seeds",
    description: "Premium nuts and healthy seeds",
    products: ["Almonds", "Walnuts", "Sunflower Seeds", "Pumpkin Seeds", "Cashews"],
    color: "text-brown-600 bg-amber-50",
    count: "35+ varieties"
  },  
];

export default function CropCategories() {
  const navigate = useNavigate(); // ✅ initialize hook
    
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover fresh, high-quality products directly from local farmers in your area
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 cursor-pointer rounded-lg p-6"
              >
                <div className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="text-sm text-green-600 font-medium">{category.count}</div>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Popular items:</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {category.products.slice(0, 3).map((product, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* ✅ Button navigates to All Products */}
                  <button
  className="w-full border border-gray-300 text-gray-700 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 px-4 py-2 rounded-md"
  onClick={() => navigate(`/all-products?category=${category.title}`)}
>
  Browse {category.title}
</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ✅ View All Products Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate("/all-products")}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-md"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
