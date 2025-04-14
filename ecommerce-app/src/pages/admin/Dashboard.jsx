import { FiBox, FiShoppingBag, FiUsers, FiDollarSign, FiActivity, FiPlus, FiList } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    newCustomers: 0
  });

  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API calls
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setStats({
          totalProducts: 142,
          totalOrders: 356,
          totalRevenue: 28950.75,
          newCustomers: 28
        });

        setRecentOrders([
          { id: 'ORD-2023-1056', customer: 'Alex Johnson', amount: 149.99, status: 'processing', date: '2023-11-15' },
          { id: 'ORD-2023-1055', customer: 'Maria Garcia', amount: 89.50, status: 'shipped', date: '2023-11-14' },
          { id: 'ORD-2023-1054', customer: 'Sam Wilson', amount: 210.00, status: 'delivered', date: '2023-11-13' },
          { id: 'ORD-2023-1053', customer: 'Lisa Chen', amount: 65.25, status: 'processing', date: '2023-11-12' },
          { id: 'ORD-2023-1052', customer: 'David Kim', amount: 175.50, status: 'delivered', date: '2023-11-11' }
        ]);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getStatusBadge = (status) => {
    const statusClasses = {
      processing: 'bg-yellow-100 text-yellow-800',
      shipped: 'bg-blue-100 text-blue-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs ${statusClasses[status] || 'bg-gray-100 text-gray-800'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store today.</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Products</p>
                    <p className="text-2xl font-bold mt-1">{stats.totalProducts}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                    <FiBox size={20} />
                  </div>
                </div>
                <Link to="/admin/products" className="text-sm text-blue-600 hover:underline mt-4 inline-block">
                  View all products
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Orders</p>
                    <p className="text-2xl font-bold mt-1">{stats.totalOrders}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 text-green-600">
                    <FiShoppingBag size={20} />
                  </div>
                </div>
                <Link to="/admin/orders" className="text-sm text-blue-600 hover:underline mt-4 inline-block">
                  View all orders
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                    <p className="text-2xl font-bold mt-1">${stats.totalRevenue.toLocaleString()}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                    <FiDollarSign size={20} />
                  </div>
                </div>
                <Link to="/admin/analytics" className="text-sm text-blue-600 hover:underline mt-4 inline-block">
                  View analytics
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">New Customers</p>
                    <p className="text-2xl font-bold mt-1">{stats.newCustomers}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-yellow-50 text-yellow-600">
                    <FiUsers size={20} />
                  </div>
                </div>
                <Link to="/admin/customers" className="text-sm text-blue-600 hover:underline mt-4 inline-block">
                  View customers
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link 
                  to="/admin/add-product" 
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition flex items-center"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mr-3">
                    <FiPlus size={18} />
                  </div>
                  <span>Add New Product</span>
                </Link>

                <Link 
                  to="/admin/orders" 
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition flex items-center"
                >
                  <div className="p-2 rounded-lg bg-green-50 text-green-600 mr-3">
                    <FiShoppingBag size={18} />
                  </div>
                  <span>Manage Orders</span>
                </Link>

                <Link 
                  to="/admin/products" 
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-purple-200 hover:shadow-md transition flex items-center"
                >
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 mr-3">
                    <FiList size={18} />
                  </div>
                  <span>View Products</span>
                </Link>

                <Link 
                  to="/admin/analytics" 
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-yellow-200 hover:shadow-md transition flex items-center"
                >
                  <div className="p-2 rounded-lg bg-yellow-50 text-yellow-600 mr-3">
                    <FiActivity size={18} />
                  </div>
                  <span>View Analytics</span>
                </Link>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FiShoppingBag className="mr-2" />
                  Recent Orders
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                          <Link to={`/admin/orders/${order.id}`}>{order.id}</Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(order.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.amount.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(order.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link 
                            to={`/admin/orders/${order.id}`} 
                            className="text-blue-600 hover:text-blue-900 hover:underline"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-gray-100 text-right">
                <Link 
                  to="/admin/orders" 
                  className="text-sm text-blue-600 hover:underline"
                >
                  View all orders →
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;