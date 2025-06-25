import ProductCard from "../components/ProductCard";

const sampleProduct = {
  name: "Rose Gold Necklace Set",
  price: 499,
  image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750316287/pexels-cottonbro-9428777_zgnh0c.jpg", // Make sure this exists in public/images or src/assets
};

const Shop = () => {
  return (
    
    <section className="py-10 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto grid grid-cols-1  gap-8 relative">
    
    {/* Filters Sidebar - Enhanced */}
    <aside className="hidden md:block fixed top-24 left-4 w-[260px] bg-white p-6 rounded-lg shadow-lg h-fit z-10 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800">Reset All</button>
      </div>
      
      {/* Category Filter - Enhanced */}
      <div className="mb-6 pb-6 border-b border-gray-100">
        <h4 className="font-medium text-gray-900 mb-3 flex items-center justify-between">
          <span>Category</span>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </h4>
        <ul className="space-y-2">
          {['Earrings', 'Necklaces', 'Bracelets', 'Rings', 'Anklets'].map((category) => (
            <li key={category} className="flex items-center">
              <input 
                id={`category-${category}`}
                type="checkbox" 
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-2" 
              />
              <label htmlFor={`category-${category}`} className="text-gray-700 text-sm cursor-pointer">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Price Filter - Enhanced */}
      <div className="mb-6 pb-6 border-b border-gray-100">
        <h4 className="font-medium text-gray-900 mb-4">Price Range</h4>
        <div className="px-1">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>₹100</span>
            <span>₹500</span>
            <span>₹1000+</span>
          </div>
          <input 
            type="range" 
            min="100" 
            max="1000" 
            step="50"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
          />
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-1">Min:</span>
            <span className="text-sm font-medium">₹100</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-1">Max:</span>
            <span className="text-sm font-medium">₹1000</span>
          </div>
        </div>
      </div>
      
      {/* Color Filter - Enhanced */}
      {/* <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Color</h4>
        <div className="grid grid-cols-3 gap-2">
          {[
            {name: 'Gold', value: 'bg-amber-400'},
            {name: 'Silver', value: 'bg-gray-300'},
            {name: 'Rose Gold', value: 'bg-rose-300'},
            {name: 'Black', value: 'bg-gray-800'},
            {name: 'Multicolor', value: 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500'},
          ].map((color) => (
            <div key={color.name} className="flex flex-col items-center">
              <button className={`w-8 h-8 rounded-full ${color.value} border border-gray-200 hover:ring-2 hover:ring-blue-300 mb-1`} 
                      aria-label={color.name} />
              <span className="text-xs text-gray-600">{color.name}</span>
            </div>
          ))}
        </div>
      </div> */}
      
      {/* Rating Filter - Added */}
      {/* <div className="mb-6 pb-6 border-b border-gray-100">
        <h4 className="font-medium text-gray-900 mb-3">Customer Rating</h4>
        <ul className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <li key={rating} className="flex items-center">
              <input 
                id={`rating-${rating}`}
                type="checkbox" 
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-2" 
              />
              <label htmlFor={`rating-${rating}`} className="text-gray-700 text-sm cursor-pointer flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs text-gray-500">& Up</span>
              </label>
            </li>
          ))}
        </ul>
      </div> */}
      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
        Apply Filters
      </button>
    </aside>
    
    {/* Product Grid - Enhanced */}
    <div className="md:ml-[300px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Jewelry Collection</h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Sort by:</span>
          <select className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(8)].map((_, i) => (
          <ProductCard key={i} product={sampleProduct} />
        ))}
      </div>
      
      {/* Pagination - Added */}
      <div className="mt-10 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <button className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Previous
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button 
              key={page}
              className={`px-3 py-1 border-t border-b border-gray-300 ${page === 1 ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  </div>
</section>
  
  );
};

export default Shop;
