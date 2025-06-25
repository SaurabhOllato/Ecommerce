import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Trash2 } from "lucide-react";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../feautures/cartActions";
import { Link } from "react-router-dom";
// import {
//   removeFromCart,
//   incrementQuantity,
//   decrementQuantity,
// } from "./features/cartActions"; // adjust path as per your project

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const { isAuthenticated } = useSelector((state) => state.auth);

  // console.log(cartItems);

  const totalAmount = cartItems.reduce((total, item) => {
    const price = Number(item.price || 0);
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
      {!isAuthenticated ? (
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600 text-lg mb-4">
              Please login to view your cart.
            </p>
            <Link
              to="/auth"
              className="mt-2 inline-block px-6 py-2 bg-pink-600 text-white text-sm font-medium rounded-md hover:bg-pink-700 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      ) : cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-24 w-24 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-pink-600 font-bold">
                      ₹{Number(item.price || 0).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Quantity control */}
                  <div className="flex items-center border px-2 rounded-lg">
                    <button
                      className="text-lg px-2"
                      onClick={() => dispatch(decrementQuantity(item._id))}
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="text-lg px-2"
                      onClick={() => dispatch(incrementQuantity(item._id))}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => dispatch(removeFromCart(item._id))}
                  >
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
