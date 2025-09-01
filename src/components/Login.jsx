import React, { useState } from "react";
import {
  Leaf,
  ShoppingCart,
  Shield,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState("buyer");
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const roles = [
    {
      id: "farmer",
      title: "Farmer",
      icon: Leaf,
      description: "Sell your fresh produce",
      bgColor: "bg-emerald-500",
      hoverColor: "hover:bg-emerald-600",
      iconColor: "text-emerald-600",
    },
    {
      id: "buyer",
      title: "Buyer",
      icon: ShoppingCart,
      description: "Buy fresh products",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      iconColor: "text-blue-600",
    },
    {
      id: "admin",
      title: "Admin",
      icon: Shield,
      description: "Manage the platform",
      bgColor: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      iconColor: "text-purple-600",
    },
  ];

  const handleInputChange = (e) => {
    setErrors({});
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (isSignUp) {
      if (!formData.name) {
        newErrors.name = "Name is required";
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // simulate API call
    setTimeout(() => {
      onLogin({
        email: formData.email,
        role: selectedRole,
        name: isSignUp ? formData.name : formData.email.split("@")[0],
      });
      setIsLoading(false);
    }, 1500);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* ✅ Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">FreshMarket</h1>
          <p className="text-gray-600">
            {isSignUp
              ? "Join our community of farmers and buyers"
              : "Farm Fresh Products Direct to Your Door"}
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRole(role.id)}
                className={`flex flex-col items-center p-4 rounded-xl border transition-all ${
                  selectedRole === role.id
                    ? `${role.bgColor} text-white shadow-lg scale-105`
                    : "bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:shadow-md"
                }`}
              >
                <Icon
                  className={`w-6 h-6 mb-2 ${
                    selectedRole === role.id ? "text-white" : role.iconColor
                  }`}
                />
                <span className="text-sm font-medium">{role.title}</span>
              </button>
            );
          })}
        </div>

        {/* Login / Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-lg space-y-5"
        >
          {isSignUp && (
            <div>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          )}

          <div>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-10 py-2.5 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {isSignUp && (
            <div>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-10 py-2.5 rounded-lg border ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-70"
          >
            {isLoading
              ? "Processing..."
              : isSignUp
              ? "Create Account"
              : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={toggleMode}
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
