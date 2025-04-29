import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import ManageProducts from "./pages/admin/ManageProducts";
import WhatsAppFloating from "./pages/Whatsapp";
import ManageOrders from "./pages/admin/ManageOrders";

const isAdmin = true;

const App = () => {
  return (
    <Router>
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
      <WhatsAppFloating />
    </Router>
  );
};

export default App;
