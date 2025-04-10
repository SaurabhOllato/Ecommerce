import ProductCard from "../components/ProductCard";

const sampleProduct = {
  name: "Rose Gold Necklace Set",
  price: 499,
  image: "/Jhumka.jpeg", // Make sure this exists in public/images or src/assets
};

const Shop = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
        {/* Filters Sidebar */}
        <aside className="hidden md:block bg-white p-4 rounded-lg shadow h-fit">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Filters</h3>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-sm mb-2">Category</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><input type="checkbox" /> Earrings</li>
              <li><input type="checkbox" /> Necklaces</li>
              <li><input type="checkbox" /> Bracelets</li>
            </ul>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-sm mb-2">Price Range</h4>
            <input type="range" min="100" max="1000" className="w-full" />
            <p className="text-xs text-gray-500 mt-1">₹100 - ₹1000</p>
          </div>

          {/* Color Filter */}
          <div>
            <h4 className="font-medium text-sm mb-2">Color</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><input type="checkbox" /> Gold</li>
              <li><input type="checkbox" /> Silver</li>
              <li><input type="checkbox" /> Rose Gold</li>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(8)].map((_, i) => (
            <ProductCard key={i} product={sampleProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
