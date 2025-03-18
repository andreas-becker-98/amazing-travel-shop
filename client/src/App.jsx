import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Menpage from "./pages/Menpage";
import Womenpage from "./pages/Womenpage";
import Accessories from "./pages/Accessories";
import MyAccount from "./pages/MyAccount";  
import Favourite from "./pages/Favourite";
import Cart from "./pages/Cart";
import '@fortawesome/fontawesome-svg-core/styles.css';  


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menpage" element={<Menpage />} />
        <Route path="/womenpage" element={<Womenpage />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/Favourite" element={<Favourite />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
