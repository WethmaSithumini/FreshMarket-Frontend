import { ArrowRight, ShoppingCart, Leaf, Users } from 'lucide-react'
import { Link } from 'react-router-dom';

export default function CoverPage() {
const handleBrowseProducts = () => {
    window.location.href = '/all-products';
};

return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden pt-16">
        {/* Background Cover Photo */}
        <div className="absolute inset-0 z-0">
            <img
                src="/cover-photo.jpg"
                alt="Farm background"
                className="w-full h-full object-cover"
                style={{ opacity: 0.25 }}
            />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-600 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                {/* Floating Icons */}
                <div className="flex justify-center mb-8 space-x-8">
                    <div className="animate-bounce delay-0">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                            <Leaf className="w-8 h-8 text-green-600" />
                        </div>
                    </div>
                    <div className="animate-bounce delay-150">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center shadow-lg">
                            <ShoppingCart className="w-8 h-8 text-emerald-600" />
                        </div>
                    </div>
                    <div className="animate-bounce delay-300">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center shadow-lg">
                            <Users className="w-8 h-8 text-teal-600" />
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        FreshMarket
                    </span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
                    Fresh from the Farm, Straight to You!
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Connect directly with local farmers and buy the freshest vegetables, fruits, grains, and more. Support local agriculture while getting the best quality produce at fair prices.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/login"
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-md flex items-center gap-2"
                    >
                        Shop Now
                        <ShoppingCart className="w-5 h-5" />
                    </Link>

                    <button
                        onClick={handleBrowseProducts}
                        className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-md flex items-center gap-2"
                    >
                        Browse Products
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                        <div className="text-gray-600">Local Farmers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">2,000+</div>
                        <div className="text-gray-600">Fresh Products</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-teal-600 mb-2">10,000+</div>
                        <div className="text-gray-600">Happy Customers</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}