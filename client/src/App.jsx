import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import CartSummary from "./components/CartSummary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Menpage from "./pages/Menpage";
import Womenpage from "./pages/Womenpage";
import Accessories from "./pages/Accessories";
import MyAccount from "./pages/MyAccount";
import Favourite from "./pages/Favourite";
import Backpacks from "./categories/Backpack";
import Jackets from "./categories/Jackets";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/menpage" element={<Menpage />} />
          <Route path="/backpacks" element={<Backpacks />} />
          <Route path="/jackets" element={<Jackets />} />
          <Route path="/womenpage" element={<Womenpage />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/Favourite" element={<Favourite />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

const CartSummaryWithVisibility = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return <CartSummary />;
};

export default App;
