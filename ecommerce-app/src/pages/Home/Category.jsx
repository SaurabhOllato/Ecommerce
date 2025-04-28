import React from "react";
import Bracelet from './../../assets/Bracelet.jpeg';
import Bracelet1 from './../../assets/Bracelet1.jpeg';
import Jhumka from './../../assets/Jhumka.jpeg';
import Kangan from './../../assets/Kangan.jpeg';
import Ring from './../../assets/Ring.jpeg';


export default function Category() {
  const items = [
    {
      src: "/Bracelet.jpeg",
      alt: "Gold Rings",
    },
    {
      src: "/Bracelet.jpeg",
      alt: "Gold Earrings on Stone",
    },
    {
      src: "/Bracelet.jpeg",
      alt: "Gold Chain on Rock",
    },
    {
      src: "/Bracelet.jpeg",
      alt: "Gold Necklace Draped on Stones",
    },
    {
      src: "/Bracelet.jpeg",
      alt: "Double Gold Rings",
    },
    {
      src: "/Bracelet.jpeg",
      alt: "Gold and Silver Earrings",
    },
  ];
  return (
    <section class=" py-5 px-4 bg-gray-50">
  <div class="max-w-6xl mx-auto">
    {/* <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Shop by Category
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Discover our exquisite collection of handcrafted jewelry pieces for every occasion.
      </p>
    </div> */}
    <div className="text-center my-10">
  {/* Subtitle */}
  {/* <p className="text-gray-400 text-sm mb-2">Best Seller Product This Week!</p> */}

  {/* Title with underline and lines on both sides */}
  <div className="flex items-center justify-center gap-4">
    <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>

    <div className="inline-block">
      <h2 className="text-xl sm:text-2xl font-bold tracking-wider">Shop by Category</h2>
      <div className="w-10 h-0.5 bg-red-400 mx-auto mt-1"></div>
    </div>

    <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>
  </div>
</div>


    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {/* <!-- Ring Category --> */}
      <div class="bg-white  h-64 transition duration-300 cursor-pointer group overflow-hidden rounded-lg">
        <div class="relative overflow-hidden h-48 md:h-48">
          <img
            src={Bracelet}
            alt="Gold and diamond rings collection"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div class="p-2 flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800">Rings</h3>
          <span class="text-sm font-medium text-amber-600 group-hover:text-amber-800 transition-colors">
            Explore &rarr;
          </span>
        </div>
      </div>

      {/* <!-- Bangles Category --> */}
      <div class="bg-white shadow-md hover:shadow-xl transition h-64 duration-300 cursor-pointer group overflow-hidden rounded-lg">
        <div class="relative overflow-hidden h-48 md:h-48">
          <img
            src={Bracelet1}
            alt="Traditional bangles and bracelets"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div class="p-2 flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800">Bangles</h3>
          <span class="text-sm font-medium text-amber-600 group-hover:text-amber-800 transition-colors">
            Explore &rarr;
          </span>
        </div>
      </div>

      {/* <!-- Bracelets Category --> */}
      <div class="bg-white shadow-md hover:shadow-xl h-64 transition duration-300 cursor-pointer group overflow-hidden rounded-lg">
        <div class="relative overflow-hidden h-48">
          <img
            src={Kangan}
            alt="Elegant bracelets collection"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div class="p-2 flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800">Bracelets</h3>
          <span class="text-sm font-medium text-amber-600 group-hover:text-amber-800 transition-colors">
            Explore &rarr;
          </span>
        </div>
      </div>

      {/* <!-- Earrings Category --> */}
      <div class="bg-white shadow-md hover:shadow-xl h-64 transition duration-300 cursor-pointer group overflow-hidden rounded-lg">
        <div class="relative overflow-hidden h-48">
          <img
            src={Jhumka}
            alt="Traditional jhumka earrings"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div class="p-2 flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800">Earrings</h3>
          <span class="text-sm font-medium text-amber-600 group-hover:text-amber-800 transition-colors">
            Explore &rarr;
          </span>
        </div>
      </div>

      {/* <!-- Necklaces Category --> */}
      <div class="bg-white shadow-md hover:shadow-xl h-64 transition duration-300 cursor-pointer group overflow-hidden rounded-lg">
        <div class="relative overflow-hidden h-48 ">
          <img
            src={Ring}
            alt="Luxury necklaces collection"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div class="p-2 flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800">Necklaces</h3>
          <span class="text-sm font-medium text-amber-600 group-hover:text-amber-800 transition-colors">
            Explore &rarr;
          </span>
        </div>
      </div>

      {/* <!-- New Arrivals --> */}
      <div class="bg-white shadow-md hover:shadow-xl h-64 transition duration-300 cursor-pointer group overflow-hidden rounded-lg">
        <div class="relative overflow-hidden h-48 ">
          <img
            src={Bracelet}
            alt="Latest jewelry arrivals"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
          {/* <div class="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            New
          </div> */}
        </div>
        <div class="p-2 flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800">Bangales</h3>
          <span class="text-sm font-medium text-amber-600 group-hover:text-amber-800 transition-colors">
            Explore &rarr;
          </span>
        </div>
      </div>
    </div>

    {/* <!-- View All Button --> */}
    <div class="text-center mt-12">
      <a
        href="/shop"
        class="inline-block  text-black px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        aria-label="View all jewelry categories"
      >
        View All Categories
      </a>
    </div>
  </div>
</section>
  );
}
