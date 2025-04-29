import React from "react";
import { Trash2 } from "lucide-react";

const Cart = () => {
  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      name: "Rose Gold Ring Set",
      price: 349,
      image: "/Ring.jpeg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Elegant Pearl Necklace",
      price: 549,
      image: "/Bracelet.jpeg",
      quantity: 2,
    },
  ];

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-pink-600 font-bold">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Quantity control (add logic later) */}
                  <div className="flex items-center border px-2 rounded-lg">
                    <button className="text-lg px-2">-</button>
                    <span className="px-2">{item.quantity}</span>
                    <button className="text-lg px-2">+</button>
                  </div>

                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-right">
            <h3 className="text-2xl font-bold">
              Total: ₹{totalAmount.toFixed(2)}
            </h3>
            <button className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
