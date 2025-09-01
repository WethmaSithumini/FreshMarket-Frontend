import React from "react";
import { Star, MapPin, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook

const featuredProducts = [
  {
    id: 1,
    name: "Carrot",
    farmer: "Green Valley Farm",
    location: "Gampaha, Sri Lanka",
    price: "Rs. 450",
    unit: "per kg",
    rating: 4.9,
    reviews: 127,
    image: "🥕",
    description: "Freshly harvested organic carrots, perfect for salads and cooking",
    badges: ["Organic", "Fresh", "Healthy"]
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    farmer: "Berry Patch Farm",
    location: "Nuwara Eliya, Sri Lanka",
    price: "Rs. 1200",
    unit: "per basket",
    rating: 4.8,
    reviews: 89,
    image: "🍓",
    description: "Sweet, juicy strawberries picked this morning",
    badges: ["Seasonal", "Sweet", "Fresh"]
  },
  {
    id: 3,
    name: "Corn",
    farmer: "Sunrise Farm",
    location: "Anuradhapura, Sri Lanka",
    price: "Rs. 350",
    unit: "per dozen",
    rating: 4.9,
    reviews: 203,
    image: "🌽",
    description: "Freshly harvested sweet corn",
    badges: ["Fresh", "Local", "Organic"]
  },
  {
    id: 4,
    name: "Organic Baby Spinach",
    farmer: "Leafy Greens Co.",
    location: "Kandy, Sri Lanka",
    price: "Rs. 400",
    unit: "per bag",
    rating: 4.7,
    reviews: 156,
    image: "🥬",
    description: "Tender baby spinach leaves, perfect for salads",
    badges: ["Organic", "Leafy", "Healthy"]
  },
  {
    id: 5,
    name: "Mango",
    farmer: "Orchard Hills",
    location: "Matale, Sri Lanka",
    price: "Rs. 600",
    unit: "per kg",
    rating: 4.8,
    reviews: 174,
    image: "🥭",
    description: "Juicy, sweet mangoes, perfect for desserts and snacking",
    badges: ["Sweet", "Tropical", "Popular"]
  },
  {
    id: 6,
    name: "Cashew Nuts",
    farmer: "Mountain View Farm",
    location: "Batticaloa, Sri Lanka",
    price: "Rs. 2500",
    unit: "per kg",
    rating: 4.9,
    reviews: 92,
    image: "🥜",
    description: "Premium quality cashew nuts, perfect for snacking and baking",
    badges: ["Nutty", "Healthy", "Gourmet"]
  }
];

export default function FeaturedProducts() {
  const navigate = useNavigate(); // ✅ initialize hook

  const handleNavigateToDetails = (id) => {
    navigate(`/product-details/${id}`); // ✅ pass product ID in route
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked fresh products from our trusted local farmers
          </p>
        </div>

        {/* ✅ Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden rounded-lg"
            >
              <div className="p-6 pb-4">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    {product.badges.map((badge, idx) => (
                      <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300 text-center">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{product.farmer}, {product.location}</span>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-center gap-1 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-800">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-green-600">{product.price}</div>
                    <div className="text-sm text-gray-500">{product.unit}</div>
                  </div>
                </div>
                
                {/* ✅ Navigate to ProductDetails with ID */}
                <button
                  onClick={() => handleNavigateToDetails(product.id)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-4 py-3 rounded-md flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Navigate to AllProducts */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/all-products")}
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-md"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
