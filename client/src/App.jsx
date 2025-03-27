import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import MyAccount from "./pages/MyAccount";
import SignUp from "./pages/Signup";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./App.css";
import { SessionProvider } from "./contexts/SessionContext";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <SessionProvider>
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:category/:id" element={<Product />} />
          <Route path="/menpage" element={<ProductList type="m" longType="men"/>} /> 
          <Route path="/womenpage" element={<ProductList type="w" longType="women"/>} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
    </SessionProvider>
  );
}

export default App;
