import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Shop from "../pages/Shop";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Cart from "../pages/Cart";
// import Login from "../pages/Login";
import { AnimatePresence } from "framer-motion";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import CheckoutPage from "../pages/Checkout";
import AuthPage from "../pages/Auth";
import About from "../pages/About";
import WishlistPage from "../pages/Whistlist";
import CollectionPage from "../pages/Collection";
import ContactPage from "../pages/Contact";
import Profile from "../pages/Profile";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="*"
          element={<div className="p-4">404 - Page Not Found</div>}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
