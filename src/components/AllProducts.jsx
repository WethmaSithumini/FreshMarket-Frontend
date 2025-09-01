import React, { useState, useEffect } from 'react'; 
import { Leaf, ShoppingCart, Star, MapPin, Filter, Search, ArrowLeft, Heart } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const AllProducts = ({ onNavigate }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Update selectedCategory if URL changes
  useEffect(() => {
    const categoryFromURL = queryParams.get('category') || 'all';
    setSelectedCategory(categoryFromURL);
  }, [location.search]);

  const categories = [
    { id: 'all', name: 'All Products', icon: '🌱' },
    { id: 'fruits', name: 'Fruits', icon: '🍎' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥕' },
    { id: 'grains', name: 'Grains', icon: '🌾' },
    { id: 'nuts-seeds', name: 'Nuts & Seeds', icon: '🥜' }
  ];

  const products = [
    // Fruits
{
  id: 1,
  name: 'Organic Ambarella',
  category: 'fruits',
  price: 'Rs. 250',
  unit: 'per kg',
  rating: 4.8,
  reviews: 120,
  farmer: 'Galle Fruit Farm',
  location: 'Galle',
  description: 'Fresh, tangy organic ambarella from local farms',
  tags: ['Organic', 'Local', 'Tangy'],
  emoji: '🥭',
  bgColor: 'from-yellow-100 to-green-200',
  circleColor: 'bg-green-400'
},
{
  id: 2,
  name: 'Fresh Pineapples',
  category: 'fruits',
  price: 'Rs. 350',
  unit: 'per fruit',
  rating: 4.9,
  reviews: 95,
  farmer: 'Dambulla Pine Farm',
  location: 'Dambulla',
  description: 'Juicy, sweet pineapples freshly harvested',
  tags: ['Sweet', 'Local', 'Fresh'],
  emoji: '🍍',
  bgColor: 'from-yellow-100 to-orange-200',
  circleColor: 'bg-yellow-500'
},
{
  id: 3,
  name: 'Organic Bananas',
  category: 'fruits',
  price: 'Rs. 200',
  unit: 'per dozen',
  rating: 4.7,
  reviews: 230,
  farmer: 'Matale Banana Plantation',
  location: 'Matale',
  description: 'Sweet and naturally ripened organic bananas',
  tags: ['Organic', 'Sweet', 'Energy'],
  emoji: '🍌',
  bgColor: 'from-yellow-100 to-orange-200',
  circleColor: 'bg-yellow-400'
},
{
  id: 4,
  name: 'Fresh Papaya',
  category: 'fruits',
  price: 'Rs. 400',
  unit: 'per fruit',
  rating: 4.8,
  reviews: 150,
  farmer: 'Hambantota Tropical Farm',
  location: 'Hambantota',
  description: 'Ripe, succulent papayas packed with vitamins',
  tags: ['Tropical', 'Fresh', 'Sweet'],
  emoji: '🥭',
  bgColor: 'from-orange-100 to-pink-200',
  circleColor: 'bg-orange-500'
},

// Vegetables
{
  id: 5,
  name: 'Organic Tomatoes',
  category: 'vegetables',
  price: 'Rs. 300',
  unit: 'per kg',
  rating: 4.9,
  reviews: 130,
  farmer: 'Nuwara Eliya Green Farm',
  location: 'Nuwara Eliya',
  description: 'Fresh, vine-ripened tomatoes perfect for cooking',
  tags: ['Organic', 'Local', 'Fresh'],
  emoji: '🍅',
  bgColor: 'from-red-100 to-red-200',
  circleColor: 'bg-red-500'
},
{
  id: 6,
  name: 'Fresh Gotukola',
  category: 'vegetables',
  price: 'Rs. 150',
  unit: 'per bunch',
  rating: 4.7,
  reviews: 90,
  farmer: 'Kandy Herbal Farm',
  location: 'Kandy',
  description: 'Tender gotukola leaves, great for salads and juices',
  tags: ['Local', 'Healthy', 'Fresh'],
  emoji: '🥬',
  bgColor: 'from-green-100 to-emerald-200',
  circleColor: 'bg-green-500'
},
{
  id: 7,
  name: 'Organic Carrots',
  category: 'vegetables',
  price: 'Rs. 250',
  unit: 'per bunch',
  rating: 4.8,
  reviews: 145,
  farmer: 'Root Vegetable Farm',
  location: 'Vavuniya',
  description: 'Sweet, crunchy organic carrots with tops',
  tags: ['Organic', 'Sweet', 'Vitamin A'],
  emoji: '🥕',
  bgColor: 'from-orange-100 to-yellow-200',
  circleColor: 'bg-orange-500'
},
{
  id: 8,
  name: 'Fresh Broccoli',
  category: 'vegetables',
  price: 'Rs. 350',
  unit: 'per head',
  rating: 4.5,
  reviews: 76,
  farmer: 'Green Crown Farm',
  location: 'Nuwara Eliya',
  description: 'Fresh, crisp broccoli crowns',
  tags: ['Nutritious', 'Fresh', 'Local'],
  emoji: '🥦',
  bgColor: 'from-green-100 to-emerald-200',
  circleColor: 'bg-green-600'
},

// Grains
{
  id: 9,
  name: 'Organic Red Rice',
  category: 'grains',
  price: 'Rs. 300',
  unit: 'per kg',
  rating: 4.7,
  reviews: 203,
  farmer: 'Anuradhapura Grain Farm',
  location: 'Anuradhapura',
  description: 'Premium organic red rice, rich in fiber',
  tags: ['Organic', 'Fiber', 'Healthy'],
  emoji: '🌾',
  bgColor: 'from-amber-100 to-yellow-200',
  circleColor: 'bg-amber-500'
},
{
  id: 10,
  name: 'Samba Rice',
  category: 'grains',
  price: 'Rs. 280',
  unit: 'per kg',
  rating: 4.6,
  reviews: 189,
  farmer: 'Polonnaruwa Rice Farm',
  location: 'Polonnaruwa',
  description: 'Wholesome samba rice, ideal for daily meals',
  tags: ['Local', 'Nutritious', 'Staple'],
  emoji: '🍚',
  bgColor: 'from-amber-100 to-orange-200',
  circleColor: 'bg-amber-600'
},
{
  id: 11,
  name: 'Kurakkan Flour',
  category: 'grains',
  price: 'Rs. 350',
  unit: 'per kg',
  rating: 4.8,
  reviews: 134,
  farmer: 'Ratnapura Millet Farm',
  location: 'Ratnapura',
  description: 'Nutritious kurakkan flour for traditional dishes',
  tags: ['Healthy', 'Local', 'Gluten-Free'],
  emoji: '🥣',
  bgColor: 'from-yellow-100 to-amber-200',
  circleColor: 'bg-yellow-600'
},

// Nuts & Seeds
{
  id: 12,
  name: 'Raw Cashews',
  category: 'nuts-seeds',
  price: 'Rs. 1200',
  unit: 'per kg',
  rating: 4.9,
  reviews: 267,
  farmer: 'Puttalam Cashew Farm',
  location: 'Puttalam',
  description: 'Premium raw cashews, perfect for snacking',
  tags: ['Raw', 'Protein', 'Healthy Fats'],
  emoji: '🥜',
  bgColor: 'from-amber-100 to-brown-200',
  circleColor: 'bg-amber-700'
},
{
  id: 13,
  name: 'Pumpkin Seeds',
  category: 'nuts-seeds',
  price: 'Rs. 400',
  unit: 'per 500g',
  rating: 4.6,
  reviews: 112,
  farmer: 'Kurunegala Seed Farm',
  location: 'Kurunegala',
  description: 'Roasted pumpkin seeds, nutritious and crunchy',
  tags: ['Roasted', 'Healthy', 'Snack'],
  emoji: '🎃',
  bgColor: 'from-yellow-100 to-orange-200',
  circleColor: 'bg-yellow-500'
},
{
  id: 14,
  name: 'Organic Walnuts',
  category: 'nuts-seeds',
  price: 'Rs. 1500',
  unit: 'per kg',
  rating: 4.8,
  reviews: 198,
  farmer: 'Badulla Walnut Farm',
  location: 'Badulla',
  description: 'Fresh organic walnuts, rich in omega-3',
  tags: ['Organic', 'Omega-3', 'Brain Food'],
  emoji: '🌰',
  bgColor: 'from-amber-100 to-brown-200',
  circleColor: 'bg-amber-800'
}

  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => onNavigate('cover')}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">FreshMarket</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => onNavigate('cover')} className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">Home</button>
              <button className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">Categories</button>
              <button className="text-emerald-600 font-medium">Products</button>
              <button className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">Farmers</button>
              <button className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">About</button>
              <button className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">Contact</button>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              <button 
                onClick={() => onNavigate('login')}
                className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-200"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-lg text-gray-600">Discover fresh, local produce from trusted farmers</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products or farmers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-emerald-500 text-white shadow-md transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Product Image */}
              <div className={`h-48 bg-gradient-to-br ${product.bgColor} flex items-center justify-center relative`}>
                <div className={`w-24 h-24 ${product.circleColor} rounded-full flex items-center justify-center`}>
                  <span className="text-3xl">{product.emoji}</span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
                  <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>

                {/* Farmer Info */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{product.farmer}, {product.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-emerald-600">${product.price}</span>
                    <span className="text-sm text-gray-500 ml-1">{product.unit}</span>
                  </div>
                  <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-200 flex items-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Showing {sortedProducts.length} of {products.length} products
            {selectedCategory !== 'all' && (
              <span> in {categories.find(cat => cat.id === selectedCategory)?.name}</span>
            )}
          </p>
        </div>
      </main>
    </div>
  );
};

export default AllProducts;