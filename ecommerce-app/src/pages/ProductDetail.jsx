import { Star } from "lucide-react";

const ProductDetail = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="bg-pink-50 p-4 rounded-lg shadow-md">
        <img
          src="/Jhumka.jpeg"
          alt="Product"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Rose Gold Bridal Set</h1>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="text-sm text-gray-500 ml-2">(24 reviews)</span>
        </div>

        <p className="text-pink-600 text-xl font-semibold mb-4">₹349</p>

        <p className="text-gray-600 mb-6">
          Shine bright with this elegant bridal jewelry set, designed with love and style in mind. Perfect for festive occasions or weddings.
        </p>

        {/* Size / Variant Selection */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Select Size:</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-full">
            🛒 Add to Cart
          </button>
          <button className="border border-pink-600 text-pink-600 py-2 px-6 rounded-full hover:bg-pink-50">
            🤍 Add to Wishlist
          </button>
        </div>

        {/* Related Suggestions */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Example Related Products */}
            <img src="/Ring.jpeg" alt="" className="rounded-lg shadow-sm" />
            <img src="/Bracelet.jpeg" alt="" className="rounded-lg shadow-sm" />
            <img src="/Bracelet1.jpeg" alt="" className="rounded-lg shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
