import { Heart, ShoppingCart, X, MoveRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../feautures/cartActions";
import { toast } from "react-toastify";
import { removeFromWishlist } from "../feautures/wishlistSlice";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
    toast.error("Removed from wishlist");
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
     dispatch(removeFromWishlist(item._id));
    toast.success("Added to cart!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Wishlist
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1 ? "item" : "items"} saved for later
          </p>
        </div>

        {/* Wishlist Content */}
        {wishlistItems.length > 0 ? (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            {/* Desktop Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-6 bg-gray-100 p-4 border-b">
              <div className="col-span-5 font-medium text-gray-700">
                Product
              </div>
              <div className="col-span-2 font-medium text-gray-700">Price</div>
              <div className="col-span-3 font-medium text-gray-700">Stock</div>
              <div className="col-span-2 font-medium text-gray-700">
                Actions
              </div>
            </div>

            {/* Wishlist Items */}
            <div className="divide-y divide-gray-200">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 hover:bg-gray-50 transition-colors"
                >
                  {/* Product Info */}
                  <div className="md:col-span-5 flex items-center">
                    <div className="flex-shrink-0 h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 md:hidden">
                        {item.inStock ? (
                          <span className="text-green-600">In Stock</span>
                        ) : (
                          <span className="text-rose-600">Out of Stock</span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-2 flex items-center">
                    <div>
                      <p className="text-lg font-medium text-pink-600">
                        ₹{Number(item.price || 0).toFixed(2)}{" "}
                      </p>
                      {item.originalPrice > item.price && (
                        <p className="text-sm text-gray-500 line-through">
                          ${item.originalPrice.toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Stock Status */}
                  <div className="md:col-span-3 flex items-center max-md:hidden">
                    {item.inStock ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        In Stock
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="md:col-span-2 flex items-center justify-end space-x-4">
                    <button
                      className="text-gray-400 hover:text-rose-500 transition-colors"
                      onClick={() => handleRemove(item._id)}
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <button
                      disabled={!item.inStock}
                       onClick={() => handleAddToCart(item)}
                      className={`flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium ${
                        item.inStock
                          ? "bg-pink-600 text-white hover:bg-pink-700"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      } transition-colors`}
                    >
                      <ShoppingCart
                        className="h-4 w-4 mr-1"
                       
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="p-6 border-t border-gray-200 text-center">
              <Link
                to="/collections"
                className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
              >
                Continue Shopping
                <MoveRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <Heart className="mx-auto h-16 w-16 text-gray-300" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Your wishlist is empty
            </h3>
            <p className="mt-2 text-gray-500">
              Start adding items you love to your wishlist
            </p>
            <div className="mt-6">
              <Link
                to="/collections"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700"
              >
                Browse Collections
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
