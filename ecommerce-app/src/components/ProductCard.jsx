import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 relative group">
      {/* Wishlist icon */}
      <button className="absolute top-4 right-4 bg-white p-1 rounded-full shadow group-hover:scale-110 transition">
        <Heart className="w-5 h-5 text-gray-500 hover:text-pink-600" />
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-pink-600 font-medium mb-2">₹{product.price}</p>
      </div>

      {/* Add to cart */}
      <button className="w-full flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 rounded-lg transition">
        <ShoppingCart className="w-5 h-5" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
