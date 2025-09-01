import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import AllProducts from "./components/AllProducts";
import ProductDetails from './pages/ProductDetails';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        {/* Landing page (Home) */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route
          path="/login"
          element={
            !user ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />
          }
        />

        {/* Dashboard (protected) */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* All Products */}
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
