import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import CartSummary from "./components/CartSummary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Menpage from "./pages/Menpage";
import Womenpage from "./pages/Womenpage";
import Backpacks from "./categories/Backpacks";
import Jackets from "./categories/Jackets"; 
import TrailVests from "./categories/TrailVests";
import MyAccount from "./pages/MyAccount";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./App.css";
import { SessionProvider } from "./contexts/SessionContext";


const CartSummaryWithVisibility = () => {
  const location = useLocation();


  if (location.pathname === "/" || location.pathname === "/myaccount" || location.pathname === "/login") {
    return null;
  }

  return <CartSummary />;
};

function App() {
  return (
    <SessionProvider>
    <CartProvider>
      <Router>
        <Header />
        <CartSummaryWithVisibility />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:category/:id" element={<Product />} />
          <Route path="/menpage" element={<Menpage />} /> 
          <Route path="/womenpage" element={<Womenpage />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/backpacks/:category" element={<Backpacks />} />
          <Route path="/jackets/:category" element={<Jackets />} /> 
          <Route path="/trailVests/:category" element={<TrailVests />} /> 
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
    </SessionProvider>
  );
}

export default App;
