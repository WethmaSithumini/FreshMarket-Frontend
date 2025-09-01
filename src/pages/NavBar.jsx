import { useState } from "react";
import { Menu, ShoppingCart, User, Search, Leaf, Heart, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Categories", href: "#categories" },
    { name: "Products", href: "#products" },
    { name: "Farmers", href: "#farmers" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              FreshMarket
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600 p-2">
              <Search className="w-4 h-4" />
            </button>
            <button className="text-gray-700 hover:text-green-600 p-2">
              <Heart className="w-4 h-4" />
            </button>
            <button className="text-gray-700 hover:text-green-600 p-2 relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-600 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="text-gray-700 hover:text-green-600 p-2">
              <User className="w-4 h-4" />
            </button>

            {/* Sign Up Button (desktop) */}
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-md font-medium"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 p-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-700 hover:text-green-600">
                  <Search className="w-4 h-4" />
                  Search Products
                </button>
                <button className="flex items-center gap-2 text-gray-700 hover:text-green-600">
                  <Heart className="w-4 h-4" />
                  Wishlist
                </button>
                <button className="flex items-center gap-2 text-gray-700 hover:text-green-600">
                  <ShoppingCart className="w-4 h-4" />
                  Cart (3)
                </button>
                <button className="flex items-center gap-2 text-gray-700 hover:text-green-600">
                  <User className="w-4 h-4" />
                  My Account
                </button>

                {/* Sign Up Button (mobile) */}
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsOpen(false);
                  }}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-md font-medium"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
