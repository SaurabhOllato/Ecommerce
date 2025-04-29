import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  FiHome, 
  FiPlusSquare, 
  FiShoppingBag, 
  FiUsers,
  FiSettings,
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX
} from "react-icons/fi";

const AdminSidebar = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({
    products: location.pathname.includes('/admin/products'),
    users: false
  });
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile sidebar when resizing to desktop
      if (window.innerWidth >= 768) {
        setIsMobileSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path || 
           (path !== '/admin/dashboard' && location.pathname.startsWith(path));
  };

  // Close sidebar when clicking a link on mobile
  const handleLinkClick = () => {
    if (windowWidth < 768) {
      setIsMobileSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button 
        onClick={toggleMobileSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
      >
        {isMobileSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`w-64 h-screen bg-gray-700 text-white flex flex-col fixed z-40 transition-all duration-300
          ${windowWidth < 768 ? (isMobileSidebarOpen ? 'left-0' : '-left-64') : 'left-0'}`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold flex items-center">
            <FiSettings className="mr-2" /> Admin Panel
          </h2>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {/* Dashboard */}
            <li>
              <Link 
                to="/admin/dashboard"
                onClick={handleLinkClick}
                className={`flex items-center p-3 rounded-lg transition ${isActive('/admin/dashboard') ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
              >
                <FiHome className="mr-3" />
                Dashboard
              </Link>
            </li>

            {/* Products Dropdown */}
            <li>
              <button
                onClick={() => toggleMenu('products')}
                className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition"
              >
                <div className="flex items-center">
                  <FiShoppingBag className="mr-3" />
                  Products
                </div>
                {openMenus.products ? <FiChevronDown /> : <FiChevronRight />}
              </button>
              
              {openMenus.products && (
                <ul className="ml-8 mt-1 space-y-1">
                  <li>
                    <Link 
                      to="/admin/add-product"
                      onClick={handleLinkClick}
                      className={`flex items-center p-2 rounded-lg transition ${isActive('/admin/add-product') ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                    >
                      <FiPlusSquare className="mr-3 text-sm" />
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/admin/manage-product"
                      onClick={handleLinkClick}
                      className={`flex items-center p-2 rounded-lg transition ${isActive('/admin/products') ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                    >
                      <FiShoppingBag className="mr-3 text-sm" />
                      Manage Products
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Orders */}
            <li>
              <Link 
                to="/admin/manage-orders"
                onClick={handleLinkClick}
                className={`flex items-center p-3 rounded-lg transition ${isActive('/admin/orders') ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
              >
                <FiShoppingBag className="mr-3" />
                Manage Orders
              </Link>
            </li>

            {/* Users */}
            <li>
              <button
                onClick={() => toggleMenu('users')}
                className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition"
              >
                <div className="flex items-center">
                  <FiUsers className="mr-3" />
                  Users
                </div>
                {openMenus.users ? <FiChevronDown /> : <FiChevronRight />}
              </button>
              
              {openMenus.users && (
                <ul className="ml-8 mt-1 space-y-1">
                  <li>
                    <Link 
                      to="/admin/users"
                      onClick={handleLinkClick}
                      className={`flex items-center p-2 rounded-lg transition ${isActive('/admin/users') ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                    >
                      Manage Users
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/admin/add-user"
                      onClick={handleLinkClick}
                      className={`flex items-center p-2 rounded-lg transition ${isActive('/admin/add-user') ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                    >
                      Add New User
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
              <span className="text-sm font-bold">A</span>
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileSidebarOpen && windowWidth < 768 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMobileSidebar}
        />
      )}
    </>
  );
};

export default AdminSidebar;