import { useState, useEffect } from "react";
import { Edit, Save, ShoppingBag, User, MapPin, Phone } from "react-feather";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Your Name",
    phone: "+91 98765 43210",
    email: "user@example.com",
    address: "123, Near Temple Road, Mumbai, Maharashtra, India - 400001"
  });
  const [isEditing, setIsEditing] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock API fetch for orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockOrders = [
          {
            id: "#FC1001",
            date: "Apr 8, 2025",
            item: "Rose Gold Jhumka Set",
            amount: "₹349",
            status: "Delivered",
            trackingId: "TRK123456789",
            items: [
              { name: "Rose Gold Jhumka Set", quantity: 1, price: "₹349" }
            ]
          },
          {
            id: "#FC1002",
            date: "Mar 26, 2025",
            item: "Pearl Bracelet",
            amount: "₹199",
            status: "Shipped",
            trackingId: "TRK987654321",
            items: [
              { name: "Pearl Bracelet", quantity: 1, price: "₹199" }
            ]
          }
        ];
        
        setOrders(mockOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the profile
    console.log("Profile saved:", profile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 md:col-span-1">
        <div className="text-center mb-6">
          {/* <div className="relative inline-block">
            <img
              src="/avatar-placeholder.png"
              alt="Avatar"
              className="w-24 h-24 mx-auto rounded-full border-4 border-pink-100"
            />
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-pink-600 text-white p-2 rounded-full shadow-md hover:bg-pink-700 transition">
                <Edit size={14} />
              </button>
            )}
          </div> */}
          <h2 className="text-2xl font-semibold mt-4 text-gray-800">
            My Profile
          </h2>
        </div>

        <form className="space-y-4">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <User className="text-pink-600 mt-1" size={18} />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  disabled={!isEditing}
                  value={profile.name}
                  onChange={handleChange}
                  className={`w-full ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'} border rounded-lg px-4 py-2`}
                />
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="text-pink-600 mt-1" size={18} />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  disabled
                  value={profile.phone}
                  className="w-full border-transparent bg-gray-50 rounded-lg px-4 py-2"
                />
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="text-pink-600 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  disabled={!isEditing}
                  value={profile.email}
                  onChange={handleChange}
                  className={`w-full ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'} border rounded-lg px-4 py-2`}
                />
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="text-pink-600 mt-1" size={18} />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Shipping Address
                </label>
                <textarea
                  name="address"
                  disabled={!isEditing}
                  value={profile.address}
                  onChange={handleChange}
                  className={`w-full ${isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'} border rounded-lg px-4 py-2`}
                  rows="3"
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            {isEditing ? (
              <button
                type="button"
                onClick={handleSave}
                className="w-full flex items-center justify-center space-x-2 bg-pink-600 text-white py-2.5 rounded-lg hover:bg-pink-700 transition"
              >
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2.5 rounded-lg hover:bg-gray-200 transition"
              >
                <Edit size={16} />
                <span>Edit Profile</span>
              </button>
            )}
          </div>
        </form>
      </div>

      {/* My Orders Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 md:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center">
            <ShoppingBag className="text-pink-600 mr-2" size={20} />
            My Orders
          </h3>
          <span className="text-sm text-gray-500">
            {orders.length} {orders.length === 1 ? 'order' : 'orders'}
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-600"></div>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-medium text-gray-800">{order.item}</p>
                    <p className="text-sm text-gray-500">
                      {formatDate(order.date)} • {order.id}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-pink-600 font-semibold">{order.amount}</p>
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === "Delivered" 
                        ? "bg-green-100 text-green-800" 
                        : order.status === "Shipped" 
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {order.status}
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tracking ID:</span>
                    <span className="font-medium">{order.trackingId}</span>
                  </div>
                  
                  <button className="mt-3 text-sm text-pink-600 hover:text-pink-700 font-medium">
                    View Order Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;