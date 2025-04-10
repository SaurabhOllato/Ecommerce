import { useState } from "react";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      
      {/* Left - Shipping Info */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Street Address" className="w-full border p-2 rounded" />
          <input type="text" placeholder="City" className="w-full border p-2 rounded" />
          <input type="text" placeholder="State" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Pincode" className="w-full border p-2 rounded" />
        </form>
      </div>

      {/* Right - Order Summary & Payment */}
      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>₹2348</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping</span>
            <span>₹50</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-3">
            <span>Total</span>
            <span>₹2398</span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="upi"
                onChange={() => setPaymentMethod("upi")}
              />
              UPI / Google Pay / PhonePe
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="card"
                onChange={() => setPaymentMethod("card")}
              />
              Debit / Credit Card
            </label>
          </div>
        </div>

        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl text-lg font-semibold">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
