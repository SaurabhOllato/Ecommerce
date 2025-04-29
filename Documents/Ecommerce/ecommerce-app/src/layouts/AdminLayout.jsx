// src/layouts/AdminLayout.jsx
// import AdminSidebar from "../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen ml-64">
        <Outlet /> {/* Renders the nested admin page here */}
      </div>
    </div>
  );
};

export default AdminLayout;
