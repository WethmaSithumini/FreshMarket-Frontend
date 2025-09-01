import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Shield,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  User,
  Award,
  Clock,
  Check,
  Search
} from 'lucide-react';

const productsData = {
  1: {
    id: 1,
    name: 'Fresh Organic Carrots',
    description: 'Premium quality organic carrots grown without pesticides or chemical fertilizers. These vibrant orange carrots are packed with nutrients and have a sweet, crisp texture perfect for both raw consumption and cooking.',
    longDescription: 'Our organic carrots are carefully cultivated using traditional farming methods combined with modern sustainable practices. Rich in beta-carotene, vitamin A, and dietary fiber, these carrots offer exceptional nutritional value. They have been grown in mineral-rich soil and harvested at peak freshness to ensure maximum flavor and nutritional content.',
    images: [
      'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1306815/pexels-photo-1306815.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 450,
    unit: 'per kg',
    rating: 4.9,
    reviews: 127,
    inStock: true,
    stockCount: 45,
    categories: ['Vegetables', 'Organic', 'Root Vegetables'],
    tags: ['Organic', 'Fresh', 'Healthy', 'Pesticide-Free'],
    nutritionFacts: {
      calories: '41 per 100g',
      protein: '0.9g',
      carbs: '9.6g',
      fiber: '2.8g',
      vitaminA: '334% DV'
    },
    farmer: {
      id: 1,
      name: 'Rajesh Patel',
      farmName: 'Green Valley Farm',
      location: 'Sampaha, Sri Lanka',
      experience: '15 years',
      certifications: ['Organic Certified', 'Sustainable Farming'],
      description: 'A third-generation farmer dedicated to organic and sustainable farming practices. Rajesh has been growing premium vegetables for over 15 years.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+94 77 123 4567',
      email: 'rajesh@greenvalley.lk',
      totalProducts: 24,
      rating: 4.8,
      joinedDate: 'March 2019'
    }
  },
  2: {
    id: 2,
    name: 'Fresh Strawberries',
    description: 'Sweet, juicy strawberries picked fresh this morning from our highland farm. These premium berries are naturally sweet and bursting with flavor.',
    longDescription: 'Our strawberries are grown in the cool climate of Nuwara Eliya, where the perfect combination of altitude, temperature, and rainfall creates ideal conditions for exceptional berry production. Each strawberry is hand-picked at perfect ripeness to ensure maximum sweetness and nutritional value.',
    images: [
      'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1120575/pexels-photo-1120575.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1300512/pexels-photo-1300512.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 1200,
    unit: 'per basket',
    rating: 4.8,
    reviews: 89,
    inStock: true,
    stockCount: 28,
    categories: ['Fruits', 'Berries', 'Seasonal'],
    tags: ['Seasonal', 'Sweet', 'Fresh', 'Vitamin C Rich'],
    nutritionFacts: {
      calories: '32 per 100g',
      protein: '0.7g',
      carbs: '7.7g',
      fiber: '2.0g',
      vitaminC: '89% DV'
    },
    farmer: {
      id: 2,
      name: 'Priya Fernando',
      farmName: 'Berry Patch Farm',
      location: 'Nuwara Eliya, Sri Lanka',
      experience: '12 years',
      certifications: ['GAP Certified', 'Export Quality'],
      description: 'Specializing in premium berry cultivation in the hill country. Priya uses innovative farming techniques to produce the sweetest strawberries.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+94 77 987 6543',
      email: 'priya@berrypatch.lk',
      totalProducts: 18,
      rating: 4.9,
      joinedDate: 'January 2020'
    }
  },
  3: {
    id: 3,
    name: 'Sweet Corn',
    description: 'Freshly harvested sweet corn with tender kernels bursting with natural sweetness. Perfect for grilling, boiling, or adding to salads.',
    longDescription: 'Our sweet corn is grown using traditional methods passed down through generations. Each ear is carefully tended from planting to harvest, ensuring optimal sweetness and tenderness. The corn is harvested early in the morning to preserve its natural sugars and crisp texture.',
    images: [
      'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1625073/pexels-photo-1625073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1263675/pexels-photo-1263675.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 350,
    unit: 'per dozen',
    rating: 4.9,
    reviews: 203,
    inStock: true,
    stockCount: 67,
    categories: ['Vegetables', 'Grains', 'Sweet Corn'],
    tags: ['Fresh', 'Local', 'Organic', 'Sweet'],
    nutritionFacts: {
      calories: '86 per 100g',
      protein: '3.3g',
      carbs: '19g',
      fiber: '2.7g',
      vitaminB6: '15% DV'
    },
    farmer: {
      id: 3,
      name: 'Kumar Silva',
      farmName: 'Sunrise Farm',
      location: 'Anuradhapura, Sri Lanka',
      experience: '20 years',
      certifications: ['Organic Certified', 'Fair Trade'],
      description: 'Kumar has been farming for two decades and is known for producing the sweetest corn in the region using eco-friendly methods.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+94 77 456 7890',
      email: 'kumar@sunrisefarm.lk',
      totalProducts: 32,
      rating: 4.7,
      joinedDate: 'June 2018'
    }
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  const product = productsData[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    );
  }

  const totalPrice = product.price * quantity;

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    alert(`Added ${quantity} ${product.unit.replace('per ', '')} of ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FreshMarket</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Farmers</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600 transition-colors" />
              <Heart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600 transition-colors" />
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </div>
              <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600 transition-colors" />
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb and Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-green-600 transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </button>
      </div>

      {/* Product Details */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
              </button>
            </div>
            
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {product.tags.map((tag, index) => (
                  <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium text-gray-900">{product.rating}</span>
                  <span className="ml-1 text-gray-500">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-green-600">
                  <Check className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">In Stock ({product.stockCount} available)</span>
                </div>
              </div>

              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-3xl font-bold text-green-600">Rs. {product.price}</span>
                <span className="text-gray-500">{product.unit}</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Quantity</h3>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 text-gray-600 hover:text-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium text-gray-900 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockCount}
                    className="p-2 text-gray-600 hover:text-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="text-sm text-gray-500">
                  {product.stockCount} available
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-700">Total Price:</span>
                <span className="text-2xl font-bold text-green-600">Rs. {totalPrice}</span>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3">
                <Shield className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-medium text-gray-900">100% Organic</p>
                  <p className="text-sm text-gray-500">Certified quality</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3">
                <Heart className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-medium text-gray-900">Healthy Products</p>
                  <p className="text-sm text-gray-500">Chemical Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['details', 'farmer', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'details' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Details</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{product.longDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.categories.map((category, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Storage Tips</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Store in a cool, dry place</li>
                      <li>• Keep refrigerated for best quality</li>
                      <li>• Use within 7-10 days</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'farmer' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Meet the Farmer</h3>
                
                <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <img
                      src={product.farmer.avatar}
                      alt={product.farmer.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="mb-4">
                      <h4 className="text-2xl font-bold text-gray-900">{product.farmer.name}</h4>
                      <p className="text-green-600 font-medium">{product.farmer.farmName}</p>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{product.farmer.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{product.farmer.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-green-500" />
                          <div>
                            <p className="font-medium text-gray-900">Experience</p>
                            <p className="text-sm text-gray-600">{product.farmer.experience}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-green-500" />
                          <div>
                            <p className="font-medium text-gray-900">Rating</p>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="ml-1 text-sm">{product.farmer.rating}/5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-green-500" />
                          <div>
                            <p className="font-medium text-gray-900">Member Since</p>
                            <p className="text-sm text-gray-600">{product.farmer.joinedDate}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <ShoppingCart className="w-5 h-5 text-green-500" />
                          <div>
                            <p className="font-medium text-gray-900">Products</p>
                            <p className="text-sm text-gray-600">{product.farmer.totalProducts} items</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h5 className="font-semibold text-gray-900 mb-2">Certifications</h5>
                      <div className="flex flex-wrap gap-2">
                        {product.farmer.certifications.map((cert, index) => (
                          <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex space-x-4">
                      <a
                        href={`tel:${product.farmer.phone}`}
                        className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Farmer</span>
                      </a>
                      <a
                        href={`mailto:${product.farmer.email}`}
                        className="flex items-center space-x-2 border border-green-500 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      name: 'Kumari Attanayake',
                      rating: 5,
                      date: '2 days ago',
                      comment: 'Absolutely fresh and delicious! The quality is outstanding.',
                      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
                    },
                    {
                      name: 'M Farhan',
                      rating: 5,
                      date: '1 week ago',
                      comment: 'Great quality produce. Will definitely order again!',
                      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
                    },
                    {
                      name: 'Praveena Gallage',
                      rating: 4,
                      date: '2 weeks ago',
                      comment: 'Very fresh and organic. Loved the packaging too.',
                      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
                    }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{review.name}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(productsData)
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h4>
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">{relatedProduct.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-green-600">Rs. {relatedProduct.price}</span>
                      <button
                        onClick={() => navigate(`/product/${relatedProduct.id}`)}
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails