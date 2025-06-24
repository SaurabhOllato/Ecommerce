import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import ManageProducts from "./pages/admin/ManageProducts";
import WhatsAppFloating from "./pages/Whatsapp";
import ManageOrders from "./pages/admin/ManageOrders";
import './index.css';

const isAdmin = true;

const App = () => {
  return (
    <Router  basename="/">
      <div id="scroll-detector" style={{ position: "absolute", top: 0, height: "1px", width: "100%" }}></div>
      <div className="w-full bg-black overflow-hidden">
  {/* <div className="whitespace-nowrap animate-marquee text-white text-sm py-2">
    <span className="mx-8">🔥 20% off on all earrings</span>
    <span className="mx-8">💎 Free shipping above ₹999</span>
    <span className="mx-8">✨ Buy 2 Get 1 Free on Bangles</span>
    <span className="mx-8">🛍️ New Collection Just Dropped!</span>
  </div> */}
</div>
      <Navbar />
      <Routes>
        {/* Normal app routes */}
        <Route path="/*" element={<AppRoutes />} />

        {/* Admin Routes - wrapped inside <Routes> */}
        {isAdmin ? (
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="manage-product" element={<ManageProducts />} />
            <Route path="manage-orders" element={<ManageOrders />} />
          </Route>
        ) : (
          <Route path="/admin/*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
      {/* <WhatsAppFloating /> */}
    </Router>
  );
};

export default App;
