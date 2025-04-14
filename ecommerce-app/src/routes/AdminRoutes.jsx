import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import AppRoutes from "./AppRoutes";
import WhatsAppFloating from "../pages/Whatsapp";
import AdminLayout from "../layouts/AdminLayout"; // ✅ Make sure this is uncommented
import Dashboard from "../pages/admin/Dashboard";
import AddProduct from "../pages/admin/AddProduct";
import ManageProducts from "../pages/admin/ManageProducts";

const isAdmin = true; // Replace this with your actual auth logic

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Your normal app routes */}
        <Route path="/*" element={<AppRoutes />} />

        {/* Admin routes */}
        {isAdmin ? (
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="manage-orders" element={<ManageProducts />} />
          </Route>
        ) : (
          <Route path="/admin/*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
      <WhatsAppFloating />
    </Router>
  );
};

export default App;
